import { graphql } from "gatsby";
import * as React from "react";
import { Member } from "client/components/templates/Member";
import { MemberResult } from "server/actors/Members/models";

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
      profileImage
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
      singleImages
    }
  }
`;

interface MemberData {
  data: {
    membersJson: MemberResult;
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
      .filter(image => image !== "");

    let uniqueList: string[] = [];

    for (const item of list) {
      let isSeen = false;

      for (const seenItem of uniqueList) {
        if (seenItem === item) {
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
