import * as React from 'react';
import { graphql } from 'gatsby';
import { DiscographyResult } from 'server/actors/Discography/models';
import { FocusPerformers } from 'server/actors/Discography/types';
import { AlbumPage } from 'client/features/Album/template';

export const query = graphql`
  query($key: String!) {
    discographyJson(key: { eq: $key }) {
      title
      key
      type
      number
      artworks {
        url
        type
      }
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

export type QueryResultAlbum = {
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

const AlbumPageContainer: React.FC<QueryResult> = props => {
  return <AlbumPage album={props.data.discographyJson} />;
};

export default AlbumPageContainer;
