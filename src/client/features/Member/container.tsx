import { graphql } from 'gatsby';
import * as React from 'react';
import { MemberPage } from 'client/features/Member/template';
import { MemberResult } from 'server/actors/Members/models';
import { sortByDate } from 'utils/arrays';

export const query = graphql`
  query($name: String!) {
    membersJson(name: { eq: $name }) {
      name
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
  | 'name'
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
  | 'name'
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
  names: {
    ja: string;
    en: string;
    furigana: string;
  };
  units: string[];
  corps: string[];
  profileImage: string;
  gallery: string[];
  shouldShowPositionCounter: boolean;
};

const MemberPageContainer: React.FC<QueryResult> = props => {
  const {
    data: { membersJson },
  } = props;

  const names = React.useMemo(
    () => ({
      ja:
        membersJson.nameNotations.lastName +
        ' ' +
        membersJson.nameNotations.firstName,
      en:
        membersJson.nameNotations.lastNameEn +
        ' ' +
        membersJson.nameNotations.firstNameEn,
      furigana:
        membersJson.nameNotations.lastNameFurigana +
        ' ' +
        membersJson.nameNotations.firstNameFurigana,
    }),
    [membersJson.nameNotations]
  );

  const { units, corps } = React.useMemo(() => {
    let units = [];
    let corps = [];

    for (const unit of membersJson.units) {
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
  }, [membersJson.units]);

  const photoBooks = React.useMemo(
    () => sortByDate(membersJson.photoAlbums, 'release', 'desc'),
    [membersJson.photoAlbums]
  );

  const positionsHistory = React.useMemo(
    () =>
      membersJson.positionsHistory
        .slice()
        .reverse()
        .filter(history => history.position !== 'none'),
    [membersJson.positionsHistory]
  );

  const shouldShowPositionCounter = React.useMemo(
    () =>
      membersJson.positionsCounter.center +
        membersJson.positionsCounter.fukujin +
        membersJson.positionsCounter.selected +
        membersJson.positionsCounter.under >
      0,
    [membersJson.positionsCounter]
  );

  const gallery = React.useMemo(() => {
    return membersJson.profileImages.gallery.slice().reverse();
  }, [membersJson.profileImages.gallery]);

  return membersJson ? (
    <MemberPage
      name={membersJson.name}
      names={names}
      gallery={gallery}
      profileImage={gallery[0]}
      glowStickColor={membersJson.glowStickColor}
      sites={membersJson.sites}
      join={membersJson.join}
      graduation={membersJson.graduation}
      birthday={membersJson.birthday}
      height={membersJson.height}
      bloodType={membersJson.bloodType}
      origin={membersJson.origin}
      units={units}
      corps={corps}
      photoAlbums={photoBooks}
      shouldShowPositionCounter={shouldShowPositionCounter}
      positionsHistory={positionsHistory}
      positionsCounter={membersJson.positionsCounter}
    />
  ) : null;
};

export default MemberPageContainer;
