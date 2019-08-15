import * as React from "react";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { graphql } from "gatsby";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/atoms/Layout";
import { ArrowBackIcon } from "components/atoms/icons/ArrowBackIcon";
import styles from "./single.module.scss";

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
        type: string;
        focusPerformers: {
          name: string[];
          type: string;
        };
      }[];
      release: string;
    };
  };
}

const Single = ({ data }: SingleData) => (
  <Layout>
    <div>
      <LocalizedLink to="/cds/?page=singles">
        <ArrowBackIcon className={styles.back} />
      </LocalizedLink>
    </div>
    <div>
      {data ? (
        <Cd
          type="single"
          title={data.singlesJson.title}
          number={data.singlesJson.number}
          artworks={data.singlesJson.artworks}
          songs={data.singlesJson.songs}
          release={data.singlesJson.release}
        />
      ) : (
        <h1>Single Page</h1>
      )}
    </div>
  </Layout>
);

export default Single;
