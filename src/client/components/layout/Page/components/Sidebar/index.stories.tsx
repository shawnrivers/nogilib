import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Sidebar, SidebarProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { BaseButton } from 'client/components/atoms/BaseButton';
import { Typography } from 'client/components/atoms/Typography';

export default {
  title: 'Common/SideBar',
  decorators: [ThemeDecorator()],
  component: Sidebar,
} as Meta<SidebarProps>;

const Template: Story<SidebarProps> = () => {
  const [isSidebarOpen, toggleSidebar] = React.useState(false);

  return (
    <div>
      <BaseButton
        onClick={() => toggleSidebar(true)}
        horizontalPadding="l"
        verticalPadding="l"
      >
        <Typography variant="h4" element="span">
          Toggle Sidebar
        </Typography>
      </BaseButton>
      <Sidebar open={isSidebarOpen} onClose={() => toggleSidebar(false)} />
    </div>
  );
};

export const Default = Template.bind({});
