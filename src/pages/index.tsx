import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components/atoms/Layout";
import "styles/app.scss";
import { Links } from "../utils/constants";

export default () => (
  <Layout>
    <h1>Top Page</h1>
    <Link to={Links.Singles}>CDs</Link>
  </Layout>
);
