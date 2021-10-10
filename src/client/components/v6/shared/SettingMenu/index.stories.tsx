import type { Meta, Story } from '@storybook/react';
import { SettingMenu, SettingMenuProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { noop } from 'utils/noop';

export default {
  title: 'Components/Shared/SettingMenu',
  decorators: [ThemeDecorator()],
  component: SettingMenu,
} as Meta<SettingMenuProps>;

const Template: Story<SettingMenuProps> = props => {
  return <SettingMenu {...props}></SettingMenu>;
};

export const ButtonItem = Template.bind({});
ButtonItem.args = {
  buttonLabel: 'language',
  items: [
    {
      label: 'English',
      isSelected: true,
      component: 'button',
      onClick: noop,
    },
    {
      label: '日本語',
      isSelected: false,
      component: 'button',
      onClick: noop,
    },
    {
      label: '中文',
      isSelected: false,
      component: 'button',
      onClick: noop,
    },
  ],
};

export const LinkItem = Template.bind({});
LinkItem.args = {
  buttonLabel: 'theme',
  items: [
    {
      label: 'Dark',
      isSelected: true,
      component: 'link',
      href: '/',
    },
    {
      label: 'Light',
      isSelected: false,
      component: 'link',
      href: '/',
    },
    {
      label: 'Auto',
      isSelected: false,
      component: 'link',
      href: '/',
    },
  ],
};
