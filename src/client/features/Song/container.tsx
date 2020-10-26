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
      otherCds {
        title
        number
      }
      performersTag {
        name
        album {
          type
          number
        }
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
        profileImages {
          gallery
          singles {
            number
            url
          }
          albums {
            number
            url
          }
          digital {
            number
            url
          }
        }
      }
    }
  }
`;

type QueryResultSong = Pick<
  SongResult,
  | 'title'
  | 'type'
  | 'artwork'
  | 'single'
  | 'albums'
  | 'otherCds'
  | 'performersTag'
  | 'formations'
  | 'creators'
> & {
  performers: Pick<SongResult['performers'], 'center'>;
};

type QueryResultMember = Pick<
  MemberResult,
  'name' | 'nameNotations' | 'profileImages'
>;

type SongData = {
  data: {
    songsJson: QueryResultSong;
    allMembersJson: {
      nodes: QueryResultMember[];
    };
  };
};

type SongPerformer = Pick<QueryResultMember, 'name' | 'nameNotations'> & {
  profileImage: string;
};

export type SongPageProps = Pick<
  QueryResultSong,
  'title' | 'type' | 'performersTag' | 'creators'
> & {
  songTags: string[];
  artwork: string;
  formation: QueryResultSong['formations']['firstRow'][0][][];
  members: Record<SongPerformer['name'], SongPerformer>;
  centers: string[];
};

const SongPageContainer: React.FC<SongData> = props => {
  const { songsJson: songData, allMembersJson } = props.data;
  const membersData = allMembersJson.nodes;

  const songTags = React.useMemo(
    () => [
      ...[songData.single]
        .filter(({ number }) => number !== '')
        .map(({ number }) => `${toCdNumber(number)} single`),
      ...songData.albums.map(({ number }) => `${toCdNumber(number)} album`),
      ...songData.otherCds.map(({ number }) => `${toCdNumber(number)} digital`),
    ],
    [songData.single, songData.albums, songData.otherCds]
  );

  const members = React.useMemo<SongPageProps['members']>(() => {
    const membersArray = membersData.map(memberData => ({
      name: memberData.name,
      nameNotations: memberData.nameNotations,
      profileImage: getMemberProfileImage(
        songData.performersTag.album,
        memberData.profileImages
      ),
    }));

    return arrayToObject(membersArray, 'name');
  }, [membersData, songData]);

  const formation = React.useMemo(
    () =>
      [
        songData.formations.firstRow,
        songData.formations.secondRow,
        songData.formations.thirdRow,
        songData.formations.fourthRow,
      ].filter(formation => formation.length > 0),
    [songData.formations]
  );

  return songData ? (
    <SongPage
      title={songData.title}
      songTags={songTags}
      type={songData.type}
      artwork={songData.artwork}
      performersTag={songData.performersTag}
      formation={formation}
      members={members}
      centers={songData.performers.center}
      creators={songData.creators}
    />
  ) : null;
};

export default SongPageContainer;

function getMemberProfileImage(
  album: QueryResultSong['performersTag']['album'],
  profileImages: QueryResultMember['profileImages']
): string {
  const singleProfileImages = arrayToObject(profileImages.singles, 'number');
  const digitalProfileImages = arrayToObject(profileImages.digital, 'number');
  const albumProfileImages = arrayToObject(profileImages.albums, 'number');

  switch (album.type) {
    case 'single':
      return singleProfileImages[album.number].url;
    case 'digital':
      return digitalProfileImages[album.number].url;
    case 'album':
      return albumProfileImages[album.number].url;
    default:
      return profileImages.gallery.slice().reverse()[0];
  }
}
