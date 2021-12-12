import { css } from '@emotion/react';
import {
  getColorVarName,
  ThemeColorsForeground,
  ThemeColorVariants,
} from 'client/styles/tokens/colors';

type DividerProps = React.HTMLAttributes<HTMLElement> & {
  lineColor?: {
    on: keyof ThemeColorsForeground;
    variant: keyof ThemeColorVariants;
  };
};

export const Divider: React.FC<DividerProps> = props => {
  const {
    lineColor = {
      on: 'onBackground',
      variant: 'variant0',
    },
    ...hrProps
  } = props;

  return (
    <hr
      css={css`
        border: 1px solid
          var(${getColorVarName(lineColor.on, lineColor.variant)});
      `}
      {...hrProps}
    />
  );
};
