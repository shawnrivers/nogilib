import * as React from "react";
import { graphql } from "gatsby";
import { Member } from "client/components/templates/Member";
import { GlowStickColorType, PositionType } from "client/utils/constants";

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
      sites {
        title
        url
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
      profileImage {
        large
        small
      }
      photoAlbums {
        title
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
      singleImages {
        large
        small
      }
    }
  }
`;

interface MemberData {
  data: {
    membersJson: {
      name: string;
      nameNotations: {
        firstName: string;
        firstNameEn: string;
        firstNameFurigana: string;
        lastName: string;
        lastNameEn: string;
        lastNameFurigana: string;
      };
      sites: {
        title: string;
        url: string;
      }[];
      join: string;
      graduation: {
        isGraduated: boolean;
      };
      birthday: string;
      height: number;
      bloodType: string;
      origin: string;
      units: {
        name: string;
        type: string;
      }[];
      glowStickColor: {
        left: GlowStickColorType;
        right: GlowStickColorType;
      };
      profileImage: {
        large: string;
        small: string;
      };
      photoAlbums: {
        title: string;
      }[];
      positionsHistory: {
        position: PositionType;
        singleNumber: string;
      }[];
      positionsCounter: {
        center: number;
        fukujin: number;
        selected: number;
        under: number;
      };
      singleImages: {
        large: string;
        small: string;
      }[];
    };
  };
}

const MemberContainer = ({ data: { membersJson } }: MemberData) => {
  const names = React.useMemo(
    () => ({
      ja:
        membersJson.nameNotations.lastName +
        " " +
        membersJson.nameNotations.firstName,
      en:
        membersJson.nameNotations.lastNameEn +
        " " +
        membersJson.nameNotations.firstNameEn,
      furigana:
        membersJson.nameNotations.lastNameFurigana +
        " " +
        membersJson.nameNotations.firstNameFurigana,
    }),
    [membersJson.nameNotations]
  );

  const { units, corps } = React.useMemo(() => {
    let units = [];
    let corps = [];

    for (const unit of membersJson.units) {
      if (unit.type === "unit") {
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

  const positionsHistory = React.useMemo(
    () =>
      membersJson.positionsHistory.filter(
        history => history.position !== "none"
      ),
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
    const list = membersJson.singleImages
      .slice()
      .reverse()
      .filter(image => image.large !== "");

    let uniqueList = [];

    for (const item of list) {
      let isSeen = false;

      for (const seenItem of uniqueList) {
        if (seenItem.large === item.large) {
          isSeen = true;
          break;
        }
      }

      if (!isSeen) {
        uniqueList.push(item);
      }
    }

    return uniqueList;
  }, [membersJson.singleImages]);

  return membersJson ? (
    <Member
      name={membersJson.name}
      names={names}
      profileImage={membersJson.profileImage}
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
      photoAlbums={membersJson.photoAlbums}
      shouldShowPositionCounter={shouldShowPositionCounter}
      positionsHistory={positionsHistory}
      positionsCounter={membersJson.positionsCounter}
      gallery={gallery}
    />
  ) : null;
};

export default MemberContainer;
