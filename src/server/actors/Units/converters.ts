import { SongsRawArray } from "server/actors/Songs/models";
import { UnitRaw, UnitResult } from "server/actors/Units/models";
import { SongType } from "server/constants/commons";

type ConvertUnitSongs = (params: {
  unitName: UnitRaw["name"];
  songsRawArray: SongsRawArray;
}) => UnitResult["songs"];

export const convertUnitSongs: ConvertUnitSongs = ({
  unitName,
  songsRawArray,
}) => {
  const unitSongs = [];

  for (const song of songsRawArray) {
    if (song.type === SongType.Unit && song.performers.unit === unitName) {
      unitSongs.push(song.title);
    }
  }

  return unitSongs;
};
