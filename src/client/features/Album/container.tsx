import * as React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { DiscographyResult } from 'server/actors/Discography/models';
import { AlbumPage } from 'client/features/Album/template';
import { MemberResult } from 'server/actors/Members/models';
import { arrayToObject } from 'utils/arrays';

export const query = graphql`
  query($key: String!) {
    discographyJson(key: { eq: $key }) {
      title
      key
      type
      number
      previousSingleNumber
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
        title
        key
        type
        inCdType
        focusPerformers {
          members
          type
        }
      }
    }

    allMembersJson {
      nodes {
        name
        nameNotations {
          lastName
          firstName
          lastNameEn
          firstNameEn
        }
        profileImages {
          singles {
            number
            url {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          digital {
            number
            url {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
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
  previousSingleNumber: DiscographyResult['previousSingleNumber'];
  artworks: {
    url: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    type: DiscographyResult['artworks'][0]['type'];
  }[];
  release: DiscographyResult['release'];
  songs: {
    title: DiscographyResult['songs'][0]['title'];
    key: DiscographyResult['songs'][0]['key'];
    type: DiscographyResult['songs'][0]['type'];
    inCdType: DiscographyResult['songs'][0]['inCdType'];
    focusPerformers: DiscographyResult['songs'][0]['focusPerformers'];
  }[];
};

type QueryResultMember = {
  name: MemberResult['name'];
  nameNotations: Pick<
    MemberResult['nameNotations'],
    'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
  >;
  profileImages: {
    singles: {
      number: MemberResult['profileImages']['singles'][0]['number'];
      url: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    }[];
    digital: {
      number: MemberResult['profileImages']['digital'][0]['number'];
      url: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    }[];
  };
};

type QueryResult = {
  data: {
    discographyJson: QueryResultAlbum;
    allMembersJson: {
      nodes: QueryResultMember[];
    };
  };
};

export type AlbumPageProps = {
  title: DiscographyResult['title'];
  key: DiscographyResult['key'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artworks: {
    fluid: FluidObject;
    type: DiscographyResult['artworks'][0]['type'];
  }[];
  release: DiscographyResult['release'];
  tracks: {
    title: DiscographyResult['songs'][0]['title'];
    key: DiscographyResult['songs'][0]['key'];
    type: DiscographyResult['songs'][0]['type'];
    inCdType: DiscographyResult['songs'][0]['inCdType'];
    focusPerformers: DiscographyResult['songs'][0]['focusPerformers'];
    artworkFluid: FluidObject;
  }[];
  centers: {
    name: MemberResult['name'];
    nameNotations: Pick<
      MemberResult['nameNotations'],
      'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
    >;
    profileImageFluid: FluidObject;
  }[];
};

const AlbumPageContainer: React.FC<QueryResult> = props => {
  const albumData = props.data.discographyJson;
  const membersData = props.data.allMembersJson.nodes;

  const artworks = React.useMemo<AlbumPageProps['artworks']>(
    () =>
      albumData.artworks.map(artwork => ({
        fluid: artwork.url.childImageSharp.fluid,
        type: artwork.type,
      })),
    [albumData]
  );

  const tracks = React.useMemo<AlbumPageProps['tracks']>(
    () =>
      albumData.songs.map(song => ({
        ...song,
        artworkFluid:
          artworks.find(artwork => artwork.type === song.inCdType[0])?.fluid ??
          artworks[0].fluid,
      })),
    [albumData, artworks]
  );

  const centers = React.useMemo(() => getCenters(albumData, membersData), [
    albumData,
    membersData,
  ]);

  return (
    <AlbumPage
      title={albumData.title}
      key={albumData.key}
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

function getCenters(
  albumData: QueryResultAlbum,
  membersData: QueryResultMember[]
): AlbumPageProps['centers'] {
  const membersObject = arrayToObject(membersData, 'name');

  const titleSong = albumData.songs[0];
  const titleSongFocusPerformers = titleSong.focusPerformers;

  if (
    titleSongFocusPerformers.type !== 'center' ||
    albumData.type === 'album'
  ) {
    return [];
  } else {
    let profileImageType: 'singles' | 'digital';

    switch (albumData.type) {
      case 'single':
        profileImageType = 'singles';
        break;
      case 'digital':
        profileImageType = 'digital';
    }

    return titleSongFocusPerformers.members
      .map(memberNameKey => membersObject[memberNameKey])
      .map(member => ({
        name: member.name,
        nameNotations: member.nameNotations,
        profileImageFluid: arrayToObject(
          member.profileImages[profileImageType],
          'number'
        )[albumData.number].url.childImageSharp.fluid,
      }));
  }
}
