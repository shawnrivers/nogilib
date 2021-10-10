import type { Meta, Story } from '@storybook/react';
import { BaseButton, BaseButtonProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';

type TemplateProps = Pick<BaseButtonProps, 'disabled' | 'hideBorder'>;

export default {
  title: 'Components/Shared/Buttons/Base/BaseButton',
  decorators: [ThemeDecorator()],
  component: BaseButton,
} as Meta<TemplateProps>;

const Template: Story<TemplateProps> = props => {
  return (
    <BaseButton {...props}>
      <Typography variant="body1" element="span">
        Text
      </Typography>
    </BaseButton>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  hideBorder: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  hideBorder: false,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  disabled: false,
  hideBorder: true,
};
