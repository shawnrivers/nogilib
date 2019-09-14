import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components/atoms/Layout";
import "styles/app.scss";
import { Links } from "utils/constants";
import { getUrlWithTrailingSlash } from "utils/strings";

export default () => (
  <Layout>
    <h1>Page Not Found</h1>
    <Link to={getUrlWithTrailingSlash(Links.Singles)}>Go back</Link>
  </Layout>
);
