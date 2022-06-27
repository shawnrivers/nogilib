import { Typography } from 'client/components/atoms/Typography';
import { StyledTypographyProps } from 'client/components/molecules/typography/types';

export const InfoItemLabel: React.FC<StyledTypographyProps> = props => {
  const { children, ...typographyProps } = props;

  return (
    <Typography
      variant="body2"
      as="span"
      bold
      capitalize
      textColor={{ on: 'onBackground', variant: 'standard' }}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};
