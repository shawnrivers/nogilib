import { MemberRaw } from 'server/actors/Members/models';
import { sortBySocialMedia } from 'utils/arrays';

type CreateMemberRawParams = {
  name: MemberRaw['name'];
  nameNotations: [
    MemberRaw['nameNotations']['lastName'],
    MemberRaw['nameNotations']['firstName'],
    MemberRaw['nameNotations']['lastNameEn'],
    MemberRaw['nameNotations']['firstNameEn'],
    MemberRaw['nameNotations']['lastNameFurigana'],
    MemberRaw['nameNotations']['firstNameFurigana']
  ];
  glowStickColor: [
    MemberRaw['glowStickColor']['left'],
    MemberRaw['glowStickColor']['right']
  ];
  join: MemberRaw['join'];
  birthday: MemberRaw['birthday'];
  height: MemberRaw['height'];
  bloodType: MemberRaw['bloodType'];
  origin: MemberRaw['origin'];
  sites?: MemberRaw['sites'];
  photoAlbums?: (Omit<MemberRaw['photoAlbums'][0], 'sites' | 'cover'> & {
    sites?: MemberRaw['photoAlbums'][0]['sites'];
    cover?: MemberRaw['photoAlbums'][0]['cover'];
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
        ? sortBySocialMedia(params.sites, 'asc')
        : params.sites,
    photoAlbums:
      params.photoAlbums?.map(photoAlbum => ({
        title: photoAlbum.title,
        release: photoAlbum.release,
        type: photoAlbum.type,
        sites: photoAlbum.sites ?? [],
        cover: photoAlbum.cover ?? 'photo-albums/photo_album_no_image.png',
      })) ?? [],
    graduation,
  };
};
