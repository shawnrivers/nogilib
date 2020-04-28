import { graphql } from "gatsby";
import * as React from "react";
import { Song } from "client/components/templates/Song";
import { arrayToObject } from "client/utils/arrays";
import { toCdNumber } from "client/utils/strings";
import { ResultMember } from "server/models/IMember";
import { ResultSong } from "server/models/ISong";

export const query = graphql`
  query($key: String!) {
    songsJson(key: { eq: $key }) {
      title
      type
      artwork
      single {
        title
        number
      }
      albums {
        title
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
          firstNameFurigana
          lastNameFurigana
          lastName
          lastNameEn
        }
        profileImage
        singleImages
      }
    }
  }
`;

interface SongData {
  data: {
    songsJson: Pick<
      ResultSong,
      | "title"
      | "type"
      | "artwork"
      | "single"
      | "albums"
      | "performersTag"
      | "formations"
      | "creators"
      | "performers"
    >;
    allMembersJson: {
      nodes: Pick<
        ResultMember,
        "name" | "profileImage" | "singleImages" | "nameNotations"
      >[];
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
    let membersArray = allMembersJson.nodes;

    const singleNumber = songsJson.performersTag.singleNumber;

    for (const member of membersArray) {
      if (singleNumber !== "") {
        member.profileImage = member.singleImages[Number(singleNumber) - 1];
      }
    }

    return arrayToObject(membersArray, "name");
  }, [allMembersJson.nodes, songsJson.performersTag.singleNumber]);

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
