import * as React from "react";
import { LocalizedLink } from "components/atoms/LocalizedLink";
import { graphql } from "gatsby";
import { Cd } from "components/organisms/Cd";
import { Layout } from "components/templates/Layout";

export const query = graphql`
  query($number: String!) {
    singlesJson(number: { eq: $number }) {
      title
      number
      artworks {
        medium
      }
    }
  }
`;

interface SingleData {
  data: {
    singlesJson: {
      title: string;
      number: string;
      artworks: {
        medium: string;
      }[];
    };
  };
}

const Single = (props: SingleData) => (
  <Layout>
    <nav>
      <LocalizedLink to="/cds/?page=singles">
        <button>Back</button>
      </LocalizedLink>
    </nav>
    <main>
      {props.data ? <Cd data={props.data.singlesJson} /> : <h1>Single Page</h1>}
    </main>
  </Layout>
);

export default Single;
