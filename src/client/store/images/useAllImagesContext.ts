import * as React from 'react';
import { AllImagesContext } from 'client/store/images/context';

export const useAllImagesContext = () => {
  return React.useContext(AllImagesContext);
};
