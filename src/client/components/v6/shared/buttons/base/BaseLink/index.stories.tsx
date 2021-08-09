import type { Meta, Story } from '@storybook/react';
import { BaseLink } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';

export default {
  title: 'Components/Shared/Buttons/Base/BaseLink',
  decorators: [ThemeDecorator()],
  component: BaseLink,
} as Meta;

const Template: Story = () => {
  return (
    <BaseLink href="/">
      <Typography variant="body1" element="span">
        Text
      </Typography>
    </BaseLink>
  );
};

export const Default = Template.bind({});
