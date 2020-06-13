import { SingleRaw } from "server/actors/Cds/Singles/models";
import { SingleTitle } from "server/actors/Cds/Singles/constants/singleTitle";

type CreateSingleRawParams = {
  title: SingleTitle;
  number: SingleRaw["number"];
  release: SingleRaw["release"];
  cdTypes?: SingleRaw["artworkTypes"];
  shopping?: SingleRaw["shopping"];
  songs: Omit<SingleRaw["songs"][0], "number">[];
  underMembers?: SingleRaw["underMembers"];
  trainees?: SingleRaw["behindPerformers"]["trainees"];
  skips?: SingleRaw["behindPerformers"]["skips"];
};

export const createSingleRaw = (params: CreateSingleRawParams): SingleRaw => {
  return {
    title: params.title,
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
  };
};
