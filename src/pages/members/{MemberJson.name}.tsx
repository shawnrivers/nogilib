import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { MemberPage } from 'client/templates/Member';
import { MemberPageData } from 'server/pages/member';

export const query = graphql`
  query($name: String!) {
    memberJson(name: { eq: $name }) {
      nameNotations {
        firstName
        firstNameEn
        firstNameFurigana
        lastName
        lastNameEn
        lastNameFurigana
      }
      profileImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallery {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      join
      graduation {
        isGraduated
      }
      birthday
      height
      bloodType
      origin
      units
      corps
      glowStickColor {
        left
        right
      }
      sites {
        title
        url
      }
      photoAlbums {
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        release
        sites {
          title
          url
        }
        title
        type
      }
      positionsHistory {
        position
        singleNumber
      }
      positionsCounter {
        center
        fukujin
        selected
        under
      }
    }
  }
`;

type MemberPageDataNode = {
  nameNotations: MemberPageData['nameNotations'];
  profileImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  gallery: {
    childImageSharp: {
      fluid: FluidObject;
    };
  }[];
  join: MemberPageData['join'];
  graduation: {
    isGraduated: MemberPageData['graduation']['isGraduated'];
  };
  birthday: MemberPageData['birthday'];
  height: MemberPageData['height'];
  bloodType: MemberPageData['bloodType'];
  origin: MemberPageData['origin'];
  units: MemberPageData['units'];
  corps: MemberPageData['corps'];
  glowStickColor: MemberPageData['glowStickColor'];
  sites: MemberPageData['sites'];
  photoAlbums: (Omit<MemberPageData['photoAlbums'][0], 'cover'> & {
    cover: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  })[];
  positionsHistory: MemberPageData['positionsHistory'];
  positionsCounter: MemberPageData['positionsCounter'];
};

export type MemberPageProps = Omit<
  MemberPageDataNode,
  'gallery' | 'profileImage' | 'photoAlbums'
> & {
  profileImageFluid: FluidObject;
  galleryFluids: FluidObject[];
  photoAlbums: (Omit<MemberPageDataNode['photoAlbums'][0], 'cover'> & {
    coverFluid: FluidObject;
  })[];
  shouldShowPositionCounter: boolean;
};

const MemberPageContainer: React.FC<{
  data: {
    memberJson: MemberPageDataNode;
  };
}> = props => {
  const memberData = props.data.memberJson;

  const photoBooks = React.useMemo(
    () =>
      memberData.photoAlbums.map(photoAlbum => ({
        ...photoAlbum,
        coverFluid: photoAlbum.cover.childImageSharp.fluid,
      })),
    [memberData.photoAlbums]
  );

  const positionsHistory = React.useMemo(
    () =>
      memberData.positionsHistory
        .slice()
        .reverse()
        .filter(history => history.position !== 'none'),
    [memberData.positionsHistory]
  );

  const shouldShowPositionCounter = React.useMemo(
    () =>
      memberData.positionsCounter.center +
        memberData.positionsCounter.fukujin +
        memberData.positionsCounter.selected +
        memberData.positionsCounter.under >
      0,
    [memberData.positionsCounter]
  );

  const gallery = React.useMemo(() => {
    return memberData.gallery.map(photo => photo.childImageSharp.fluid);
  }, [memberData.gallery]);

  return memberData ? (
    <MemberPage
      nameNotations={memberData.nameNotations}
      profileImageFluid={memberData.profileImage.childImageSharp.fluid}
      galleryFluids={gallery}
      glowStickColor={memberData.glowStickColor}
      sites={memberData.sites}
      join={memberData.join}
      graduation={memberData.graduation}
      birthday={memberData.birthday}
      height={memberData.height}
      bloodType={memberData.bloodType}
      origin={memberData.origin}
      units={memberData.units}
      corps={memberData.corps}
      photoAlbums={photoBooks}
      shouldShowPositionCounter={shouldShowPositionCounter}
      positionsHistory={positionsHistory}
      positionsCounter={memberData.positionsCounter}
    />
  ) : null;
};

export default MemberPageContainer;
