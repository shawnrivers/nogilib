import { css } from '@emotion/react';
import {
  getColorVarName,
  getGlobalColorVarName,
  GlobalColorKey,
  ThemeColorKey,
} from 'client/styles/tokens/colors';

type RadioCheckIconProps = React.SVGAttributes<SVGElement> & {
  title?: string;
  isChecked?: boolean;
  unCheckColor?: ThemeColorKey;
  checkColor?: GlobalColorKey;
};

export const RadioCheckIcon: React.FC<RadioCheckIconProps> = props => {
  const {
    title,
    isChecked = true,
    unCheckColor = 'standard',
    checkColor = 'purple1',
    ...svgProps
  } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      css={css`
        fill: var(
          ${isChecked
            ? getGlobalColorVarName(checkColor)
            : getColorVarName('onBackground', unCheckColor)}
        );
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
            ? `var(${getGlobalColorVarName(checkColor)})`
            : 'none'};
        `}
      />
    </svg>
  );
};
