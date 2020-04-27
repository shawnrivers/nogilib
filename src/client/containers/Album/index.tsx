import { graphql } from "gatsby";
import * as React from "react";
import { Cd } from "client/components/templates/Cd";
import { CdTabType } from "client/types/tab";
import { FocusPerformersType, SongType } from "server/utils/constants";

export const query = graphql`
  query($number: String!) {
    albumsJson(number: { eq: $number }) {
      title
      number
      artworks {
        large
        medium
      }
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
    albumsJson: {
      title: string;
      number: string;
      artworks: {
        large: string;
        medium: string;
      }[];
      songs: {
        key: string;
        title: string;
        type: SongType;
        focusPerformers: {
          name: string[];
          type: FocusPerformersType;
        };
      }[];
      release: string;
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
