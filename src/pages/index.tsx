import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components/atoms/Layout";
import "styles/app.scss";
import { Links } from "utils/constants";
import { getUrlWithTrailingComma } from "utils/strings";

export default () => (
  <Layout>
    <h1>Top Page</h1>
    <Link to={getUrlWithTrailingComma(Links.Singles)}>CDs</Link>
  </Layout>
);
