import { SongRaw } from "server/actors/Songs/models";
import { SongType } from "server/constants/commons";
import { MemberNameKey } from "server/actors/Songs/constants";

type SongRawCreatorCreators = {
  lyrics?: string[];
  compose?: string[];
  arrange?: string[];
  direct?: string[];
};

type SongRawCreatorFormation = {
  firstRow: MemberNameKey[];
  secondRow?: MemberNameKey[];
  thirdRow?: MemberNameKey[];
  fourthRow?: MemberNameKey[];
};

type SongRawCreatorParams = {
  title: SongRaw["title"];
  creators?: SongRawCreatorCreators;
  musicVideo?: SongRaw["musicVideo"];
} & (
  | {
      type: SongType.Title;
      center: SongRaw["performers"]["center"];
      fukujin: SongRaw["performers"]["fukujin"];
      formations?: SongRawCreatorFormation;
    }
  | {
      type: SongType.Unit;
      center?: SongRaw["performers"]["center"];
      unit?: SongRaw["performers"]["unit"];
      formations?: SongRawCreatorFormation;
    }
  | {
      type: SongType.Solo;
      solo: MemberNameKey;
    }
  | {
      type: Exclude<
        SongRaw["type"],
        SongType.Title | SongType.Unit | SongType.Solo
      >;
      center?: SongRaw["performers"]["center"];
      formations?: SongRawCreatorFormation;
    }
);

export const createSongRaw = (params: SongRawCreatorParams): SongRaw => {
  if (params.type === SongType.Title) {
    return {
      title: params.title,
      type: params.type,
      musicVideo: params.musicVideo ?? "",
      creators: {
        lyrics: params.creators?.lyrics ?? [],
        compose: params.creators?.compose ?? [],
        arrange: params.creators?.arrange ?? [],
        direct: params.creators?.direct ?? [],
      },
      performers: {
        center: params.center,
        fukujin: params.fukujin,
        solo: "",
        unit: "",
      },
      formations: {
        firstRow: params.formations?.firstRow ?? [],
        secondRow: params.formations?.secondRow ?? [],
        thirdRow: params.formations?.thirdRow ?? [],
        fourthRow: params.formations?.fourthRow ?? [],
      },
    };
  }

  if (params.type === SongType.Unit) {
    return {
      title: params.title,
      type: params.type,
      musicVideo: params.musicVideo ?? "",
      creators: {
        lyrics: params.creators?.lyrics ?? [],
        compose: params.creators?.compose ?? [],
        arrange: params.creators?.arrange ?? [],
        direct: params.creators?.direct ?? [],
      },
      performers: {
        center: params.center ?? [],
        fukujin: [],
        solo: "",
        unit: params.unit ?? "",
      },
      formations: {
        firstRow: params.formations?.firstRow ?? [],
        secondRow: params.formations?.secondRow ?? [],
        thirdRow: params.formations?.thirdRow ?? [],
        fourthRow: params.formations?.fourthRow ?? [],
      },
    };
  }

  if (params.type === SongType.Solo) {
    return {
      title: params.title,
      type: params.type,
      musicVideo: params.musicVideo ?? "",
      creators: {
        lyrics: params.creators?.lyrics ?? [],
        compose: params.creators?.compose ?? [],
        arrange: params.creators?.arrange ?? [],
        direct: params.creators?.direct ?? [],
      },
      performers: {
        center: [],
        fukujin: [],
        solo: params.solo,
        unit: "",
      },
      formations: {
        firstRow: [params.solo],
        secondRow: [],
        thirdRow: [],
        fourthRow: [],
      },
    };
  }

  return {
    title: params.title,
    type: params.type,
    musicVideo: params.musicVideo ?? "",
    creators: {
      lyrics: params.creators?.lyrics ?? [],
      compose: params.creators?.compose ?? [],
      arrange: params.creators?.arrange ?? [],
      direct: params.creators?.direct ?? [],
    },
    performers: {
      center: params.center ?? [],
      fukujin: [],
      solo: "",
      unit: "",
    },
    formations: {
      firstRow: params.formations?.firstRow ?? [],
      secondRow: params.formations?.secondRow ?? [],
      thirdRow: params.formations?.thirdRow ?? [],
      fourthRow: params.formations?.fourthRow ?? [],
    },
  };
};
