import * as path from 'path';
import { MemberRaw } from 'db/src/actors/Members/models';
import {
  convertPathnameToClientStaticFileUrl,
  findFilePathname,
  getResponsiveImageUrl,
} from 'db/src/utils/path';
import { sortBySocialMedia } from 'utils/sorting';

type CreateMemberRawParams = {
  name: MemberRaw['name'];
  nameNotations: [
    lastName: MemberRaw['nameNotations']['lastName'],
    firstName: MemberRaw['nameNotations']['firstName'],
    lastNameEn: MemberRaw['nameNotations']['lastNameEn'],
    firstNameEn: MemberRaw['nameNotations']['firstNameEn'],
    lastNameFurigana: MemberRaw['nameNotations']['lastNameFurigana'],
    firstNameFurigana: MemberRaw['nameNotations']['firstNameFurigana']
  ];
  glowStickColor: [
    left: MemberRaw['glowStickColor']['left'],
    right: MemberRaw['glowStickColor']['right']
  ];
  join: MemberRaw['join'];
  birthday: MemberRaw['birthday'];
  height: MemberRaw['height'];
  bloodType: MemberRaw['bloodType'];
  origin: MemberRaw['origin'];
  sites?: MemberRaw['sites'];
  photoAlbums?: (Omit<MemberRaw['photoAlbums'][0], 'sites' | 'cover'> & {
    sites?: MemberRaw['photoAlbums'][0]['sites'];
    cover?: string;
  })[];
  graduatedDate?: string;
};

type CreateMemberOptions = {
  autoSortSites?: boolean;
};

export const createMemberRaw = (
  params: CreateMemberRawParams,
  options: CreateMemberOptions = {
    autoSortSites: true,
  }
): MemberRaw => {
  const graduation =
    params.graduatedDate !== undefined
      ? {
          isGraduated: true,
          graduatedDate: params.graduatedDate,
        }
      : {
          isGraduated: false,
          graduatedDate: '',
        };

  return {
    name: params.name,
    nameNotations: {
      lastName: params.nameNotations[0],
      firstName: params.nameNotations[1],
      lastNameFurigana: params.nameNotations[2],
      firstNameFurigana: params.nameNotations[3],
      lastNameEn: params.nameNotations[4],
      firstNameEn: params.nameNotations[5],
    },
    glowStickColor: {
      left: params.glowStickColor[0],
      right: params.glowStickColor[1],
    },
    join: params.join,
    birthday: params.birthday,
    height: params.height,
    bloodType: params.bloodType,
    origin: params.origin,
    sites:
      params.sites === undefined
        ? []
        : options.autoSortSites
        ? sortBySocialMedia(params.sites)
        : params.sites,
    photoAlbums:
      params.photoAlbums?.map(photoAlbum => {
        const pathname = findFilePathname(
          path.join('public', 'images', 'photo-albums'),
          photoAlbum.cover ?? 'photo_album_no_image'
        );

        if (pathname === null) {
          throw new Error(
            'The fallback photo album image file might have been lost or renamed.'
          );
        }

        return {
          title: photoAlbum.title,
          release: photoAlbum.release,
          type: photoAlbum.type,
          sites: photoAlbum.sites ?? [],
          cover: getResponsiveImageUrl(
            convertPathnameToClientStaticFileUrl(pathname)
          ),
        };
      }) ?? [],
    graduation,
  };
};
