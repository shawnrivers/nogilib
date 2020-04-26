import { Songs } from "../editor/constants/titles";
import { ResultAlbums } from "../models/IAlbum";
import { ResultSingles } from "../models/ISingle";
import { RawSong, ResultSong, ResultSongs } from "../models/ISong";
import { arrayToObject } from "../utils/arrays";
import { SongType } from "../utils/constants";

export const initializeSongs = (rawSongs: RawSong[]): ResultSongs => {
  const initializeSong = (rawSong: RawSong): ResultSong => ({
    title: rawSong.title,
    key: Songs[rawSong.title].key,
    single: { title: "", number: "" },
    albums: [],
    artwork: {
      large: "",
      medium: "",
      small: "",
    },
    musicVideo: rawSong.musicVideo,
    type: rawSong.type,
    creators: rawSong.creators,
    performers: rawSong.performers,
    performersTag: {
      name: "",
      singleNumber: "",
    },
    formations: rawSong.formations,
  });

  const initializedArray = rawSongs.map(initializeSong);

  return arrayToObject(initializedArray, "title");
};

export const recordSongSingle = (
  songs: ResultSongs,
  singles: ResultSingles
) => {
  for (const song of Object.values(songs)) {
    song.single.title = "";

    for (const single of Object.values(singles)) {
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.single.title = single.title;
          song.single.number = single.number;
          break;
        }
      }

      if (song.single.title !== "") {
        break;
      }
    }
  }
};

export const recordSongAlbums = (songs: ResultSongs, albums: ResultAlbums) => {
  for (const song of Object.values(songs)) {
    song.albums = [];

    for (const album of Object.values(albums)) {
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.albums.push({
            title: album.title,
            number: album.number,
          });
        }
      }
    }

    song.albums.sort(
      (albumA, albumB) =>
        new Date(albums[albumA.title].release).getTime() -
        new Date(albums[albumB.title].release).getTime()
    );
  }
};

export const recordArtworks = (
  songs: ResultSongs,
  singles: ResultSingles,
  albums: ResultAlbums
) => {
  for (const song of Object.values(songs)) {
    if (song.single.title !== "") {
      const single = singles[song.single.title];
      for (const singleSong of single.songs) {
        if (singleSong.title === song.title) {
          song.artwork = single.artworks[singleSong.inCdType[0]];
          break;
        }
      }
    } else if (song.albums.length > 0) {
      const album = albums[song.albums[0].title];
      for (const albumSong of album.songs) {
        if (albumSong.title === song.title) {
          song.artwork = album.artworks[albumSong.inCdType[0]];
        }
      }
    }
  }
};

const calculatePerformersTag = (
  song: ResultSong,
  albums: ResultAlbums
): {
  name: string;
  singleNumber: string;
} => {
  let name = "";
  let singleNumber = "";

  if (song.single.number !== "") {
    singleNumber = song.single.number;
  } else if (song.albums.length > 0) {
    singleNumber = albums[song.albums[0].title].previousSingleNumber;
  }

  if (song.type === SongType.Unit) {
    name = song.performers.unit;
  }
  if (song.type === SongType.FirstGeneration) {
    name = "first generation";
  }
  if (song.type === SongType.SecondGeneration) {
    name = "second generation";
  }
  if (song.type === SongType.ThirdGeneration) {
    name = "third generation";
  }
  if (song.type === SongType.FourthGeneration) {
    name = "fourth generation";
  }
  if (
    song.type === SongType.Title ||
    song.type === SongType.Selected ||
    song.type === SongType.Lead
  ) {
    name = "selected";
  }
  if (song.type === SongType.Selected12) {
    name = "selected";
    singleNumber = "12";
  }
  if (song.type === SongType.Under) {
    name = "under";
  }

  return { name, singleNumber };
};

export const recordPerformersTags = (
  songs: ResultSongs,
  albums: ResultAlbums
) => {
  for (const song of Object.values(songs)) {
    song.performersTag = calculatePerformersTag(song, albums);

    // Set "Selected" SongType back to "Coupling"
    // since "Selected" is a subset of "Coupling" and is only used to create performers tag.
    if (song.type.includes(SongType.Selected)) {
      song.type = SongType.Coupling;
    }
  }
};
