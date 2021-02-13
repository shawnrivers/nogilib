import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
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
          gatsbyImageData(width: 300, quality: 95, layout: CONSTRAINED)
        }
      }
      gallery {
        childImageSharp {
          gatsbyImageData(width: 165, layout: CONSTRAINED)
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
            gatsbyImageData(width: 270, layout: CONSTRAINED)
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
      gatsbyImageData: IGatsbyImageData;
    };
  };
  gallery: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
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
        gatsbyImageData: IGatsbyImageData;
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
  profileImageData: IGatsbyImageData;
  galleryFluids: IGatsbyImageData[];
  photoAlbums: (Omit<MemberPageDataNode['photoAlbums'][0], 'cover'> & {
    coverImageData: IGatsbyImageData;
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
        coverImageData: photoAlbum.cover.childImageSharp.gatsbyImageData,
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
    return memberData.gallery.map(
      photo => photo.childImageSharp.gatsbyImageData
    );
  }, [memberData.gallery]);

  return memberData ? (
    <MemberPage
      nameNotations={memberData.nameNotations}
      profileImageData={memberData.profileImage.childImageSharp.gatsbyImageData}
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
