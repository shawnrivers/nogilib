import * as path from 'path';
import { writeJSONFile } from 'db/src/utils/file';
import { getDiscographyPageData } from 'db/src/pages/discography';
import { getMembersPageData } from 'db/src/pages/members';
import { getMemberPageData } from 'db/src/pages/member';
import { getAlbumPageData } from 'db/src/pages/album';
import { getSongPageData } from 'db/src/pages/song';
import { getSearchPageData } from 'db/src/pages/search';
import { Members } from 'db/src/actors/Members';
import { membersRawArray } from 'db/src/actors/Members/raw';
import { Songs } from 'db/src/actors/Songs';
import { songsRawArray } from 'db/src/actors/Songs/raw';
import { Units } from 'db/src/actors/Units';
import { unitsRawArray } from 'db/src/actors/Units/raw';
import { discographyRawArray } from 'db/src/actors/Discography/raw/editor';
import { Discography } from 'db/src/actors/Discography';

// Generate raw data
const songs = new Songs(songsRawArray);
const members = new Members(membersRawArray);
const units = new Units(unitsRawArray);
const discography = new Discography(discographyRawArray);

const singlesRawArray = discography.getSinglesRawArray();
const albumsRawArray = discography.getAlbumsRawArray();
const otherCdsRawArray = discography.getOtherCdsRawArray();

// Convert to result data
songs.convertSongs({
  singlesRawArray,
  singlesRawObject: discography.getSinglesRawObject(),
  albumsRawArray,
  albumsRawObject: discography.getAlbumsRawObject(),
  otherCdsRawArray,
  otherCdsRawObject: discography.getOtherCdsRawObject(),
});
members.convertMembers({
  unitsRawArray: units.rawArray,
  singlesRawArray,
  albumsRawArray,
  digitalRawArray: otherCdsRawArray,
  songsRawObject: songs.rawObject,
});
units.convertUnits({
  songsRawArray: songs.rawArray,
});
discography.convertDiscography({
  songsRawObject: songs.rawObject,
});

// Convert to page data
const discographyPageData = getDiscographyPageData(discography);
const membersPageData = getMembersPageData(members);
const memberPageData = getMemberPageData(members);
const albumPageData = getAlbumPageData(discography, members);
const songPageData = getSongPageData(songs, members);
const searchPageData = getSearchPageData(discography, songs, members);

// Store in JSON files
writeJSONFile(
  path.resolve(__dirname, '../result/members.json'),
  membersPageData
);
writeJSONFile(path.resolve(__dirname, '../result/member.json'), memberPageData);
writeJSONFile(path.resolve(__dirname, '../result/song.json'), songPageData);
writeJSONFile(
  path.resolve(__dirname, '../result/discography.json'),
  discographyPageData
);
writeJSONFile(path.resolve(__dirname, '../result/album.json'), albumPageData);
writeJSONFile(path.resolve(__dirname, '../result/search.json'), searchPageData);
