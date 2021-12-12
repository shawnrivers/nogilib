import { css } from '@emotion/react';
import * as React from 'react';
// import Image from 'next/image';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/Card';
import { Position } from 'server/actors/Members/types';
import { commonStyles } from 'client/styles/tokens';
import { BORDER_RADIUS } from 'client/styles/tokens/borderRadius';
import { POSITION_STYLES } from 'client/styles/positionStyles';
import { getColorVarName } from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import { AspectRatioImage } from 'client/components/atoms/image/AspectRatioImage';

const PositionBadge: React.FC<{
  position: 'center' | 'fukujin';
  borderRadius: MemberCardProps['borderRadius'];
}> = props => {
  const { position, borderRadius } = props;

  const positionStylesKey =
    position === 'center' ? POSITION_STYLES.center : POSITION_STYLES.fukujin;

  const badgeStyles = React.useMemo(() => {
    const backgroundColorVarName = getColorVarName(
      positionStylesKey.backgroundColor,
      positionStylesKey.backgroundColorVariant
    );

    const borderRadiusStyle = `0
    ${BORDER_RADIUS[borderRadius ?? 's']} 0
    ${BORDER_RADIUS.s}`;

    const borderColorVarName = getColorVarName(
      positionStylesKey.foregroundColor,
      positionStylesKey.textColorVariant
    );

    return css`
      display: inline-block;
      border-radius: ${borderRadiusStyle};
      border-width: 2px;
      border-style: solid;
      border-color: var(${borderColorVarName});
      background-color: var(${backgroundColorVarName});
      width: 24px;
      height: 28px;
      text-align: center;
      box-shadow: ${commonStyles.elevations[1].boxShadow};
    `;
  }, [positionStylesKey, borderRadius]);

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

export type MemberCardProps = Omit<CardProps, 'children'> & {
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
    padding = 's',
    position,
    ...cardProps
  } = props;

  return (
    <Card
      borderRadius={borderRadius}
      padding={padding}
      accessory={
        position === 'center' || position === 'fukujin' ? (
          <PositionBadge position={position} borderRadius={borderRadius} />
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
            border-radius: ${commonStyles.borderRadius[borderRadius]};
          `}
          loading="lazy"
        />
        <Typography
          variant={textSize}
          element={nameElement}
          css={css`
            margin-top: 0.6em;
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
