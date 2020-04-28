import { graphql } from "gatsby";
import * as React from "react";
import { Cd } from "client/components/templates/Cd";
import { CdTabType } from "client/types/tabs";
import { ResultCdSong } from "server/models/commons";
import { AlbumResponse } from "server/models/IAlbum";

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

interface AlbumJson {
  data: {
    albumsJson: Pick<
      AlbumResponse,
      "title" | "number" | "artworks" | "release"
    > & {
      songs: Pick<ResultCdSong, "key" | "title" | "type" | "focusPerformers">[];
    };
  };
  pageContext: {
    cdType: CdTabType;
    number: string;
    locale: string;
  };
}

const AlbumContainer = ({ data: { albumsJson } }: AlbumJson) => {
  return albumsJson ? (
    <Cd
      type={CdTabType.Albums}
      title={albumsJson.title}
      number={albumsJson.number}
      artworks={albumsJson.artworks}
      songs={albumsJson.songs}
      release={albumsJson.release}
    />
  ) : null;
};

export default AlbumContainer;
