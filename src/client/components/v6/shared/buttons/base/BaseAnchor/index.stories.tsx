import type { Meta, Story } from '@storybook/react';
import { BaseAnchor } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';

export default {
  title: 'Components/Shared/Buttons/Base/BaseAnchor',
  decorators: [ThemeDecorator()],
  component: BaseAnchor,
} as Meta;

const Template: Story = () => {
  return (
    <BaseAnchor href="/">
      <Typography variant="body1" element="span">
        Text
      </Typography>
    </BaseAnchor>
  );
};

export const Default = Template.bind({});
