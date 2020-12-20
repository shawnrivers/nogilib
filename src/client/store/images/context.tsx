import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  AllImages,
  allImagesReducer,
  AllImagesState,
  getInitialAllImagesState,
} from 'client/store/images/reducer';

export const AllImagesContext = React.createContext<AllImagesState>(
  getInitialAllImagesState()
);

export const AllImagesContextProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(
    allImagesReducer,
    getInitialAllImagesState()
  );

  const allImagesData = useStaticQuery<{
    allFile: {
      nodes: AllImages;
    };
  }>(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    dispatch({
      type: 'UPDATE_ALL_IMAGES',
      payload: {
        allImages: allImagesData.allFile.nodes,
      },
    });
  }, [allImagesData]);

  return (
    <AllImagesContext.Provider
      value={{
        allImages: state.allImages,
      }}
    >
      {props.children}
    </AllImagesContext.Provider>
  );
};
