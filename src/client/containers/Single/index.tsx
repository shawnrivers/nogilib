import { graphql } from "gatsby";
import * as React from "react";
import { Cd } from "client/components/templates/Cd";
import { CdTabType } from "client/types/tabs";
import { CdResponse, ResultCdSong } from "server/types/commons";

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
      CdResponse,
      "title" | "number" | "release" | "artworks"
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
