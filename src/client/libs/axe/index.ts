import React from 'react';
import { isProduction, isServer } from 'utils/env';

export const setupAxe = async () => {
  if (!isProduction() && !isServer()) {
    const ReactDOM = await import('react-dom');
    const axe = await import('@axe-core/react');

    axe.default(React, ReactDOM, 1000);
  }
};
