import { Members } from 'server/actors/Members';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { PositionType } from 'server/actors/Members/constants/position';
import { MemberResult } from 'server/actors/Members/models';
import { Songs } from 'server/actors/Songs';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import { SongResult } from 'server/actors/Songs/models';
import { SpotifyIds, SpotifySongId } from 'server/actors/Spotify/models';
import { KOJIHARU_IMAGE_SRC } from 'server/constants/paths';
import { MusicExternalLinks } from 'server/types/commons';
import { convertImageFilePath } from 'server/utils/path';
import { arrayToObject } from 'utils/array';

export type SongPageData = {
  key: SongResult['key'];
  title: SongResult['title'];
  type: SongResult['type'];
  artwork: SongResult['artwork'];
  creators: SongResult['creators'];
  single: SongResult['single'];
  albums: SongResult['albums'];
  otherCds: SongResult['otherCds'];
  performersTag: SongResult['performersTag'];
  performers: {
    name: MemberResult['name'];
    nameNotations: MemberResult['nameNotations'];
    profileImage: string;
    position: PositionType.Center | PositionType.Fukujin | null;
    isMember: boolean;
  }[][];
  externalLinks?: Partial<MusicExternalLinks>;
};

function getPerformerPosition(
  song: SongResult,
  memberName: MemberResult['name']
): SongPageData['performers'][0][0]['position'] {
  if (song.performers.center.includes(memberName)) {
    return PositionType.Center;
  }

  if (song.performers.fukujin.members.includes(memberName)) {
    return PositionType.Fukujin;
  }

  return null;
}

function getPerformerProfileImage(
  song: SongResult,
  member: MemberResult
): string {
  const { album } = song.performersTag;
  const { profileImages } = member;

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

function getSongPerformers(
  song: SongResult,
  members: Members
): SongPageData['performers'] {
  const membersObject = members.getResultObject();

  return [
    song.formations.firstRow,
    song.formations.secondRow,
    song.formations.thirdRow,
    song.formations.fourthRow,
  ]
    .filter(formation => formation.length > 0)
    .map(row =>
      row.map(memberNameKey => {
        if (memberNameKey !== MemberNameKey.KojimaHaruna) {
          const member = membersObject[memberNameKey];
          return {
            name: member.name,
            nameNotations: member.nameNotations,
            profileImage: getPerformerProfileImage(song, member),
            position: getPerformerPosition(song, member.name),
            isMember: true,
          };
        } else {
          return {
            name: MemberNameKey.KojimaHaruna,
            nameNotations: {
              lastName: '小嶋',
              lastNameEn: 'kojima',
              lastNameFurigana: 'こじま',
              firstName: '陽菜',
              firstNameEn: 'haruna',
              firstNameFurigana: 'はるな',
            },
            profileImage: convertImageFilePath(KOJIHARU_IMAGE_SRC),
            position: getPerformerPosition(song, MemberNameKey.KojimaHaruna),
            isMember: false,
          };
        }
      })
    );
}

type SpotifySongIdMap = Record<SongTitle, SpotifySongId> | undefined;

function getSongExternalLinks(
  song: SongResult,
  spotifySongIdMap: SpotifySongIdMap
): SongPageData['externalLinks'] {
  if (spotifySongIdMap !== undefined) {
    const spotifySongId = spotifySongIdMap[song.title]?.id;

    return {
      spotifyEmbed: spotifySongId
        ? `https://open.spotify.com/embed/track/${spotifySongId}`
        : undefined,
    };
  }

  return undefined;
}

export function getSongPageData(
  songs: Songs,
  members: Members,
  spotifyIds?: SpotifyIds
): SongPageData[] {
  if (!songs.isConverted) {
    throw new Error('Please convert Songs data at first.');
  }

  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
  }

  let spotifySongIdMap: SpotifySongIdMap = undefined;

  if (spotifyIds !== undefined) {
    spotifySongIdMap = arrayToObject(spotifyIds.songs, 'title');
  }

  return songs.result.map(song => ({
    key: song.key,
    title: song.title,
    type: song.type,
    artwork: song.artwork,
    creators: song.creators,
    single: song.single,
    albums: song.albums,
    otherCds: song.otherCds,
    performersTag: song.performersTag,
    performers: getSongPerformers(song, members),
    externalLinks: getSongExternalLinks(song, spotifySongIdMap),
  }));
}
