import { graphql } from "gatsby";
import * as React from "react";
import { Cd, CdProps } from "client/features/Cd/template";
import { CdTabType } from "client/types/tabs";
import { SingleResult } from "server/actors/Cds/Singles/models";
import { SongTitle } from "server/actors/Songs/constants/songTitle";

type SingleData = {
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
};

const SingleContainer: React.FC<SingleData> = ({ data: { singlesJson } }) => {
  const singles = React.useMemo<Omit<CdProps, "type">>(() => {
    return {
      title: singlesJson.title,
      number: singlesJson.number,
      artworks: singlesJson.artworks,
      songs: singlesJson.songs.map(song => ({
        ...song,
        hasDetails: song.title !== SongTitle.Overture,
      })),
      release: singlesJson.release,
    };
  }, [singlesJson]);

  return singlesJson ? <Cd type={CdTabType.Singles} {...singles} /> : null;
};

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

export default SingleContainer;
