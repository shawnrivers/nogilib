import { UnitResult } from "server/actors/Units/models";
import { SongType } from "server/constants/commons";
import { SongsRawArray } from "server/actors/Songs/models";
import { RawUnit } from "server/types/IUnit";

type ConvertUnitSongs = (params: {
  unitName: RawUnit["name"];
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
