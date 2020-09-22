/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import {
  TextSwitchLink,
  TextSwitchLinkProps,
} from 'client/components/molecules/links/TextSwitchLink';

type TextSwitchLinkGroupProps = Omit<
  TextSwitchLinkProps,
  'to' | 'isSwitchedOn'
> & {
  links: (Pick<TextSwitchLinkProps, 'isSwitchedOn' | 'to'> & {
    text: React.ReactNode;
  })[];
};

export const TextSwitchLinkGroup: React.FC<TextSwitchLinkGroupProps> = props => {
  const { links, ...TextSwitchLinkProps } = props;

  return (
    <nav
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      `}
    >
      {links.map((link, index) =>
        index === links.length - 1 ? (
          <TextSwitchLink
            key={index}
            isSwitchedOn={link.isSwitchedOn}
            to={link.to}
            {...TextSwitchLinkProps}
          >
            {link.text}
          </TextSwitchLink>
        ) : (
          <React.Fragment key={index}>
            <TextSwitchLink
              isSwitchedOn={link.isSwitchedOn}
              to={link.to}
              {...TextSwitchLinkProps}
            >
              {link.text}
            </TextSwitchLink>
            <Typography
              variant={TextSwitchLinkProps.variant}
              element="span"
              textColor={{
                on: TextSwitchLinkProps.textOn ?? 'onBackground',
                variant: 'variant1',
              }}
            >
              {' '}
              /{' '}
            </Typography>
          </React.Fragment>
        )
      )}
    </nav>
  );
};
