import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components/atoms/Layout";
import "styles/app.scss";

export default () => (
  <Layout>
    <h1>About Page</h1>
    <Link to="/">Back</Link>
  </Layout>
);
