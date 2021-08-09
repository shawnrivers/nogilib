import { css } from '@emotion/core';
import { getColorVarName } from 'client/styles/tokens/colors';

type RadioIconProps = React.ComponentProps<'svg'> & {
  title?: string;
  isChecked?: boolean;
};

export const RadioIcon: React.FC<RadioIconProps> = props => {
  const { title, isChecked = true, ...svgProps } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      css={css`
        fill: var(${getColorVarName('onBackground', 'variant0')});
      `}
      {...svgProps}
    >
      {title && <title>{title}</title>}
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <circle
        cx="12"
        cy="12"
        r="5"
        css={css`
          fill: ${isChecked
            ? `var(${getColorVarName('onBackground', 'variant0')})`
            : 'none'};
        `}
      />
    </svg>
  );
};
