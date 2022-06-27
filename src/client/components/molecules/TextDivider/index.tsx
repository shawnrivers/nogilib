import { css } from '@emotion/react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { getColorVarName } from 'client/styles/tokens/colors';

export const TextDivider: React.FC<{
  text: React.ReactNode;
  element?: TypographyProps['as'];
}> = props => {
  const { element: Element = 'span' } = props;

  const dividerLineColorVarName = getColorVarName('onBackground', 'variant1');
  const dividerLineStyles = css`
    border-top: 2px solid var(${dividerLineColorVarName});
    width: 100%;
    margin-top: 0.2em;
  `;

  return (
    <Typography
      variant="h6"
      as="div"
      textColor={{ on: 'onBackground', variant: 'standard' }}
      css={css`
        display: grid;
        grid-template-columns: minmax(auto, 120px) minmax(max-content, auto) minmax(
            auto,
            120px
          );
        justify-content: center;
        align-items: center;
        margin: 1.5em auto;
      `}
    >
      <div
        css={css`
          ${dividerLineStyles};
          justify-self: end;
        `}
      />
      <Element
        css={css`
          margin: 0 1em;
          text-align: center;
          text-transform: capitalize;
          line-height: 1;
        `}
      >
        {props.text}
      </Element>
      <div
        css={css`
          ${dividerLineStyles};
          justify-self: start;
        `}
      />
    </Typography>
  );
};
