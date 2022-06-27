import { css } from '@emotion/react';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import {
  TextSwitchLink,
  TextSwitchLinkProps,
} from 'client/components/molecules/links/TextSwitchLink';
import { useTranslations } from 'client/i18n/hooks/useTranslations';

type TextSwitchLinkGroupProps = Omit<
  TextSwitchLinkProps,
  'href' | 'isSwitchedOn'
> & {
  links: (Pick<TextSwitchLinkProps, 'isSwitchedOn' | 'href'> & {
    text: React.ReactNode;
  })[];
};

export const TextSwitchLinkGroup: React.FC<
  TextSwitchLinkGroupProps
> = props => {
  const { links, ...TextSwitchLinkProps } = props;
  const { getTranslation } = useTranslations();

  return (
    <nav
      aria-label={getTranslation('tab')}
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
            href={link.href}
            {...TextSwitchLinkProps}
          >
            {link.text}
          </TextSwitchLink>
        ) : (
          <React.Fragment key={index}>
            <TextSwitchLink
              isSwitchedOn={link.isSwitchedOn}
              href={link.href}
              {...TextSwitchLinkProps}
            >
              {link.text}
            </TextSwitchLink>
            <Typography
              variant={TextSwitchLinkProps.variant}
              as="span"
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
