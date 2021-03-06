import { Meta, Story } from '@storybook/react/types-6-0';
import { PositionCounter, PositionCounterProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Position/PositionCounter',
  component: PositionCounter,
  decorators: [ThemeDecorator()],
} as Meta<PositionCounterProps>;

const Template: Story<PositionCounterProps> = props => (
  <PositionCounter {...props} />
);

export const Default = Template.bind({});
Default.args = {
  center: 1,
  fukujin: 2,
  selected: 3,
  under: 1,
};
