import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { AlbumPage } from 'client/features/Album';
import { AlbumPageData } from 'server/pages/album';
import { arrayToObject } from 'utils/arrays';

export const query = graphql`
  query($key: String!) {
    albumJson(key: { eq: $key }) {
      title
      type
      number
      artworks {
        url {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        type
      }
      release
      songs {
        key
        title
        type
        inCdType
      }
      centers {
        name
        nameNotations {
          firstName
          firstNameEn
          lastName
          lastNameEn
        }
        albumProfileImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

type AlbumPageDataNode = {
  title: AlbumPageData['title'];
  type: AlbumPageData['type'];
  number: AlbumPageData['number'];
  artworks: {
    url: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    type: AlbumPageData['artworks'][0]['type'];
  }[];
  release: AlbumPageData['release'];
  songs: AlbumPageData['songs'];
  centers: {
    name: AlbumPageData['centers'][0]['name'];
    nameNotations: Pick<
      AlbumPageData['centers'][0]['nameNotations'],
      'firstName' | 'firstNameEn' | 'lastName' | 'lastNameEn'
    >;
    albumProfileImage: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  }[];
};

export type AlbumPageProps = {
  title: AlbumPageDataNode['title'];
  type: AlbumPageDataNode['type'];
  number: AlbumPageDataNode['number'];
  artworks: {
    fluid: AlbumPageDataNode['artworks'][0]['url']['childImageSharp']['fluid'];
    type: AlbumPageDataNode['artworks'][0]['type'];
  }[];
  release: AlbumPageDataNode['release'];
  tracks: {
    key: AlbumPageDataNode['songs'][0]['key'];
    title: AlbumPageDataNode['songs'][0]['title'];
    type: AlbumPageDataNode['songs'][0]['type'];
    artworkFluid: AlbumPageDataNode['artworks'][0]['url']['childImageSharp']['fluid'];
  }[];
  centers: {
    name: AlbumPageDataNode['centers'][0]['name'];
    nameNotations: AlbumPageDataNode['centers'][0]['nameNotations'];
    albumProfileImageFluid: AlbumPageDataNode['centers'][0]['albumProfileImage']['childImageSharp']['fluid'];
  }[];
};

const AlbumPageContainer: React.FC<{
  data: {
    albumJson: AlbumPageDataNode;
  };
}> = props => {
  const albumData = props.data.albumJson;

  const artworks: AlbumPageProps['artworks'] = albumData.artworks.map(
    artwork => ({
      fluid: artwork.url.childImageSharp.fluid,
      type: artwork.type,
    })
  );

  const artworksObject = arrayToObject(artworks, 'type');
  const tracks: AlbumPageProps['tracks'] = albumData.songs.map(song => ({
    key: song.key,
    title: song.title,
    type: song.type,
    artworkFluid: artworksObject[song.inCdType[0]].fluid,
  }));

  const centers: AlbumPageProps['centers'] = albumData.centers.map(center => ({
    name: center.name,
    nameNotations: center.nameNotations,
    albumProfileImageFluid: center.albumProfileImage.childImageSharp.fluid,
  }));

  return (
    <AlbumPage
      title={albumData.title}
      type={albumData.type}
      number={albumData.number}
      artworks={artworks}
      release={albumData.release}
      tracks={tracks}
      centers={centers}
    />
  );
};

export default AlbumPageContainer;
