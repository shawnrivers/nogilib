import { graphql } from 'gatsby';
import * as React from 'react';
import { MemberPage } from 'client/features/Member/template';
import { MemberResult } from 'server/actors/Members/models';
import { sortByDate } from 'utils/arrays';

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
        gallery
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
        cover
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
  | 'photoAlbums'
  | 'positionsHistory'
  | 'positionsCounter'
> & {
  profileImages: Pick<MemberResult['profileImages'], 'gallery'>;
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
  | 'photoAlbums'
  | 'positionsHistory'
  | 'positionsCounter'
> & {
  units: string[];
  corps: string[];
  profileImage: string;
  gallery: string[];
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
    () => sortByDate(memberData.photoAlbums, 'release', 'desc'),
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
    return memberData.profileImages.gallery.slice().reverse();
  }, [memberData.profileImages.gallery]);

  return memberData ? (
    <MemberPage
      nameNotations={memberData.nameNotations}
      gallery={gallery}
      profileImage={gallery[0]}
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
