import * as React from 'react';
import { Context } from 'client/store/app/context';

export const useAppContext = () => {
  return React.useContext(Context);
};
