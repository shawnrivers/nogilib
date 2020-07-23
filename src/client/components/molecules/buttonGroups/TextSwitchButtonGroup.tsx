import * as React from 'react';
import {
  TextSwitchButton,
  TextSwitchButtonProps,
} from 'client/components/atoms/buttons/TextSwitchButton';
import { Typography } from 'client/components/atoms/Typography';

type TextSwitchButtonGroupProps = Pick<
  TextSwitchButtonProps,
  'variant' | 'textOn'
> & {
  buttons: (Pick<TextSwitchButtonProps, 'isSwitchedOn' | 'onClick'> & {
    text: string;
  })[];
} & React.HTMLAttributes<HTMLDivElement>;

export const TextSwitchButtonGroup: React.FC<TextSwitchButtonGroupProps> = props => {
  const { variant, textOn = 'onBackground', buttons, ...restProps } = props;

  return (
    <div {...restProps}>
      {buttons.map((button, index) =>
        index === buttons.length - 1 ? (
          <TextSwitchButton
            key={button.text}
            variant={variant}
            textOn={textOn}
            isSwitchedOn={button.isSwitchedOn}
            onClick={button.onClick}
          >
            {button.text}
          </TextSwitchButton>
        ) : (
          <>
            <TextSwitchButton
              key={button.text}
              variant={variant}
              textOn={textOn}
              isSwitchedOn={button.isSwitchedOn}
              onClick={button.onClick}
            >
              {button.text}
            </TextSwitchButton>
            <Typography
              variant={variant}
              element="span"
              textColor={{
                on: textOn,
                variant: 'variant1',
              }}
            >
              {' '}
              /{' '}
            </Typography>
          </>
        )
      )}
    </div>
  );
};
