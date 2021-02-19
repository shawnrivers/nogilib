import { Members } from 'server/actors/Members';
import { membersRawArray } from 'server/actors/Members/raw';
import { Songs } from 'server/actors/Songs';
import { songsRawArray } from 'server/actors/Songs/raw';
import { Units } from 'server/actors/Units';
import { unitsRawArray } from 'server/actors/Units/raw';
import { discographyRawArray } from 'server/actors/Discography/raw/editor';
import { Discography } from 'server/actors/Discography';
import { writeJSONFile } from 'server/utils/file';
import { getDiscographyPageData } from 'server/pages/discography';
import { getMembersPageData } from 'server/pages/members';
import { getMemberPageData } from 'server/pages/member';
import { getAlbumPageData } from 'server/pages/album';
import { getSongPageData } from 'server/pages/song';
import { getSearchPageData } from 'server/pages/search';

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
writeJSONFile('./src/data/members.json', membersPageData);
writeJSONFile('./src/data/member.json', memberPageData);
writeJSONFile('./src/data/song.json', songPageData);
writeJSONFile('./src/data/discography.json', discographyPageData);
writeJSONFile('./src/data/album.json', albumPageData);
writeJSONFile('./src/data/search.json', searchPageData);
