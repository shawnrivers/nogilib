import { FluidObject } from 'gatsby-image';

export type AllImages = {
  relativePath: string;
  childImageSharp: {
    fluid: FluidObject;
  };
}[];

export type AllImagesState = {
  allImages: AllImages;
};

export const getInitialAllImagesState = (): AllImagesState => ({
  allImages: [],
});

type Action = {
  type: 'UPDATE_ALL_IMAGES';
  payload: {
    allImages: AllImages;
  };
};

export const allImagesReducer = (
  state: AllImagesState,
  action: Action
): AllImagesState => {
  switch (action.type) {
    case 'UPDATE_ALL_IMAGES':
      return {
        ...state,
        allImages: action.payload.allImages,
      };
    default:
      return state;
  }
};
