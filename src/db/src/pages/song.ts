import * as path from 'path';
import { Members } from 'db/src/actors/Members';
import { MemberResult } from 'db/src/actors/Members/models';
import { Songs } from 'db/src/actors/Songs';
import { SongResult } from 'db/src/actors/Songs/models';
import {
  KOJIHARU_IMAGE_FILENAME,
  NO_PROFILE_IMAGE_FILENAME,
} from 'db/src/constants/paths';
import { ImageUrl } from 'db/src/types/commons';
import {
  convertPathnameToClientStaticFileUrl,
  findFilePathname,
  getResponsiveImageUrl,
} from 'db/src/utils/path';
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
    profileImage: ImageUrl;
    position: 'center' | 'fukujin' | null;
    isMember: boolean;
  }[][];
};

function getPerformerPosition(
  song: SongResult,
  memberName: MemberResult['name']
): SongPageData['performers'][0][0]['position'] {
  if (song.performers.center.includes(memberName)) {
    return 'center';
  }

  if (song.performers.fukujin.members.includes(memberName)) {
    return 'fukujin';
  }

  return null;
}

function getPerformerProfileImage(params: {
  song: SongResult;
  member: MemberResult;
  singleNumber?: string;
}): ImageUrl {
  const { song, member, singleNumber } = params;
  const { profileImages } = member;
  const { album } = song.performersTag;
  const { single } = song;

  const singleProfileImages = arrayToObject(profileImages.singles, 'number');
  // If the song is in a single, use the single's profile image.
  if (single.number in singleProfileImages) {
    return singleProfileImages[single.number].url;
  }

  if (singleNumber !== undefined && singleNumber in singleProfileImages) {
    return singleProfileImages[singleNumber].url;
  }

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
        if (memberNameKey !== 'kojimaharuna') {
          const member = membersObject[memberNameKey];
          return {
            name: member.name,
            nameNotations: member.nameNotations,
            profileImage: getPerformerProfileImage({
              song,
              member,
              singleNumber: song.performers.type?.single,
            }),
            position: getPerformerPosition(song, member.name),
            isMember: true,
          };
        } else {
          const pathname =
            findFilePathname(
              path.join('public', 'images', 'members', 'others'),
              KOJIHARU_IMAGE_FILENAME
            ) ??
            findFilePathname(
              path.join('public', 'images', 'members'),
              NO_PROFILE_IMAGE_FILENAME
            );

          if (pathname === null) {
            throw new Error(
              "Kojima Haruna's profile image and the fallback profile image file might have been lost or renamed."
            );
          }

          return {
            name: 'kojimaharuna',
            nameNotations: {
              lastName: '小嶋',
              lastNameEn: 'kojima',
              lastNameFurigana: 'こじま',
              firstName: '陽菜',
              firstNameEn: 'haruna',
              firstNameFurigana: 'はるな',
            },
            profileImage: getResponsiveImageUrl(
              convertPathnameToClientStaticFileUrl(pathname)
            ),
            position: getPerformerPosition(song, 'kojimaharuna'),
            isMember: false,
          };
        }
      })
    );
}

export function getSongPageData(
  songs: Songs,
  members: Members
): SongPageData[] {
  if (!songs.isConverted) {
    throw new Error('Please convert Songs data at first.');
  }

  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
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
  }));
}
