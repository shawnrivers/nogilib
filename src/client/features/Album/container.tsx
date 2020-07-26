import * as React from 'react';
import { graphql } from 'gatsby';
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
      artworks {
        url
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
        singleImages
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
  singleImages: MemberResult['singleImages'];
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
  artworks: DiscographyResult['artworks'];
  release: DiscographyResult['release'];
  tracks: {
    title: DiscographyResult['songs'][0]['title'];
    key: DiscographyResult['songs'][0]['key'];
    type: DiscographyResult['songs'][0]['type'];
    inCdType: DiscographyResult['songs'][0]['inCdType'];
    focusPerformers: DiscographyResult['songs'][0]['focusPerformers'];
    artwork: string;
  }[];
  centers: {
    name: MemberResult['name'];
    nameNotations: Pick<
      MemberResult['nameNotations'],
      'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
    >;
    profileImage: MemberResult['singleImages'][0];
  }[];
};

const AlbumPageContainer: React.FC<QueryResult> = props => {
  const albumData = props.data.discographyJson;
  const membersData = props.data.allMembersJson.nodes;
  const membersObject = React.useMemo(
    () => arrayToObject(membersData, 'name'),
    [membersData]
  );

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

  const centers = React.useMemo(() => {
    const titleSongFocusPerformers = albumData.songs[0].focusPerformers;

    if (titleSongFocusPerformers.type !== 'center') {
      return [];
    } else {
      return titleSongFocusPerformers.members
        .map(memberNameKey => membersObject[memberNameKey])
        .map(member => ({
          name: member.name,
          nameNotations: member.nameNotations,
          profileImage: member.singleImages[parseInt(albumData.number) - 1],
        }));
    }
  }, [albumData.number, albumData.songs, membersObject]);

  return (
    <AlbumPage
      title={albumData.title}
      key={albumData.key}
      type={albumData.type}
      number={albumData.number}
      artworks={albumData.artworks}
      release={albumData.release}
      tracks={tracks}
      centers={centers}
    />
  );
};

export default AlbumPageContainer;
