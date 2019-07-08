import * as React from "react";
import { Hello } from "components/Hello";
import { Link } from "gatsby";

export default () => (
  <div>
    <h1>About Page</h1>
    <Link to="/">Back</Link>
    <Hello title="Gatsby" />
  </div>
);
