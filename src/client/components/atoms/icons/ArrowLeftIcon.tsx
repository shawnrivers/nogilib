import * as React from "react";

interface ArrowLeftIconProps {
  className?: string;
}

export const ArrowLeftIcon = ({ className }: ArrowLeftIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
);
