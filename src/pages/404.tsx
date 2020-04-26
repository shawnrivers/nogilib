import * as React from "react";
import { Link } from "gatsby";
import { PageContentLayout } from "client/components/atoms/PageContentLayout";
import "client/styles/app.scss";
import { getUrlWithTrailingSlash } from "client/utils/strings";
import { Links } from "client/utils/constants";

export default () => (
  <PageContentLayout>
    <h1>Page Not Found</h1>
    <Link to={getUrlWithTrailingSlash(Links.Singles)}>Go back</Link>
  </PageContentLayout>
);
