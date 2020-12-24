import * as fs from 'fs';
import * as path from 'path';
import {
  MemberResult,
  MemberRaw,
  DiscographyProfileImage,
} from 'server/actors/Members/models';
import { UnitsRawArray } from 'server/actors/Units/models';
import { SongsRawObject } from 'server/actors/Songs/models';
import { SongType } from 'server/actors/Songs/constants/songType';
import { PositionType } from 'server/actors/Members/constants/position';
import {
  DiscographyRawArray,
  DiscographyRaw,
} from 'server/actors/Discography/models';
import { sortByDate } from 'utils/sorting';
import { convertImageFilePath } from 'server/utils/paths';

type GalleryWithDate = {
  url: string;
  date: string;
}[];

function getProfileImageTypeFolderName(
  discographyType: DiscographyRaw['type']
): string {
  let profileImageTypeFolderName: string;

  switch (discographyType) {
    case 'single':
      profileImageTypeFolderName = 'singles';
      break;
    case 'album':
      profileImageTypeFolderName = 'albums';
      break;
    case 'digital':
      profileImageTypeFolderName = 'digital';
      break;
  }

  return profileImageTypeFolderName;
}

function getDiscographyGalleryWithDate(params: {
  memberName: MemberRaw['name'];
  discographyRawArray: DiscographyRawArray;
  discographyType: Parameters<typeof getProfileImageTypeFolderName>[0];
}): GalleryWithDate {
  const { memberName, discographyRawArray, discographyType } = params;

  const profileImageTypeFolderName = getProfileImageTypeFolderName(
    discographyType
  );

  const discographyGallery = [];

  for (let i = 0; i < discographyRawArray.length; i++) {
    const albumNumber = discographyRawArray[i].number;

    const profileImageSrc = `members/${profileImageTypeFolderName}/${albumNumber}/${memberName}.jpg`;

    if (fs.existsSync('./src/assets/images/' + profileImageSrc)) {
      discographyGallery.push({
        url: profileImageSrc,
        date: discographyRawArray[i].release,
      });
    }
  }

  return discographyGallery;
}

const otherProfileImageFiles = fs.readdirSync(
  './src/assets/images/members/others'
);

// Other profile image file name format:
// <name>_<YYYY>-<MM>-<DD>.jpg
const otherProfileImagesFileNameWithDate = otherProfileImageFiles.map(file => {
  const fullFileName = file;
  const extName = path.extname(file);
  const filename = path.basename(file, extName);
  const [memberName, date] = filename.split('_');

  return {
    fullFileName,
    memberName,
    date,
  };
});

function getOtherGalleryWithDate(
  memberName: MemberRaw['name']
): GalleryWithDate {
  return otherProfileImagesFileNameWithDate
    .filter(fileNameWithDate => fileNameWithDate.memberName === memberName)
    .map(fileNameWithDate => ({
      url: `members/others/${fileNameWithDate.fullFileName}`,
      date: fileNameWithDate.date,
    }));
}

function getDiscographyProfileImages(params: {
  memberName: MemberRaw['name'];
  discographyRawArray: DiscographyRawArray;
  discographyType: Parameters<typeof getProfileImageTypeFolderName>[0];
  galleryWithDate: GalleryWithDate;
}): DiscographyProfileImage[] {
  const {
    memberName,
    discographyRawArray,
    discographyType,
    galleryWithDate,
  } = params;

  const profileImageTypeFolderName = getProfileImageTypeFolderName(
    discographyType
  );

  const discographyGallery: DiscographyProfileImage[] = [];
  const sortedGallery = sortByDate(galleryWithDate, 'date');
  const sortedDiscographyRawArray = sortByDate(discographyRawArray, 'release');

  for (let i = 0; i < sortedDiscographyRawArray.length; i++) {
    const album = sortedDiscographyRawArray[i];
    const albumNumber = album.number;

    const albumProfileImageSrc = `members/${profileImageTypeFolderName}/${albumNumber}/${memberName}.jpg`;

    if (fs.existsSync('./src/assets/images/' + albumProfileImageSrc)) {
      discographyGallery.push({
        url: albumProfileImageSrc,
        number: albumNumber,
      });
    } else {
      const albumReleaseDate = new Date(album.release).getTime();

      for (let j = 0; j < sortedGallery.length; j++) {
        const currentProfileImage = sortedGallery[j];
        const currentProfileImageDate = new Date(
          currentProfileImage.date
        ).getTime();

        if (j === 0) {
          if (albumReleaseDate >= currentProfileImageDate) {
            discographyGallery.push({
              url: currentProfileImage.url,
              number: albumNumber,
            });
            break;
          }

          if (sortedGallery.length === 1) {
            discographyGallery.push({
              url: currentProfileImage.url,
              number: albumNumber,
            });
            break;
          }
        } else {
          const previousProfileImage = sortedGallery[j - 1];
          const previousProfileImageDate = new Date(
            previousProfileImage.date
          ).getTime();

          if (
            albumReleaseDate < previousProfileImageDate &&
            albumReleaseDate >= currentProfileImageDate
          ) {
            discographyGallery.push({
              url: currentProfileImage.url,
              number: albumNumber,
            });
            break;
          } else {
            if (j === sortedGallery.length - 1) {
              discographyGallery.push({
                url: currentProfileImage.url,
                number: albumNumber,
              });
              break;
            }
          }
        }
      }
    }
  }

  return discographyGallery;
}

export function convertProfileImages(params: {
  memberName: MemberRaw['name'];
  singlesRawArray: DiscographyRawArray;
  albumsRawArray: DiscographyRawArray;
  digitalRawArray: DiscographyRawArray;
}): MemberResult['profileImages'] {
  const {
    memberName,
    singlesRawArray,
    albumsRawArray,
    digitalRawArray,
  } = params;

  const singlesGalleryWithDate = getDiscographyGalleryWithDate({
    memberName,
    discographyRawArray: singlesRawArray,
    discographyType: 'single',
  });
  const albumsGalleryWithDate = getDiscographyGalleryWithDate({
    memberName,
    discographyRawArray: albumsRawArray,
    discographyType: 'album',
  });
  const digitalGalleryWithDate = getDiscographyGalleryWithDate({
    memberName,
    discographyRawArray: digitalRawArray,
    discographyType: 'digital',
  });
  const otherGalleryWithDate = getOtherGalleryWithDate(memberName);
  const galleryWithDate = sortByDate(
    [
      ...singlesGalleryWithDate,
      ...albumsGalleryWithDate,
      ...digitalGalleryWithDate,
      ...otherGalleryWithDate,
    ],
    'date'
  );

  const singles = getDiscographyProfileImages({
    memberName,
    discographyRawArray: singlesRawArray,
    discographyType: 'single',
    galleryWithDate,
  });
  const albums = getDiscographyProfileImages({
    memberName,
    discographyRawArray: albumsRawArray,
    discographyType: 'album',
    galleryWithDate,
  });
  const digital = getDiscographyProfileImages({
    memberName,
    discographyRawArray: digitalRawArray,
    discographyType: 'digital',
    galleryWithDate,
  });

  return {
    gallery: galleryWithDate.map(image => convertImageFilePath(image.url)),
    singles: singles.map(cd => ({
      ...cd,
      url: convertImageFilePath(cd.url),
    })),
    albums: albums.map(cd => ({
      ...cd,
      url: convertImageFilePath(cd.url),
    })),
    digital: digital.map(cd => ({
      ...cd,
      url: convertImageFilePath(cd.url),
    })),
  };
}

export function convertPhotoAlbums(
  photoAlbums: MemberRaw['photoAlbums']
): MemberResult['photoAlbums'] {
  return photoAlbums.map(photoAlbum => ({
    ...photoAlbum,
    cover: convertImageFilePath(photoAlbum.cover),
  }));
}

type ConvertMemberUnits = (params: {
  memberName: MemberRaw['name'];
  unitsRawArray: UnitsRawArray;
}) => MemberResult['units'];

export const convertMemberUnits: ConvertMemberUnits = ({
  memberName,
  unitsRawArray,
}) => {
  const memberUnitsResult = [];

  for (const unit of unitsRawArray) {
    if (unit.members.includes(memberName)) {
      memberUnitsResult.push({
        name: unit.name,
        type: unit.type,
      });
    }
  }

  return memberUnitsResult;
};

type ConvertMemberPositionsHistory = (params: {
  memberName: MemberRaw['name'];
  singlesRawArray: DiscographyRawArray;
  songsRawObject: SongsRawObject;
}) => MemberResult['positionsHistory'];

export const convertMemberPositionsHistory: ConvertMemberPositionsHistory = ({
  memberName,
  singlesRawArray,
  songsRawObject,
}) => {
  const memberPositionHistoryResult = [];

  for (const single of singlesRawArray) {
    let singlePosition = PositionType.None;

    // Check trainee, skip and under.
    if (single.behindPerformers.trainees.includes(memberName)) {
      singlePosition = PositionType.Trainee;
    } else if (single.behindPerformers.skips.includes(memberName)) {
      singlePosition = PositionType.Skip;
    } else if (single.underMembers.includes(memberName)) {
      singlePosition = PositionType.Under;
    } else {
      for (const singleSong of single.songs) {
        const song = songsRawObject[singleSong.title];

        // Calculate center, fukujin, selected.
        if (song.type === SongType.Title) {
          // Check order: Center -> Fukujin -> Selected
          if (song.performers.center.includes(memberName)) {
            // Check Center
            singlePosition = PositionType.Center;
          } else if (song.performers.fukujin.members.includes(memberName)) {
            singlePosition = PositionType.Fukujin;
          } else if (
            song.formations.firstRow.includes(memberName) ||
            song.formations.secondRow.includes(memberName) ||
            song.formations.thirdRow.includes(memberName)
          ) {
            // Check Selected
            singlePosition = PositionType.Selected;
          }
        }
      }
    }

    memberPositionHistoryResult.push({
      singleNumber: single.number,
      position: singlePosition,
    });
  }

  return memberPositionHistoryResult.sort(
    (positionA, positionB) =>
      Number(positionA.singleNumber) - Number(positionB.singleNumber)
  );
};

type ConvertMemberPositionsCounter = (
  positionsHistory: MemberResult['positionsHistory']
) => MemberResult['positionsCounter'];

export const convertMemberPositionsCounter: ConvertMemberPositionsCounter = positionsHistory => {
  let center = 0;
  let fukujin = 0;
  let selected = 0;
  let under = 0;

  for (const position of positionsHistory) {
    switch (position.position) {
      case PositionType.Center:
        center += 1;
        fukujin += 1;
        selected += 1;
        break;
      case PositionType.Fukujin:
        fukujin += 1;
        selected += 1;
        break;
      case PositionType.Selected:
        selected += 1;
        break;
      case PositionType.Under:
        under += 1;
        break;
      default:
        break;
    }
  }

  return { center, fukujin, selected, under };
};
