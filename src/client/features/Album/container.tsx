import * as React from 'react';
import { graphql } from 'gatsby';
import { DiscographyResult } from 'server/actors/Discography/models';
import { FocusPerformers } from 'server/actors/Discography/types';
import { Header } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';

export const query = graphql`
  query($key: String!) {
    discographyJson(key: { eq: $key }) {
      title
      key
      type
      number
      artworks
      release
      songs {
        focusPerformers {
          name
          type
        }
      }
    }
  }
`;

type QueryResultAlbum = {
  title: DiscographyResult['title'];
  key: DiscographyResult['key'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artworks: DiscographyResult['artworks'];
  release: DiscographyResult['release'];
  songs: {
    focusPerformers: FocusPerformers;
  }[];
};

type QueryResult = {
  data: {
    discographyJson: QueryResultAlbum;
  };
};

const AlbumContainer: React.FC<QueryResult> = props => {
  return (
    <React.Fragment>
      <Header>
        <Typography variant="h1">{props.data.discographyJson.title}</Typography>
      </Header>
    </React.Fragment>
  );
};

export default AlbumContainer;
