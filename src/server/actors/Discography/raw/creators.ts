import { DiscographyRaw } from 'server/actors/Discography/models';
import {
  SingleTitle,
  AlbumTitle,
  OtherCdTitle,
} from 'server/actors/Discography/constants/cdTitle';

export const createSingleRaw = (params: {
  title: SingleTitle;
  number: DiscographyRaw['number'];
  release: DiscographyRaw['release'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
  underMembers?: DiscographyRaw['underMembers'];
  trainees?: DiscographyRaw['behindPerformers']['trainees'];
  skips?: DiscographyRaw['behindPerformers']['skips'];
}): DiscographyRaw => {
  return {
    title: params.title,
    type: 'single',
    number: params.number,
    release: params.release,
    hasArtworks:
      params.cdTypes !== undefined && params.cdTypes.length > 0 ? true : false,
    artworkTypes: params.cdTypes ?? [],
    shopping: params.shopping ?? [],
    songs: params.songs.map((song, index) => ({
      number: index + 1,
      title: song.title,
      inCdType: song.inCdType,
    })),
    underMembers: params.underMembers ?? [],
    behindPerformers: {
      trainees: params.trainees ?? [],
      skips: params.skips ?? [],
    },
    previousSingleNumber: params.number,
  };
};

export const createAlbumRaw = (params: {
  title: AlbumTitle;
  number: DiscographyRaw['number'];
  release: DiscographyRaw['release'];
  previousSingle: DiscographyRaw['previousSingleNumber'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
}): DiscographyRaw => {
  return {
    title: params.title,
    type: 'album',
    number: params.number,
    release: params.release,
    hasArtworks:
      params.cdTypes !== undefined && params.cdTypes.length > 0 ? true : false,
    artworkTypes: params.cdTypes ?? [],
    shopping: params.shopping ?? [],
    songs: params.songs.map((song, index) => ({
      number: index + 1,
      title: song.title,
      inCdType: song.inCdType,
    })),
    underMembers: [],
    behindPerformers: {
      trainees: [],
      skips: [],
    },
    previousSingleNumber: params.previousSingle,
  };
};

export const createOtherCdRaw = (params: {
  title: OtherCdTitle;
  number: DiscographyRaw['number'];
  release: DiscographyRaw['release'];
  previousSingle: DiscographyRaw['previousSingleNumber'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
}): DiscographyRaw => {
  return {
    title: params.title,
    type: 'other',
    number: params.number,
    release: params.release,
    hasArtworks:
      params.cdTypes !== undefined && params.cdTypes.length > 0 ? true : false,
    artworkTypes: params.cdTypes ?? [],
    shopping: params.shopping ?? [],
    songs: params.songs.map((song, index) => ({
      number: index + 1,
      title: song.title,
      inCdType: song.inCdType,
    })),
    underMembers: [],
    behindPerformers: {
      trainees: [],
      skips: [],
    },
    previousSingleNumber: params.previousSingle,
  };
};
