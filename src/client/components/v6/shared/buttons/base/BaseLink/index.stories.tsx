import type { Meta, Story } from '@storybook/react';
import { BaseLink, BaseLinkProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';

type TemplateProps = Pick<BaseLinkProps, 'disabled' | 'hideBorder'>;

export default {
  title: 'Components/Shared/Buttons/Base/BaseLink',
  decorators: [ThemeDecorator()],
  component: BaseLink,
} as Meta<TemplateProps>;

const Template: Story<TemplateProps> = props => {
  return (
    <BaseLink href="/" {...props}>
      <Typography variant="body1" element="span">
        Text
      </Typography>
    </BaseLink>
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
