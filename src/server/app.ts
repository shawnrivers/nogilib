import * as fs from "fs";
import { Albums } from "server/actors/Albums/class";
import { Members } from "server/actors/Members/class";
import { Singles } from "server/actors/Singles/class";
import { Songs } from "server/actors/Songs/class";
import { Units } from "server/actors/Units/class";

const songs = new Songs();
const albums = new Albums();
const singles = new Singles();
const members = new Members();
const units = new Units();

const songsArray = songs.convertSongs({
  singlesRawArray: singles.rawArray,
  singlesRawObject: singles.rawObject,
  albumsRawArray: albums.rawArray,
  albumsRawObject: albums.rawObject,
});
const albumsArray = albums.convertAlbums({
  songsRawObject: songs.rawObject,
  membersRawObject: members.rawObject,
});
const singlesArray = singles.convertSingles({
  songsRawObject: songs.rawObject,
  membersRawObject: members.rawObject,
});
const membersArray = members.convertMembers({
  unitsRawArray: units.rawArray,
  singlesRawArray: singles.rawArray,
  songsRawObject: songs.rawObject,
});
const unitsArray = units.convertUnits({
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

writeFile("./src/data/members.json", membersArray);
writeFile("./src/data/singles.json", singlesArray);
writeFile("./src/data/albums.json", albumsArray);
writeFile("./src/data/songs.json", songsArray);
writeFile("./src/data/units.json", unitsArray);
