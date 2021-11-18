import { SongRaw } from 'server/actors/Songs/models';
import { MemberNameKey } from 'server/actors/Members/types';

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
      type: 'title';
      center: SongRaw['performers']['center'];
      fukujin:
        | Exclude<SongRaw['performers']['fukujin']['type'], 'irregular' | null>
        | SongRaw['performers']['fukujin']['members'];
      formations?: SongRawCreatorFormation;
      performersType?: { name?: 'selected'; single: string };
    }
  | {
      type: 'unit';
      center?: SongRaw['performers']['center'];
      unit?: SongRaw['performers']['unit'];
      formations?: SongRawCreatorFormation;
    }
  | {
      type: 'solo';
      solo: MemberNameKey;
    }
  | {
      type: Exclude<SongRaw['type'], 'title' | 'unit' | 'solo'>;
      center?: SongRaw['performers']['center'];
      formations?: SongRawCreatorFormation;
      performersType?:
        | { name: 'selected' | 'under'; single: string }
        | {
            name: 'generation';
            generation: number;
            single?: string;
          };
    }
);

export const createSongRaw = (params: SongRawCreatorParams): SongRaw => {
  let fukujin: SongRaw['performers']['fukujin'] = {
    type: null,
    members: [],
  };

  switch (params.type) {
    case 'title':
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
          type: {
            name: 'selected',
            single: params.performersType?.single ?? '',
          },
        },
        formations: {
          firstRow: params.formations?.firstRow ?? [],
          secondRow: params.formations?.secondRow ?? [],
          thirdRow: params.formations?.thirdRow ?? [],
          fourthRow: params.formations?.fourthRow ?? [],
        },
      };

    case 'unit':
      return {
        title: params.title,
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
          type: { name: 'unit' },
        },
        formations: {
          firstRow: params.formations?.firstRow ?? [],
          secondRow: params.formations?.secondRow ?? [],
          thirdRow: params.formations?.thirdRow ?? [],
          fourthRow: params.formations?.fourthRow ?? [],
        },
      };

    case 'solo':
      return {
        title: params.title,
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
          type: { name: 'solo' },
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
          type: params.performersType,
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
