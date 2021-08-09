import type { Meta, Story } from '@storybook/react';
import { BaseButton } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';

export default {
  title: 'Components/Shared/Buttons/Base/BaseButton',
  decorators: [ThemeDecorator()],
  component: BaseButton,
} as Meta;

const Template: Story = () => {
  return (
    <BaseButton>
      <Typography variant="body1" element="span">
        Text
      </Typography>
    </BaseButton>
  );
};

export const Default = Template.bind({});
