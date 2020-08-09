import { action } from "@storybook/addon-actions";

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = "";

window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};
