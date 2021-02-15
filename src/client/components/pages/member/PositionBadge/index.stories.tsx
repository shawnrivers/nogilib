import { Meta, Story } from '@storybook/react/types-6-0';
import { PositionBadge, PositionBadgeProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { PositionType } from 'server/actors/Members/constants/position';

export default {
  title: 'Position/PositionBadge',
  decorators: [ThemeDecorator()],
  component: PositionBadge,
} as Meta<PositionBadgeProps>;

const Template: Story<PositionBadgeProps> = props => (
  <PositionBadge {...props} />
);

export const Default = Template.bind({});
Default.args = {
  position: PositionType.Center,
};
