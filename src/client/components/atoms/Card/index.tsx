/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useAppTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/borderRadius';
import { ThemeColorVariants } from 'client/styles/colors';
import { SpacingKey } from 'client/styles/spacing';
import { Surface, SurfaceProps } from 'client/components/atoms/Surface';
import { componentElevationKey } from 'client/styles/elevation';
import { BaseLink } from 'client/components/atoms/BaseLink';

type CardContentProps = SurfaceProps & {
  borderRadius?: BorderRadiusKey;
  surfaceColor?: keyof ThemeColorVariants;
  padding?: SpacingKey;
};

export const CardContent: React.FC<CardContentProps> = props => {
  const {
    children,
    borderRadius = 'l',
    elevation = componentElevationKey.componentOnBackground,
    surfaceColor = 'standard',
    padding = 'm',
    ...restProps
  } = props;

  const theme = useAppTheme();

  return (
    <Surface
      backgroundColor={surfaceColor}
      elevation={elevation}
      css={css`
        border-radius: ${theme.borderRadius[borderRadius]};
        overflow: hidden;
      `}
      {...restProps}
    >
      <div
        css={css`
          padding: ${theme.spacing[padding]};
        `}
      >
        {children}
      </div>
    </Surface>
  );
};

export type CardProps = Omit<CardContentProps, 'isClickable'> & {
  to?: string;
};

export const Card: React.FC<CardProps> = props => {
  const { to, children, ...restProps } = props;

  return to ? (
    <BaseLink to={to}>
      <CardContent isClickable {...restProps}>
        {children}
      </CardContent>
    </BaseLink>
  ) : (
    <CardContent isClickable={false} {...restProps}>
      {children}
    </CardContent>
  );
};
