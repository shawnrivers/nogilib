import { css } from '@emotion/react';
import * as React from 'react';
// import Image from 'next/image';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/Card';
import { Position } from 'db/src/actors/Members/types';
import { commonStyles } from 'client/styles/tokens';
import { POSITION_STYLES } from 'client/styles/positionStyles';
import { getColorVarName } from 'client/styles/tokens/colors';
import { ImageUrl } from 'db/src/types/commons';
import { AspectRatioImage } from 'client/components/atoms/image/AspectRatioImage';

const PositionBadge: React.FC<{
  position: 'center' | 'fukujin';
}> = props => {
  const { position } = props;

  const positionStylesKey =
    position === 'center' ? POSITION_STYLES.center : POSITION_STYLES.fukujin;

  return (
    <div
      css={css`
        display: inline-block;
        border-radius: 0 0 0 ${commonStyles.borderRadius.s};
        box-sizing: border-box;
        border-color: var(${getColorVarName('onSurface', 'standard')});
        border-style: solid;
        border-top-width: 0;
        border-bottom-width: 2px;
        border-left-width: 2px;
        border-right-width: 0;
        background-color: var(
          ${getColorVarName(
            positionStylesKey.backgroundColor,
            positionStylesKey.backgroundColorVariant
          )}
        );
        width: 24px;
        height: 28px;
        text-align: center;
        box-shadow: ${commonStyles.elevations[1].boxShadow};
      `}
    >
      <Typography
        variant="body2"
        as="span"
        bold
        textColor={{
          on: positionStylesKey.foregroundColor,
          variant: positionStylesKey.textColorVariant,
        }}
        css={css`
          line-height: 28px;
        `}
      >
        {position === 'center' ? 'C' : 'F'}
      </Typography>
    </div>
  );
};

export type MemberCardProps = Omit<CardProps, 'children' | 'padding'> & {
  profileImage: ImageUrl;
  name: string;
  lang: string;
  width: number;
  nameElement?: TypographyProps['as'];
  textSize?: TypographyProps['variant'];
  position?: Position;
};

export const MemberCard: React.FC<MemberCardProps> = props => {
  const {
    profileImage,
    name,
    lang,
    width,
    nameElement = 'div',
    textSize = 'em2',
    borderRadius = 's',
    position,
    ...cardProps
  } = props;

  return (
    <Card
      borderRadius={borderRadius}
      padding="none"
      accessory={
        position === 'center' || position === 'fukujin' ? (
          <PositionBadge position={position} />
        ) : undefined
      }
      aria-label={name}
      css={css`
        width: ${width}px;
      `}
      {...cardProps}
    >
      <article>
        <AspectRatioImage
          src={profileImage.lg}
          srcSet={`${profileImage.sm}, ${profileImage.md} 2x, ${profileImage.lg} 3x`}
          alt=""
          role="presentation"
          aspectRatio={5 / 6}
          loading="lazy"
        />
        <Typography
          variant={textSize}
          as={nameElement}
          css={css`
            border-top: 3px solid
              var(${getColorVarName('onBackground', 'standard')});
            padding: 0.3em;
            overflow-x: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            text-transform: capitalize;
          `}
          lang={lang}
        >
          {name}
        </Typography>
      </article>
    </Card>
  );
};
