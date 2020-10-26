/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/Card';
import { GridMemberImage } from 'client/components/atoms/images/GridMemberImage';

export type MemberCardProps = CardProps & {
  profileImage: string;
  name: string;
  lang: string;
  nameElement?: TypographyProps['element'];
  textSize?: TypographyProps['variant'];
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
    ...cardProps
  } = props;

  return (
    <Card borderRadius={borderRadius} padding={padding} {...cardProps}>
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
