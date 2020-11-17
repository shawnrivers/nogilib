/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { SpacingKey } from 'client/styles/tokens/spacing';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { ThemeColorVariants } from 'client/styles/tokens/colors';
import { useAppTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/tokens/borderRadius';
import { Surface, SurfaceProps } from 'client/components/atoms/Surface';
import { BaseLink } from 'client/components/atoms/BaseLink';

type CardContentProps = SurfaceProps & {
  borderRadius?: BorderRadiusKey;
  surfaceColor?: keyof ThemeColorVariants;
  padding?: SpacingKey;
  accessory?: React.ReactNode;
};

export const CardContent: React.FC<CardContentProps> = props => {
  const {
    children,
    borderRadius = 'l',
    elevation = componentElevationKey.componentOnBackground,
    surfaceColor = 'standard',
    padding = 'm',
    accessory,
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
        position: relative;
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
      {accessory !== undefined ? (
        <div
          css={css`
            position: absolute;
            top: 0;
            right: 0;
          `}
        >
          {accessory}
        </div>
      ) : undefined}
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
