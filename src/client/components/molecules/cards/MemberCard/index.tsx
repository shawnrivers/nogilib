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

  const badgeStyles = React.useMemo(() => {
    const backgroundColorVarName = getColorVarName(
      positionStylesKey.backgroundColor,
      positionStylesKey.backgroundColorVariant
    );

    const borderRadiusStyle = `0 0 0 ${commonStyles.borderRadius.s}`;

    const borderColorVarName = getColorVarName(
      positionStylesKey.foregroundColor,
      positionStylesKey.textColorVariant
    );

    return css`
      display: inline-block;
      border-radius: ${borderRadiusStyle};
      /* box-sizing: border-box; */
      border-color: var(${borderColorVarName});
      border-style: solid;
      border-top-width: 0;
      border-bottom-width: 2px;
      border-left-width: 2px;
      border-right-width: 0;
      background-color: var(${backgroundColorVarName});
      width: 24px;
      height: 28px;
      text-align: center;
      box-shadow: ${commonStyles.elevations[1].boxShadow};
    `;
  }, [positionStylesKey]);

  return (
    <div css={badgeStyles}>
      <Typography
        variant="body2"
        element="span"
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
  nameElement?: TypographyProps['element'];
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
          css={css`
            /* border-radius: ${commonStyles.borderRadius[borderRadius]}; */
          `}
          loading="lazy"
        />
        <Typography
          variant={textSize}
          element={nameElement}
          css={css`
            padding: 0.5em 0.4em 0.4em;
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
