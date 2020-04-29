import * as React from "react";

export const useScrollRestoration = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
