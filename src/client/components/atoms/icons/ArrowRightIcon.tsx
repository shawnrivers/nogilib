import * as React from "react";

interface ArrowRightIconProps {
  className?: string;
}

export const ArrowRightIcon = ({ className }: ArrowRightIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);
