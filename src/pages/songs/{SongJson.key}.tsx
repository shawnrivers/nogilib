import * as React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SongPageData } from 'server/pages/song';
import { SongPage } from 'client/templates/Song';

export const query = graphql`
  query($key: String!) {
    songJson(key: { eq: $key }) {
      title
      type
      artwork {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
      creators {
        arrange
        compose
        direct
        lyrics
      }
      single {
        number
      }
      albums {
        number
      }
      otherCds {
        number
      }
      performersTag {
        name
        album {
          type
          number
        }
      }
      performers {
        name
        nameNotations {
          lastName
          lastNameEn
          firstName
          firstNameEn
        }
        profileImage {
          childImageSharp {
            gatsbyImageData(width: 165, layout: CONSTRAINED)
          }
        }
        position
        isMember
      }
    }
  }
`;

type SongPageDataNode = {
  title: SongPageData['title'];
  type: SongPageData['type'];
  artwork: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  creators: SongPageData['creators'];
  single: {
    number: SongPageData['single']['number'];
  };
  albums: {
    number: SongPageData['albums'][0]['number'];
  }[];
  otherCds: {
    number: SongPageData['otherCds'][0]['number'];
  }[];
  performersTag: SongPageData['performersTag'];
  performers: {
    name: SongPageData['performers'][0][0]['name'];
    nameNotations: Pick<
      SongPageData['performers'][0][0]['nameNotations'],
      'lastName' | 'lastNameEn' | 'firstName' | 'firstNameEn'
    >;
    profileImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    position: SongPageData['performers'][0][0]['position'];
    isMember: SongPageData['performers'][0][0]['isMember'];
  }[][];
};

export type SongPageProps = {
  title: SongPageDataNode['title'];
  type: SongPageDataNode['type'];
  artworkFluid: SongPageDataNode['artwork']['childImageSharp']['gatsbyImageData'];
  creators: SongPageData['creators'];
  single: SongPageDataNode['single'];
  albums: SongPageDataNode['albums'];
  otherCds: SongPageDataNode['otherCds'];
  performersTag: SongPageDataNode['performersTag'];
  performers: (Omit<SongPageDataNode['performers'][0][0], 'profileImage'> & {
    profileImageFluid: SongPageDataNode['performers'][0][0]['profileImage']['childImageSharp']['gatsbyImageData'];
  })[][];
};

const SongPageContainer: React.FC<{
  data: {
    songJson: SongPageDataNode;
  };
}> = props => {
  const songData = props.data.songJson;

  const performers: SongPageProps['performers'] = songData.performers.map(row =>
    row.map(performer => ({
      name: performer.name,
      nameNotations: performer.nameNotations,
      profileImageFluid: performer.profileImage.childImageSharp.gatsbyImageData,
      position: performer.position,
      isMember: performer.isMember,
    }))
  );

  return (
    <SongPage
      title={songData.title}
      type={songData.type}
      artworkFluid={songData.artwork.childImageSharp.gatsbyImageData}
      creators={songData.creators}
      single={songData.single}
      albums={songData.albums}
      otherCds={songData.otherCds}
      performersTag={songData.performersTag}
      performers={performers}
    />
  );
};

export default SongPageContainer;
