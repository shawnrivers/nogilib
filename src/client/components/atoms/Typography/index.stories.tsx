/**@jsx jsx */
import { jsx } from '@emotion/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography, TypographyProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Design System/Typography',
  decorators: [ThemeDecorator()],
  component: Typography,
} as Meta<TypographyProps>;

const Template: Story<TypographyProps> = props => <Typography {...props} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'h1',
  children: 'Text',
};
