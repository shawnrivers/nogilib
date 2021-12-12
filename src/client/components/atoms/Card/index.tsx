import { css } from '@emotion/react';
import { SpacingKey } from 'client/styles/tokens/spacing';
import {
  componentElevationKey,
  getElevationWhiteOverlayTransparencyVarName,
} from 'client/styles/tokens/elevation';
import { commonStyles } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/tokens/borderRadius';
import { Surface, SurfaceProps } from 'client/components/atoms/Surface';
import { BaseLink, BaseLinkProps } from 'client/components/atoms/BaseLink';

type CardContentProps = SurfaceProps & {
  borderRadius?: BorderRadiusKey;
  padding?: SpacingKey;
  accessory?: React.ReactNode;
};

export const CardContent: React.FC<CardContentProps> = props => {
  const {
    borderRadius = 'l',
    padding = 'm',
    elevation = componentElevationKey.componentOnBackground,
    accessory,
    children,
    ...restProps
  } = props;

  return (
    <Surface
      elevation={elevation}
      css={css`
        border-radius: ${commonStyles.borderRadius[borderRadius]};
        position: relative;
        overflow: hidden;
      `}
      {...restProps}
    >
      <div
        css={css`
          padding: ${commonStyles.spacing[padding]};
        `}
      >
        {children}
      </div>
      {accessory !== undefined && (
        <div
          css={css`
            position: absolute;
            top: 0;
            right: 0;
          `}
        >
          {accessory}
        </div>
      )}
    </Surface>
  );
};

export type CardProps = Omit<CardContentProps, 'isClickable'> & BaseLinkProps;

export const Card: React.FC<CardProps> = props => {
  const {
    borderRadius,
    padding,
    accessory,
    children,
    foregroundColor,
    backgroundColor,
    colorType,
    elevation,
    className,
    ...linkProps
  } = props;

  const isClickable = 'href' in props && props.href !== undefined;

  return isClickable ? (
    <BaseLink
      css={css`
        &.focus-visible {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        &:active > * {
          box-shadow: ${commonStyles.elevations[
            componentElevationKey.pressedComponentOnBackground
          ].boxShadow};
        }

        &.focus-visible > * {
          box-shadow: ${commonStyles.elevations[
            componentElevationKey.elevatedComponentOnBackground
          ].boxShadow};
        }

        &:active > * > * {
          background-color: var(
            ${getElevationWhiteOverlayTransparencyVarName(
              componentElevationKey.pressedComponentOnBackground
            )}
          );
        }

        &.focus-visible > * > * {
          background-color: var(
            ${getElevationWhiteOverlayTransparencyVarName(
              componentElevationKey.elevatedComponentOnBackground
            )}
          );
        }

        @media (hover: hover) and (pointer: fine) {
          &:hover > * {
            box-shadow: ${commonStyles.elevations[
              componentElevationKey.elevatedComponentOnBackground
            ].boxShadow};
          }

          &:hover > * > * {
            background-color: var(
              ${getElevationWhiteOverlayTransparencyVarName(
                componentElevationKey.elevatedComponentOnBackground
              )}
            );
          }
        }
      `}
      {...linkProps}
    >
      <CardContent
        borderRadius={borderRadius}
        padding={padding}
        accessory={accessory}
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
        colorType={colorType}
        elevation={elevation}
        isClickable={isClickable}
        className={className}
      >
        {children}
      </CardContent>
    </BaseLink>
  ) : (
    <CardContent
      borderRadius={borderRadius}
      padding={padding}
      accessory={accessory}
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
      colorType={colorType}
      elevation={elevation}
      isClickable={isClickable}
      className={className}
    >
      {children}
    </CardContent>
  );
};
