import { action } from '@storybook/addon-actions';
import { RouterContext } from 'next/dist/shared/lib/router-context';

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
