import * as fs from 'fs';
import * as path from 'path';
import {
  getResponsiveImageUrl,
  getPath,
  findFilePathname,
  convertPathnameToClientStaticFileUrl,
} from 'db/src/utils/path';
import {
  MemberResult,
  MemberRaw,
  DiscographyProfileImage,
} from 'db/src/actors/Members/models';
import { UnitsRawArray } from 'db/src/actors/Units/models';
import { SongsRawObject } from 'db/src/actors/Songs/models';

import {
  DiscographyRawArray,
  DiscographyRaw,
} from 'db/src/actors/Discography/models';
import { sortByDate } from 'utils/sorting';
import { Position } from 'db/src/actors/Members/types';
import { ImageUrl } from 'db/src/types/commons';

type GalleryWithDate = {
  url: ImageUrl;
  date: string;
}[];

function getProfileImageTypeFolderName(
  discographyType: DiscographyRaw['type']
): string {
  switch (discographyType) {
    case 'single':
      return 'singles';
    case 'album':
      return 'albums';
    case 'digital':
      return 'digital';
  }
}

function getDiscographyGalleryWithDate(params: {
  memberName: MemberRaw['name'];
  discographyRawArray: DiscographyRawArray;
  discographyType: Parameters<typeof getProfileImageTypeFolderName>[0];
}): GalleryWithDate {
  const { memberName, discographyRawArray, discographyType } = params;

  const profileImageTypeFolderName =
    getProfileImageTypeFolderName(discographyType);

  const discographyGallery = [];

  for (let i = 0; i < discographyRawArray.length; i++) {
    const albumNumber = discographyRawArray[i].number;
    const pathname = findFilePathname(
      path.join(
        'public',
        'images',
        'members',
        profileImageTypeFolderName,
        albumNumber
      ),
      memberName
    );
    if (pathname !== null) {
      discographyGallery.push({
        url: getResponsiveImageUrl(
          convertPathnameToClientStaticFileUrl(pathname)
        ),
        date: discographyRawArray[i].release,
      });
    }
  }

  return discographyGallery;
}

const otherProfileImageFiles = fs.readdirSync('./public/images/members/others');

// Other profile image file name format:
// <name>_<YYYY>-<MM>-<DD>.jpg
const otherProfileImagesFileNameWithDate: {
  filePathname: string;
  memberName: string;
  date: string;
}[] = otherProfileImageFiles
  .filter(file => file.includes('_@1x'))
  .map(file => {
    const filePath = getPath(file);
    const [memberName, date] = filePath.filename.split('_');

    return {
      filePathname: file,
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
      url: getResponsiveImageUrl(
        convertPathnameToClientStaticFileUrl(
          path.join(
            'images',
            'members',
            'others',
            fileNameWithDate.filePathname
          )
        )
      ),
      date: fileNameWithDate.date,
    }));
}

function getDiscographyProfileImages(params: {
  memberName: MemberRaw['name'];
  discographyRawArray: DiscographyRawArray;
  discographyType: Parameters<typeof getProfileImageTypeFolderName>[0];
  galleryWithDate: GalleryWithDate;
}): DiscographyProfileImage[] {
  const { memberName, discographyRawArray, discographyType, galleryWithDate } =
    params;

  const profileImageTypeFolderName =
    getProfileImageTypeFolderName(discographyType);

  const discographyGallery: DiscographyProfileImage[] = [];
  const sortedGallery = sortByDate(galleryWithDate, 'date');
  const sortedDiscographyRawArray = sortByDate(discographyRawArray, 'release');

  for (let i = 0; i < sortedDiscographyRawArray.length; i++) {
    const album = sortedDiscographyRawArray[i];
    const albumNumber = album.number;

    const matchedPathname = findFilePathname(
      path.join(
        'public',
        'images',
        'members',
        profileImageTypeFolderName,
        albumNumber
      ),
      memberName
    );

    if (matchedPathname !== null) {
      discographyGallery.push({
        url: getResponsiveImageUrl(
          convertPathnameToClientStaticFileUrl(matchedPathname)
        ),
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
  const { memberName, singlesRawArray, albumsRawArray, digitalRawArray } =
    params;

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
    gallery: galleryWithDate.map(image => image.url),
    singles,
    albums,
    digital,
  };
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
    let singlePosition: Position = 'none';

    // Check trainee, skip and under.
    if (single.behindPerformers.trainees.includes(memberName)) {
      singlePosition = 'trainee';
    } else if (single.behindPerformers.skips.includes(memberName)) {
      singlePosition = 'skip';
    } else if (single.underMembers.includes(memberName)) {
      singlePosition = 'under';
    } else {
      for (const singleSong of single.songs) {
        const song = songsRawObject[singleSong.title];

        // Calculate center, fukujin, selected.
        if (song.type === 'title') {
          // Check order: Center -> Fukujin -> Selected
          if (song.performers.center.includes(memberName)) {
            // Check Center
            singlePosition = 'center';
          } else if (song.performers.fukujin.members.includes(memberName)) {
            singlePosition = 'fukujin';
          } else if (
            song.formations.firstRow.includes(memberName) ||
            song.formations.secondRow.includes(memberName) ||
            song.formations.thirdRow.includes(memberName)
          ) {
            // Check Selected
            singlePosition = 'selected';
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

export const convertMemberPositionsCounter: ConvertMemberPositionsCounter =
  positionsHistory => {
    let center = 0;
    let fukujin = 0;
    let selected = 0;
    let under = 0;

    for (const position of positionsHistory) {
      switch (position.position) {
        case 'center':
          center += 1;
          fukujin += 1;
          selected += 1;
          break;
        case 'fukujin':
          fukujin += 1;
          selected += 1;
          break;
        case 'selected':
          selected += 1;
          break;
        case 'under':
          under += 1;
          break;
        default:
          break;
      }
    }

    return { center, fukujin, selected, under };
  };
