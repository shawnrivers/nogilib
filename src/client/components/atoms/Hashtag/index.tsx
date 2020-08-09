/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { SpacingKey } from 'client/styles/spacing';

export const Hashtag: React.FC<{
  textColor?: TypographyProps['textColor'];
  spacing?: SpacingKey;
}> = props => {
  const theme = useAppTheme();
  const {
    textColor = { on: 'onBackground', variant: 'variant0' },
    spacing = 'xs',
    children,
    ...restProps
  } = props;

  return (
    <Typography
      variant="body2"
      element="span"
      textColor={textColor}
      css={css`
        border-radius: ${theme.borderRadius.xl};
        border: 1px solid ${theme.colors.theme[textColor.on][textColor.variant]};
        padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing[spacing]};
        width: max-content;
        white-space: nowrap;
      `}
      {...restProps}
    >
      #{children}
    </Typography>
  );
};
