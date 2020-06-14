import { graphql } from "gatsby";
import * as React from "react";
import { Cd, CdProps } from "client/features/Cd/template";
import { CdTabType } from "client/types/tabs";
import { AlbumResult } from "server/actors/Cds/Albums/models";
import { SongTitle } from "server/actors/Songs/constants/songTitle";

type AlbumData = {
  data: {
    albumsJson: Pick<
      AlbumResult,
      "title" | "number" | "artworks" | "release"
    > & {
      songs: Pick<
        AlbumResult["songs"][0],
        "key" | "title" | "type" | "focusPerformers"
      >[];
    };
  };
  pageContext: {
    cdType: CdTabType;
    number: string;
    locale: string;
  };
};

const AlbumContainer: React.FC<AlbumData> = ({ data: { albumsJson } }) => {
  const albums = React.useMemo<Omit<CdProps, "type">>(() => {
    return {
      title: albumsJson.title,
      number: albumsJson.number,
      artworks: albumsJson.artworks,
      songs: albumsJson.songs.map(song => ({
        ...song,
        hasDetails: song.title !== SongTitle.Overture,
      })),
      release: albumsJson.release,
    };
  }, [albumsJson]);

  return albumsJson ? <Cd type={CdTabType.Albums} {...albums} /> : null;
};

export const query = graphql`
  query($number: String!) {
    albumsJson(number: { eq: $number }) {
      title
      number
      artworks
      songs {
        key
        title
        type
        focusPerformers {
          name
          type
        }
      }
      release
    }
  }
`;

export default AlbumContainer;
