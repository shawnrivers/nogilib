/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/card/Card';
import { MemberImage } from 'client/components/atoms/image/MemberImage';

export const MemberCard: React.FC<
  CardProps & {
    profileImage: string;
    name: string;
  }
> = props => {
  const { profileImage, name, ...cardProps } = props;
  return (
    <Card {...cardProps}>
      <MemberImage src={profileImage} alt={name} />
      <Typography
        variant="em1"
        css={css`
          margin-top: 1em;
          line-height: 1.2;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        `}
      >
        {name}
      </Typography>
    </Card>
  );
};
