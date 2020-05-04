import { graphql } from "gatsby";
import * as React from "react";
import { Cd } from "client/features/Cd/template";
import { CdTabType } from "client/types/tabs";
import { SingleResult } from "server/actors/Singles/models";

export const query = graphql`
  query($number: String!) {
    singlesJson(number: { eq: $number }) {
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

interface SingleData {
  data: {
    singlesJson: Pick<
      SingleResult,
      "title" | "number" | "release" | "artworks"
    > & {
      songs: Pick<
        SingleResult["songs"][0],
        "key" | "title" | "type" | "focusPerformers"
      >[];
    };
  };
  pageContext: {
    cdType: CdTabType;
    number: string;
    locale: string;
  };
}

const SingleContainer = ({ data: { singlesJson } }: SingleData) => {
  return singlesJson ? (
    <Cd
      type={CdTabType.Singles}
      title={singlesJson.title}
      number={singlesJson.number}
      artworks={singlesJson.artworks}
      songs={singlesJson.songs}
      release={singlesJson.release}
    />
  ) : null;
};

export default SingleContainer;
