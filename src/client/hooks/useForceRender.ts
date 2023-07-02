import * as React from 'react';

export const useForceRender = () => {
  const [, forceRender] = React.useReducer(n => n + 1, 0);
  return forceRender;
};
