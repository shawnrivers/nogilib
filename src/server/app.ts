import * as fs from "fs";
import { Albums } from "server/actors/Albums";
import { albumsRawArray } from "server/actors/Albums/raw";
import { Members } from "server/actors/Members";
import { membersRawArray } from "server/actors/Members/raw";
import { Singles } from "server/actors/Singles";
import { singlesRawArray } from "server/actors/Singles/raw";
import { Songs } from "server/actors/Songs";
import { songsRawArray } from "server/actors/Songs/raw";
import { Units } from "server/actors/Units";
import { unitsRawArray } from "server/actors/Units/raw";

const songs = new Songs(songsRawArray);
const albums = new Albums(albumsRawArray);
const singles = new Singles(singlesRawArray);
const members = new Members(membersRawArray);
const units = new Units(unitsRawArray);

const songsResultArray = songs.convertSongs({
  singlesRawArray: singles.rawArray,
  singlesRawObject: singles.rawObject,
  albumsRawArray: albums.rawArray,
  albumsRawObject: albums.rawObject,
});
const albumsResultArray = albums.convertAlbums({
  songsRawObject: songs.rawObject,
  membersRawObject: members.rawObject,
});
const singlesResultArray = singles.convertSingles({
  songsRawObject: songs.rawObject,
  membersRawObject: members.rawObject,
});
const membersResultArray = members.convertMembers({
  unitsRawArray: units.rawArray,
  singlesRawArray: singles.rawArray,
  songsRawObject: songs.rawObject,
});
const unitsResultArray = units.convertUnits({
  songsRawArray: songs.rawArray,
});

// Store the processed data into several JSON files.

const writeFile = (path: string, data: any[]) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.warn(err);
    } else {
      console.log(`JSON saved in: ${path}`);
    }
  });
};

// Write data in this project.

writeFile("./src/data/members.json", membersResultArray);
writeFile("./src/data/singles.json", singlesResultArray);
writeFile("./src/data/albums.json", albumsResultArray);
writeFile("./src/data/songs.json", songsResultArray);
writeFile("./src/data/units.json", unitsResultArray);
