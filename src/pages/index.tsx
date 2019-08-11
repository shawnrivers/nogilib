import * as React from "react";
import { Link } from "gatsby";

export default () => (
  <div>
    <h1>Top Page</h1>
    <Link to="/cds">CDs</Link>
    <br />
    <Link to="/about">About</Link>
  </div>
);
