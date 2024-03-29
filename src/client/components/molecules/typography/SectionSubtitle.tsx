import { css } from '@emotion/react';
import { Typography } from 'client/components/atoms/Typography';
import { StyledTypographyProps } from 'client/components/molecules/typography/types';

export const SectionSubtitle: React.FC<StyledTypographyProps> = props => {
  const { children, as: element = 'h3', ...typographyProps } = props;

  return (
    <Typography
      variant="h5"
      as={element}
      fontFamily="sans"
      capitalize
      css={css`
        text-align: center;
      `}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};
