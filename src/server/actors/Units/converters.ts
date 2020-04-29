import { UnitResult } from "server/actors/Units/models";
import { SongType } from "server/utils/constants";

type ConvertUnitSongs = (params: {
  unitName: string;
  songsArray: any[];
}) => UnitResult["songs"];

export const convertUnitSongs: ConvertUnitSongs = ({
  unitName,
  songsArray,
}) => {
  let unitSongs: string[] = [];

  for (const song of songsArray) {
    if (song.type === SongType.Unit && song.performers.unit === unitName) {
      unitSongs.push(song.title);
    }
  }

  return unitSongs;
};
