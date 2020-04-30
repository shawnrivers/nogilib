import * as React from "react";

export const useOnClickOutside = (
  ref: React.MutableRefObject<any>,
  handler: (event: Event) => void
) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
