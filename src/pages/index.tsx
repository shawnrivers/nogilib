import * as React from "react";
import { Hello } from "components/Hello";
import { Link } from "gatsby";

export default () => (
  <div>
    <h1>Top Page</h1>
    <Link to="/about">About</Link>
    <Hello title="world" />
  </div>
);
