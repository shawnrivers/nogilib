import type { Meta, Story } from '@storybook/react';
import { BaseAnchor } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';
import { Typography } from 'client/components/atoms/Typography';
import { BaseLinkProps } from 'client/components/v6/shared/buttons/base/BaseLink';

type TemplateProps = Pick<BaseLinkProps, 'disabled' | 'hideBorder'>;

export default {
  title: 'Components/Shared/Buttons/Base/BaseAnchor',
  decorators: [ThemeDecorator()],
  component: BaseAnchor,
} as Meta<TemplateProps>;

const Template: Story<TemplateProps> = props => {
  return (
    <BaseAnchor href="/" {...props}>
      <Typography variant="body1" element="span">
        Text
      </Typography>
    </BaseAnchor>
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
