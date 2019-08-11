import * as React from "react";

interface CdProps {
  data: {
    title: string;
    number: string;
    artworks: {
      medium: string;
    }[];
  };
}

export const Cd = ({ data }: CdProps) => (
  <div>
    <h2>{data.title}</h2>
    <img src={data.artworks[0].medium} width="300px" alt={data.title} />
  </div>
);
