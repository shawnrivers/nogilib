export type AllImages = {
  relativePath: string;
  childImageSharp: {
    fluid: {
      src: string;
      srcSet: string;
      aspectRatio: number;
      sizes: string;
    };
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
