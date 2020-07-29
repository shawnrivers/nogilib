import * as fs from 'fs';
import { Members } from 'server/actors/Members';
import { membersRawArray } from 'server/actors/Members/raw';
import { Songs } from 'server/actors/Songs';
import { songsRawArray } from 'server/actors/Songs/raw';
import { Units } from 'server/actors/Units';
import { unitsRawArray } from 'server/actors/Units/raw';
import { discographyRawArray } from 'server/actors/Discography/raw/editor';
import { Discography } from 'server/actors/Discography';

const songs = new Songs(songsRawArray);
const members = new Members(membersRawArray);
const units = new Units(unitsRawArray);
const discography = new Discography(discographyRawArray);

const songsResultArray = songs.convertSongs({
  singlesRawArray: discography.getSinglesRawArray(),
  singlesRawObject: discography.getSinglesRawObject(),
  albumsRawArray: discography.getAlbumsRawArray(),
  albumsRawObject: discography.getAlbumsRawObject(),
  otherCdsRawArray: discography.getDigitalCdsRawArray(),
  otherCdsRawObject: discography.getOtherCdsRawObject(),
});
const membersResultArray = members.convertMembers({
  unitsRawArray: units.rawArray,
  singlesRawArray: discography.getSinglesRawArray(),
  songsRawObject: songs.rawObject,
});
const unitsResultArray = units.convertUnits({
  songsRawArray: songs.rawArray,
});
const discographyResultArray = discography.convertDiscography({
  songsRawObject: songs.rawObject,
});

const writeFile = (path: string, data: any[]) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.warn(err);
    } else {
      console.log(`JSON saved in: ${path}`);
    }
  });
};

writeFile('./src/data/members.json', membersResultArray);
writeFile('./src/data/songs.json', songsResultArray);
writeFile('./src/data/units.json', unitsResultArray);
writeFile('./src/data/discography.json', discographyResultArray);
