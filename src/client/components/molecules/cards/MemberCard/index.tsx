/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/Card';
import { GridMemberImage } from 'client/components/atoms/images/GridMemberImage';
import { PositionType } from 'server/actors/Members/constants/position';
import { useAppTheme } from 'client/styles/tokens';
import { BORDER_RADIUS } from 'client/styles/borderRadius';
import { POSITION_STYLES } from 'client/features/Member/constants/positionStyles';

const PositionBadge: React.FC<{
  position: PositionType.Center | PositionType.Fukujin;
  borderRadius: MemberCardProps['borderRadius'];
}> = props => {
  const { position, borderRadius } = props;
  const theme = useAppTheme();

  const positionStylesKey =
    position === PositionType.Center
      ? POSITION_STYLES.center
      : POSITION_STYLES.fukujin;

  const badgeStyles = React.useMemo(() => {
    const backgroundColor =
      theme.colors.theme[positionStylesKey.backgroundColor][
        positionStylesKey.backgroundColorVariant
      ];

    const borderRadiusStyle = `0
    ${BORDER_RADIUS[borderRadius ?? 's']} 0
    ${BORDER_RADIUS.s}`;

    const borderColor =
      theme.colors.theme[positionStylesKey.foregroundColor][
        positionStylesKey.textColorVariant
      ];

    return css`
      display: inline-block;
      border-radius: ${borderRadiusStyle};
      border-width: 2px;
      border-style: solid;
      border-color: ${borderColor};
      background-color: ${backgroundColor};
      width: 24px;
      height: 28px;
      text-align: center;
      box-shadow: ${theme.elevation[1].boxShadow};
    `;
  }, [positionStylesKey, borderRadius, theme]);

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
        {position === PositionType.Center ? 'C' : 'F'}
      </Typography>
    </div>
  );
};

export type MemberCardProps = CardProps & {
  profileImage: string;
  name: string;
  lang: string;
  nameElement?: TypographyProps['element'];
  textSize?: TypographyProps['variant'];
  position?: PositionType;
};

export const MemberCard: React.FC<MemberCardProps> = props => {
  const {
    profileImage,
    name,
    lang,
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
        position === PositionType.Center ||
        position === PositionType.Fukujin ? (
          <PositionBadge position={position} borderRadius={borderRadius} />
        ) : undefined
      }
      {...cardProps}
    >
      <article>
        <GridMemberImage src={profileImage} alt="" />
        <Typography
          variant={textSize}
          element={nameElement}
          css={css`
            margin-top: 0.8em;
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
