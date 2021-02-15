import { Meta, Story } from '@storybook/react/types-6-0';
import { GlowStickBadge, GlowStickBadgeProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';

export default {
  title: 'Member/GlowStickBadge',
  decorators: [ThemeDecorator()],
  component: GlowStickBadge,
} as Meta<GlowStickBadgeProps>;

const Template: Story<GlowStickBadgeProps> = props => (
  <GlowStickBadge {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: GlowStickColorType.Purple,
  size: 24,
};
