import * as React from "react";
import { graphql } from "gatsby";
import { Cd } from "client/components/templates/Cd";
import {
  CdType,
  FocusPerformersType,
  SongType,
} from "client/types/responseTypes";

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
    cdType: CdType;
    number: string;
    locale: string;
  };
}

const AlbumContainer = ({ data: { albumsJson } }: AlbumJson) => {
  return albumsJson ? (
    <Cd
      type={CdType.Albums}
      title={albumsJson.title}
      number={albumsJson.number}
      artworks={albumsJson.artworks}
      songs={albumsJson.songs}
      release={albumsJson.release}
    />
  ) : null;
};

export default AlbumContainer;
