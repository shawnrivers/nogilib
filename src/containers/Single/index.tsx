import * as React from "react";
import { graphql } from "gatsby";
import { SongType, FocusPerformersType, CdType } from "types/responseTypes";
import { Cd } from "components/templates/Cd";

export const query = graphql`
  query($number: String!) {
    singlesJson(number: { eq: $number }) {
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

interface SingleData {
  data: {
    singlesJson: {
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

const SingleContainer = ({ data: { singlesJson } }: SingleData) => {
  return singlesJson ? (
    <Cd
      type={CdType.Singles}
      title={singlesJson.title}
      number={singlesJson.number}
      artworks={singlesJson.artworks}
      songs={singlesJson.songs}
      release={singlesJson.release}
    />
  ) : null;
};

export default SingleContainer;
