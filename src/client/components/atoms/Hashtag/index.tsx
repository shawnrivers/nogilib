import { css } from '@emotion/react';
import { commonStyles } from 'client/styles/tokens';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { SpacingKey } from 'client/styles/tokens/spacing';
import { getColorVarName } from 'client/styles/tokens/colors';

export type HashtagProps = Omit<TypographyProps, 'variant' | 'element'> & {
  spacing?: SpacingKey;
  text?: string;
};

export const Hashtag: React.FC<HashtagProps> = props => {
  const {
    textColor = { on: 'onBackground', variant: 'variant0' },
    spacing = 'xs',
    text = '',
    ...restProps
  } = props;

  return text !== '' ? (
    <Typography
      variant="body2"
      element="span"
      textColor={textColor}
      css={css`
        border-radius: ${commonStyles.borderRadius.xl};
        border: 2px solid
          var(${getColorVarName(textColor.on, textColor.variant)});
        padding: ${commonStyles.spacing.xxs} ${commonStyles.spacing[spacing]};
        width: max-content;
        white-space: nowrap;
        line-height: 1;
      `}
      {...restProps}
    >
      #{text}
    </Typography>
  ) : null;
};
