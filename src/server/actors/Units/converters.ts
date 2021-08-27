import { SongsRawArray } from 'server/actors/Songs/models';
import { UnitRaw, UnitResult } from 'server/actors/Units/models';

type ConvertUnitSongs = (params: {
  unitName: UnitRaw['name'];
  songsRawArray: SongsRawArray;
}) => UnitResult['songs'];

export const convertUnitSongs: ConvertUnitSongs = ({
  unitName,
  songsRawArray,
}) => {
  const unitSongs = [];

  for (const song of songsRawArray) {
    if (song.type === 'unit' && song.performers.unit === unitName) {
      unitSongs.push(song.title);
    }
  }

  return unitSongs;
};
