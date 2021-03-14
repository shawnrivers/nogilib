import { SongRaw } from 'server/actors/Songs/models';
import { SongType } from 'server/actors/Songs/constants/songType';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SONGS } from 'server/actors/Songs/constants/songTitle';

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
  title: SongRaw['title'];
  creators?: SongRawCreatorCreators;
  musicVideo?: SongRaw['musicVideo'];
} & (
  | {
      type: SongType.Title;
      center: SongRaw['performers']['center'];
      fukujin:
        | Exclude<SongRaw['performers']['fukujin']['type'], 'irregular' | null>
        | SongRaw['performers']['fukujin']['members'];
      formations?: SongRawCreatorFormation;
    }
  | {
      type: SongType.Unit;
      center?: SongRaw['performers']['center'];
      unit?: SongRaw['performers']['unit'];
      formations?: SongRawCreatorFormation;
    }
  | {
      type: SongType.Solo;
      solo: MemberNameKey;
    }
  | {
      type: Exclude<
        SongRaw['type'],
        SongType.Title | SongType.Unit | SongType.Solo
      >;
      center?: SongRaw['performers']['center'];
      formations?: SongRawCreatorFormation;
    }
);

export const createSongRaw = (params: SongRawCreatorParams): SongRaw => {
  let fukujin: SongRaw['performers']['fukujin'] = {
    type: null,
    members: [],
  };

  switch (params.type) {
    case SongType.Title:
      switch (params.fukujin) {
        case 'row-1':
          fukujin = {
            type: 'row-1',
            members: params.formations?.firstRow ?? [],
          };
          break;
        case 'row-1-2':
          fukujin = {
            type: 'row-1-2',
            members: [
              ...(params.formations?.firstRow ?? []),
              ...(params.formations?.secondRow ?? []),
            ],
          };
          break;
        default:
          fukujin = {
            type: 'irregular',
            members: params.fukujin,
          };
          break;
      }
      return {
        title: params.title,
        key: SONGS[params.title].key,
        type: params.type,
        musicVideo: params.musicVideo ?? '',
        creators: {
          lyrics: params.creators?.lyrics ?? [],
          compose: params.creators?.compose ?? [],
          arrange: params.creators?.arrange ?? [],
          direct: params.creators?.direct ?? [],
        },
        performers: {
          center: params.center,
          fukujin,
          solo: '',
          unit: '',
        },
        formations: {
          firstRow: params.formations?.firstRow ?? [],
          secondRow: params.formations?.secondRow ?? [],
          thirdRow: params.formations?.thirdRow ?? [],
          fourthRow: params.formations?.fourthRow ?? [],
        },
      };

    case SongType.Unit:
      return {
        title: params.title,
        key: SONGS[params.title].key,
        type: params.type,
        musicVideo: params.musicVideo ?? '',
        creators: {
          lyrics: params.creators?.lyrics ?? [],
          compose: params.creators?.compose ?? [],
          arrange: params.creators?.arrange ?? [],
          direct: params.creators?.direct ?? [],
        },
        performers: {
          center: params.center ?? [],
          fukujin,
          solo: '',
          unit: params.unit ?? '',
        },
        formations: {
          firstRow: params.formations?.firstRow ?? [],
          secondRow: params.formations?.secondRow ?? [],
          thirdRow: params.formations?.thirdRow ?? [],
          fourthRow: params.formations?.fourthRow ?? [],
        },
      };

    case SongType.Solo:
      return {
        title: params.title,
        key: SONGS[params.title].key,
        type: params.type,
        musicVideo: params.musicVideo ?? '',
        creators: {
          lyrics: params.creators?.lyrics ?? [],
          compose: params.creators?.compose ?? [],
          arrange: params.creators?.arrange ?? [],
          direct: params.creators?.direct ?? [],
        },
        performers: {
          center: [],
          fukujin,
          solo: params.solo,
          unit: '',
        },
        formations: {
          firstRow: [params.solo],
          secondRow: [],
          thirdRow: [],
          fourthRow: [],
        },
      };

    default:
      return {
        title: params.title,
        key: SONGS[params.title].key,
        type: params.type,
        musicVideo: params.musicVideo ?? '',
        creators: {
          lyrics: params.creators?.lyrics ?? [],
          compose: params.creators?.compose ?? [],
          arrange: params.creators?.arrange ?? [],
          direct: params.creators?.direct ?? [],
        },
        performers: {
          center: params.center ?? [],
          fukujin,
          solo: '',
          unit: '',
        },
        formations: {
          firstRow: params.formations?.firstRow ?? [],
          secondRow: params.formations?.secondRow ?? [],
          thirdRow: params.formations?.thirdRow ?? [],
          fourthRow: params.formations?.fourthRow ?? [],
        },
      };
  }
};
