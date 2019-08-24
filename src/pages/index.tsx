import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components/atoms/Layout";
import "styles/app.scss";

export default () => (
  <Layout>
    <h1>Top Page</h1>
    <Link to="/cds/singles">CDs</Link>
  </Layout>
);
