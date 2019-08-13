import * as React from "react";
import { graphql, Link } from "gatsby";
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
      <Link to="/cds/?page=singles">
        <button>Back</button>
      </Link>
    </nav>
    <main>
      {props.data ? <Cd data={props.data.singlesJson} /> : <h1>Single Page</h1>}
    </main>
  </Layout>
);

export default Single;
