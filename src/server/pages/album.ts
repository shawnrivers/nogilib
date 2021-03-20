import { Discography } from 'server/actors/Discography';
import { CdTitle } from 'server/actors/Discography/constants/cdTitle';
import { DiscographyResult } from 'server/actors/Discography/models';
import { Members } from 'server/actors/Members';
import { MemberResult } from 'server/actors/Members/models';
import { SpotifyAlbumId, SpotifyIds } from 'server/actors/Spotify/models';
import { MusicExternalLinks } from 'server/types/commons';
import { arrayToObject } from 'utils/array';

export type AlbumPageData = {
  key: DiscographyResult['key'];
  title: DiscographyResult['title'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artworks: DiscographyResult['artworks'];
  release: DiscographyResult['release'];
  songs: {
    key: DiscographyResult['songs'][0]['key'];
    title: DiscographyResult['songs'][0]['title'];
    type: DiscographyResult['songs'][0]['type'];
    inCdType: DiscographyResult['songs'][0]['inCdType'];
  }[];
  centers: {
    name: MemberResult['name'];
    nameNotations: MemberResult['nameNotations'];
    albumProfileImage: MemberResult['profileImages']['gallery'][0];
  }[];
  externalLinks?: Partial<MusicExternalLinks>;
};

function getAlbumCenters(
  album: DiscographyResult,
  members: Members
): AlbumPageData['centers'] {
  const membersObject = members.getResultObject();

  const titleSong = album.songs[0];
  const titleSongFocusPerformers = titleSong.focusPerformers;

  if (titleSongFocusPerformers.type !== 'center' || album.type === 'album') {
    return [];
  } else {
    let profileImageType: 'singles' | 'digital';

    switch (album.type) {
      case 'single':
        profileImageType = 'singles';
        break;
      case 'digital':
        profileImageType = 'digital';
    }

    return titleSongFocusPerformers.members
      .map(memberNameKey => membersObject[memberNameKey])
      .map(member => ({
        name: member.name,
        nameNotations: member.nameNotations,
        albumProfileImage: arrayToObject(
          member.profileImages[profileImageType],
          'number'
        )[album.number].url,
      }));
  }
}

type SpotifyAlbumIdMap = Record<CdTitle, SpotifyAlbumId> | undefined;

function getAlbumExternalLinks(
  album: DiscographyResult,
  spotifyAlbumIdMap: SpotifyAlbumIdMap
): AlbumPageData['externalLinks'] {
  if (spotifyAlbumIdMap !== undefined) {
    const spotifyAlbumId = spotifyAlbumIdMap[album.title]?.id;

    return {
      spotifyEmbed: spotifyAlbumId
        ? `https://open.spotify.com/embed/album/${spotifyAlbumId}`
        : undefined,
    };
  }

  return undefined;
}

export function getAlbumPageData(
  discography: Discography,
  members: Members,
  spotifyIds?: SpotifyIds
): AlbumPageData[] {
  if (!discography.isConverted) {
    throw new Error('Please convert Discography data at first.');
  }

  if (!members.isConverted) {
    throw new Error('Please convert Members data at first.');
  }

  let spotifyAlbumIdMap: SpotifyAlbumIdMap = undefined;

  if (spotifyIds !== undefined) {
    spotifyAlbumIdMap = arrayToObject(spotifyIds.albums, 'title');
  }

  return discography.result.map(album => ({
    key: album.key,
    title: album.title,
    type: album.type,
    number: album.number,
    artworks: album.artworks,
    release: album.release,
    songs: album.songs.map(song => ({
      key: song.key,
      title: song.title,
      type: song.type,
      inCdType: song.inCdType,
    })),
    centers: getAlbumCenters(album, members),
    externalLinks: getAlbumExternalLinks(album, spotifyAlbumIdMap),
  }));
}
