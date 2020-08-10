import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { StyledTypographyProps } from 'client/components/molecules/typography/types';

export const InfoItemValue: React.FC<StyledTypographyProps> = props => {
  const { children, ...typographyProps } = props;

  return (
    <Typography
      variant="body2"
      element="span"
      textColor={{ on: 'onBackground', variant: 'variant0' }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};
