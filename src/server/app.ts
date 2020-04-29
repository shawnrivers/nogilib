import * as fs from "fs";
import * as UpdateCds from "./converter/updateCds";
import * as UpdateMembers from "./converter/updateMembers";
import * as UpdateSongs from "./converter/updateSongs";
import { rawAlbums } from "./editor/albums";
import { rawMembers } from "./editor/members";
import { rawSingles } from "./editor/singles";
import { rawSongs } from "./editor/songs";
import { Units } from "server/actors/Units/class";
import { Albums } from "server/actors/Albums/class";
import { arrayToObject } from "server/utils/arrays";
import { Singles } from "server/actors/Singles/class";

// Initialize raw data to result data type.

const albums = UpdateCds.initializeAlbums(rawAlbums);
const singles = UpdateCds.initializeSingles(rawSingles);
const members = UpdateMembers.initializeMembers(rawMembers);
const songs = UpdateSongs.initializeSongs(rawSongs);

const unitsConverter = new Units();
const albumsConverter = new Albums();
const singlesConverter = new Singles();

// Process the raw data.

UpdateCds.recordCdSongTypeFromSongs(singles, songs);
UpdateCds.recordCdSongTypeFromSongs(albums, songs);

UpdateMembers.recordUnits(members, unitsConverter.rawArray);
UpdateMembers.recordPositions(members, singles, songs);
UpdateMembers.recordProfileImages(members, Object.keys(singles).length);

UpdateCds.recordCdFocusPerformersFromSongs(singles, songs, members);
UpdateCds.recordCdFocusPerformersFromSongs(albums, songs, members);

UpdateSongs.recordSongSingle(songs, singles);
UpdateSongs.recordSongAlbums(songs, albums);
UpdateSongs.recordArtworks(songs, singles, albums);

UpdateCds.recordCdSongArtworks(singles, songs);
UpdateCds.recordCdSongArtworks(albums, songs);

UpdateSongs.recordPerformersTags(songs, albums);

// UpdateUnits.recordUnitSongs(units, songs);

UpdateCds.flatArtworksToArray(singles);
UpdateCds.flatArtworksToArray(albums);

// Form all property pairs into an array.

const songsArray = Object.values(songs);
const membersArray = Object.values(members);
// const singlesArray = Object.values(singles);
// const albumsArray = Object.values(albums);
// const unitsArray = Object.values(units);
const unitsArray = unitsConverter.convertUnits({ songsArray: rawSongs });
const albumsArray = albumsConverter.convertAlbums({
  songsRawObj: arrayToObject(rawSongs, "title"),
  membersRawObj: arrayToObject(rawMembers, "name"),
});
const singlesArray = singlesConverter.convertSingles({
  songsRawObj: arrayToObject(rawSongs, "title"),
  membersRawObj: arrayToObject(rawMembers, "name"),
});

console.log("Data processing finished.\n");

// Store the processed data into several JSON files.

const writeFile = (path: string, data: any[]) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log(err);
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
