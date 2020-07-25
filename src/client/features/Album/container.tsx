import * as React from 'react';
import { graphql } from 'gatsby';
import { DiscographyResult } from 'server/actors/Discography/models';
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
        title
        type
        inCdType
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
    title: DiscographyResult['songs'][0]['title'];
    type: DiscographyResult['songs'][0]['type'];
    inCdType: DiscographyResult['songs'][0]['inCdType'];
    focusPerformers: DiscographyResult['songs'][0]['focusPerformers'];
  }[];
};

type QueryResult = {
  data: {
    discographyJson: QueryResultAlbum;
  };
};

export type AlbumPageProps = {
  title: DiscographyResult['title'];
  key: DiscographyResult['key'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artworks: DiscographyResult['artworks'];
  release: DiscographyResult['release'];
  tracks: {
    title: DiscographyResult['songs'][0]['title'];
    type: DiscographyResult['songs'][0]['type'];
    inCdType: DiscographyResult['songs'][0]['inCdType'];
    focusPerformers: DiscographyResult['songs'][0]['focusPerformers'];
    artwork: string;
  }[];
};

const AlbumPageContainer: React.FC<QueryResult> = props => {
  const albumData = props.data.discographyJson;

  const tracks = React.useMemo(
    () =>
      albumData.songs.map(song => ({
        ...song,
        artwork:
          albumData.artworks.find(artwork => artwork.type === song.inCdType[0])
            ?.url ?? albumData.artworks[0].url,
      })),
    [albumData]
  );

  return (
    <AlbumPage
      title={albumData.title}
      key={albumData.key}
      type={albumData.type}
      number={albumData.number}
      artworks={albumData.artworks}
      release={albumData.release}
      tracks={tracks}
    />
  );
};

export default AlbumPageContainer;
