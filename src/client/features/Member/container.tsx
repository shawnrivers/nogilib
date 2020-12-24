import { graphql } from 'gatsby';
import * as React from 'react';
import { FluidObject } from 'gatsby-image';
import { MemberPage } from 'client/features/Member/template';
import { MemberResult } from 'server/actors/Members/models';
import { sortByDate } from 'utils/sorting';

export const query = graphql`
  query($name: String!) {
    membersJson(name: { eq: $name }) {
      nameNotations {
        firstName
        firstNameEn
        firstNameFurigana
        lastName
        lastNameEn
        lastNameFurigana
      }
      profileImages {
        gallery {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
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
      units {
        name
        type
      }
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

type QueryResultMember = Pick<
  MemberResult,
  | 'nameNotations'
  | 'graduation'
  | 'join'
  | 'birthday'
  | 'height'
  | 'bloodType'
  | 'origin'
  | 'units'
  | 'glowStickColor'
  | 'sites'
  | 'positionsHistory'
  | 'positionsCounter'
> & {
  profileImages: {
    gallery: {
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  };
  photoAlbums: {
    cover: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    release: MemberResult['photoAlbums'][0]['release'];
    sites: {
      title: MemberResult['photoAlbums'][0]['sites'][0]['title'];
      url: MemberResult['photoAlbums'][0]['sites'][0]['url'];
    }[];
    title: MemberResult['photoAlbums'][0]['title'];
    type: MemberResult['photoAlbums'][0]['type'];
  }[];
};

type QueryResult = {
  data: {
    membersJson: QueryResultMember;
  };
};

export type MemberPageProps = Pick<
  QueryResultMember,
  | 'nameNotations'
  | 'join'
  | 'graduation'
  | 'birthday'
  | 'height'
  | 'bloodType'
  | 'origin'
  | 'sites'
  | 'glowStickColor'
  | 'positionsHistory'
  | 'positionsCounter'
> & {
  units: string[];
  corps: string[];
  profileImageFluid: FluidObject;
  galleryFluids: FluidObject[];
  photoAlbums: (Omit<QueryResultMember['photoAlbums'][0], 'cover'> & {
    coverFluid: FluidObject;
  })[];
  shouldShowPositionCounter: boolean;
};

const MemberPageContainer: React.FC<QueryResult> = props => {
  const memberData = props.data.membersJson;

  const { units, corps } = React.useMemo(() => {
    let units = [];
    let corps = [];

    for (const unit of memberData.units) {
      if (unit.type === 'unit') {
        units.push(unit.name);
      } else {
        corps.push(unit.name);
      }
    }

    return {
      units,
      corps,
    };
  }, [memberData.units]);

  const photoBooks = React.useMemo(
    () =>
      sortByDate(
        memberData.photoAlbums.map(photoAlbum => ({
          ...photoAlbum,
          coverFluid: photoAlbum.cover.childImageSharp.fluid,
        })),
        'release'
      ),
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
    return memberData.profileImages.gallery
      .map(photo => photo.childImageSharp.fluid)
      .slice()
      .reverse();
  }, [memberData.profileImages.gallery]);

  return memberData ? (
    <MemberPage
      nameNotations={memberData.nameNotations}
      galleryFluids={gallery}
      profileImageFluid={gallery[0]}
      glowStickColor={memberData.glowStickColor}
      sites={memberData.sites}
      join={memberData.join}
      graduation={memberData.graduation}
      birthday={memberData.birthday}
      height={memberData.height}
      bloodType={memberData.bloodType}
      origin={memberData.origin}
      units={units}
      corps={corps}
      photoAlbums={photoBooks}
      shouldShowPositionCounter={shouldShowPositionCounter}
      positionsHistory={positionsHistory}
      positionsCounter={memberData.positionsCounter}
    />
  ) : null;
};

export default MemberPageContainer;
