import type { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';

export default {
  title: 'Common/Card',
  decorators: [ThemeDecorator()],
  component: Card,
} as Meta<CardProps>;

const Template: Story<CardProps> = props => {
  return (
    <Card {...props}>
      <Typography variant="h2">Text</Typography>
    </Card>
  );
};

export const Default = Template.bind({});

Default.args = {
  href: '/',
};
