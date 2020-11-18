import { graphql } from 'gatsby';
import * as React from 'react';
import { SongPage } from 'client/features/Song/template';
import { toCdNumber } from 'utils/strings';
import { SongResult } from 'server/actors/Songs/models';
import { MemberResult } from 'server/actors/Members/models';
import { arrayToObject } from 'utils/arrays';
import { PositionType } from 'server/actors/Members/constants/position';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { NameNotationsForIntl } from 'client/hooks/useIntl';
import { KOJIHARU_IMAGE_SRC } from 'server/constants/paths';

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
        fukujin {
          members
        }
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
  performers: {
    center: SongResult['performers']['center'];
    fukujin: Pick<SongResult['performers']['fukujin'], 'members'>;
  };
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

type Member = {
  name: MemberNameKey;
  nameNotations: NameNotationsForIntl;
  profileImage: string;
};

type SongPerformer = Member & {
  position?: PositionType;
  isLink: boolean;
};

export type SongPageProps = Pick<
  QueryResultSong,
  'title' | 'type' | 'performersTag' | 'creators'
> & {
  songTags: string[];
  artwork: string;
  formation: SongPerformer[][];
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

  const members = React.useMemo<Record<MemberNameKey, Member>>(() => {
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

  const formation = React.useMemo<SongPageProps['formation']>(
    () =>
      [
        songData.formations.firstRow,
        songData.formations.secondRow,
        songData.formations.thirdRow,
        songData.formations.fourthRow,
      ]
        .filter(formation => formation.length > 0)
        .map(row =>
          row.map(memberNameKey => {
            if (memberNameKey !== MemberNameKey.KojimaHaruna) {
              const member = members[memberNameKey];
              return {
                ...member,
                position: getMemberPosition(member.name, songData.performers),
                isLink: true,
              };
            } else {
              return {
                name: MemberNameKey.KojimaHaruna,
                nameNotations: {
                  lastName: '小嶋',
                  firstName: '陽菜',
                  lastNameEn: 'kojima',
                  firstNameEn: 'haruna',
                },
                profileImage: KOJIHARU_IMAGE_SRC,
                position: getMemberPosition(
                  MemberNameKey.KojimaHaruna,
                  songData.performers
                ),
                isLink: false,
              };
            }
          })
        ),
    [members, songData.formations, songData.performers]
  );

  return songData ? (
    <SongPage
      title={songData.title}
      songTags={songTags}
      type={songData.type}
      artwork={songData.artwork}
      performersTag={songData.performersTag}
      formation={formation}
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

function getMemberPosition(
  memberName: Member['name'],
  songPerformers: QueryResultSong['performers']
): PositionType | undefined {
  if (songPerformers.center.includes(memberName)) {
    return PositionType.Center;
  }

  if (songPerformers.fukujin.members.includes(memberName)) {
    return PositionType.Fukujin;
  }

  return undefined;
}
