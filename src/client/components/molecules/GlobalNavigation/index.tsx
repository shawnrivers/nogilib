/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

export const GlobalNavigation: React.FC = () => {
  return (
    <div>
      <h1
        css={css`
          color: black;
        `}
      >
        Global Navigation
      </h1>
    </div>
  );
};
