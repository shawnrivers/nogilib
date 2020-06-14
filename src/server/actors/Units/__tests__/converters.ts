import { Songs } from "server/actors/Songs";
import { songsRawArray } from "server/actors/Songs/raw";
import { UNIT_NAMES } from "server/actors/Units/constants/unitName";
import { convertUnitSongs } from "server/actors/Units/converters";

describe("convertUnitSongs", () => {
  const songsObject = new Songs(songsRawArray).rawObject;

  test("Add songs to unit when the song performers match the unit", () => {
    const unitName = UNIT_NAMES["さゆりんご軍団"].name;
    const songs = [
      songsObject["白米様"],
      songsObject["さゆりんご募集中"],
      songsObject["無表情"],
      songsObject["低体温のキス"],
    ];

    expect(convertUnitSongs({ unitName, songsRawArray: songs })).toEqual([
      songsObject["白米様"].title,
      songsObject["さゆりんご募集中"].title,
    ]);
  });
});
