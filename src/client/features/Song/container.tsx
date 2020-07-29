import { graphql } from 'gatsby';
import * as React from 'react';
import { SongPage } from 'client/features/Song/template';
import { toCdNumber } from 'utils/strings';
import { SongResult } from 'server/actors/Songs/models';
import { MemberResult } from 'server/actors/Members/models';
import { arrayToObject } from 'utils/arrays';

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
      SongResult,
      | 'title'
      | 'type'
      | 'artwork'
      | 'single'
      | 'albums'
      | 'performersTag'
      | 'formations'
      | 'creators'
      | 'performers'
    >;
    allMembersJson: {
      nodes: Pick<
        MemberResult,
        'name' | 'profileImage' | 'singleImages' | 'nameNotations'
      >[];
    };
  };
}

const SongPageContainer = ({
  data: { songsJson, allMembersJson },
}: SongData) => {
  const songTags = React.useMemo(
    () => [
      ...[songsJson.single]
        .filter(({ number }) => number !== '')
        .map(({ number }) => `${toCdNumber(number)} single`),
      ...songsJson.albums.map(({ number }) => `${toCdNumber(number)} album`),
    ],
    [songsJson.single, songsJson.albums]
  );

  const members = React.useMemo(() => {
    let membersArray = allMembersJson.nodes;

    const singleNumber = songsJson.performersTag.singleNumber;

    for (const member of membersArray) {
      if (singleNumber !== '') {
        member.profileImage = member.singleImages[parseInt(singleNumber) - 1];
      }
    }

    return arrayToObject(membersArray, 'name');
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
    <SongPage
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

export default SongPageContainer;
