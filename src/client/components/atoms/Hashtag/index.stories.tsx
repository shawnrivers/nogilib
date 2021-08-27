import { Meta, Story } from '@storybook/react/types-6-0';
import { Hashtag, HashtagProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Common/Hashtag',
  decorators: [ThemeDecorator()],
  component: Hashtag,
} as Meta<HashtagProps>;

const Template: Story<HashtagProps> = props => {
  return <Hashtag {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  text: 'Hashtag',
};
