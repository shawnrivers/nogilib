import * as React from "react";
import { graphql } from "gatsby";
import { SongType } from "types/responseTypes";
import { Song } from "components/templates/Song";
import { toCdNumber } from "utils/strings";
import { arrayToObject } from "utils/arrays";

export const query = graphql`
  query($key: String!) {
    songsJson(key: { eq: $key }) {
      title
      type
      artwork {
        large
        medium
      }
      single {
        number
      }
      albums {
        number
      }
      performersTag {
        singleNumber
        name
      }
      performers {
        center
      }
      formations {
        firstRow
        fourthRow
        secondRow
        thirdRow
      }
      creators {
        arrange
        compose
        direct
        lyrics
      }
    }
    allMembersJson {
      nodes {
        name
        nameNotations {
          firstName
          firstNameEn
          lastName
          lastNameEn
        }
        profileImage {
          large
          small
        }
        singleImages {
          large
          small
        }
      }
    }
  }
`;

interface SongData {
  data: {
    songsJson: {
      title: string;
      type: SongType;
      artwork: {
        large: string;
        medium: string;
      };
      single: {
        number: string;
      };
      albums: {
        number: string;
      }[];
      performersTag: {
        singleNumber: string;
        name: string;
      };
      performers: {
        center: string[];
      };
      formations: {
        firstRow: string[];
        fourthRow: string[];
        secondRow: string[];
        thirdRow: string[];
      };
      creators: {
        arrange: string[];
        compose: string[];
        direct: string[];
        lyrics: string[];
      };
    };
    allMembersJson: {
      nodes: {
        name: string;
        nameNotations: {
          lastName: string;
          firstName: string;
          lastNameEn: string;
          firstNameEn: string;
        };
        profileImage: {
          large: string;
          small: string;
        };
        singleImages: {
          large: string;
          small: string;
        }[];
      }[];
    };
  };
}

const SongContainer = ({ data: { songsJson, allMembersJson } }: SongData) => {
  const songTags = React.useMemo(
    () => [
      ...[songsJson.single]
        .filter(({ number }) => number !== "")
        .map(({ number }) => `#${toCdNumber(number)} single`),
      ...songsJson.albums.map(({ number }) => `#${toCdNumber(number)} album`),
    ],
    [songsJson.single, songsJson.albums]
  );

  const members = React.useMemo(() => {
    const singleNumber = Number(songsJson.single.number);

    let membersArray = allMembersJson.nodes;

    for (const member of membersArray) {
      if (songsJson.single.number !== "") {
        member.profileImage = member.singleImages[singleNumber - 1];
      }
    }

    return arrayToObject(membersArray, "name");
  }, [allMembersJson.nodes, songsJson.single.number]);

  const formation = React.useMemo(
    () =>
      [
        songsJson.formations.firstRow,
        songsJson.formations.secondRow,
        songsJson.formations.thirdRow,
        songsJson.formations.fourthRow,
      ].filter(formation => formation.length > 0),
    [songsJson.formations]
  );

  return songsJson ? (
    <Song
      title={songsJson.title}
      songTags={songTags}
      type={songsJson.type}
      artwork={songsJson.artwork}
      performersTag={songsJson.performersTag}
      formation={formation}
      members={members}
      centers={songsJson.performers.center}
      creators={songsJson.creators}
    />
  ) : null;
};

export default SongContainer;
