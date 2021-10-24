import { Members } from 'server/actors/Members';
import { MemberResult } from 'server/actors/Members/models';
import { Songs } from 'server/actors/Songs';
import { SongResult } from 'server/actors/Songs/models';
import { KOJIHARU_IMAGE_FILENAME } from 'server/constants/paths';
import { ImageUrl } from 'server/types/commons';
import {
  complementImageFilePathname,
  convertImageFilePath,
  findPathname,
  getPath,
  getResponsiveImageUrls,
} from 'server/utils/path';
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

function getPerformerProfileImage(
  song: SongResult,
  member: MemberResult
): ImageUrl {
  const { profileImages } = member;
  const { album } = song.performersTag;
  const { single } = song;

  const singleProfileImages = arrayToObject(profileImages.singles, 'number');

  // If the song is in a single, use the single's profile image.
  if (singleProfileImages[single.number]) {
    return singleProfileImages[single.number].url;
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
            profileImage: getPerformerProfileImage(song, member),
            position: getPerformerPosition(song, member.name),
            isMember: true,
          };
        } else {
          const dirname = complementImageFilePathname('/images/members/others');
          const pathname = findPathname(dirname, KOJIHARU_IMAGE_FILENAME);
          const path = getPath(pathname ?? '');

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
            profileImage: getResponsiveImageUrls(
              convertImageFilePath(
                `/images/members/others/${path.filename}${path.extension}`
              )
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
