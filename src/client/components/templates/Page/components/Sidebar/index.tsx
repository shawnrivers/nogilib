/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { motion } from 'framer-motion';
import { CloseIcon } from 'client/components/atoms/icons/CloseIcon';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { componentElevationKey } from 'client/styles/elevation';
import { Divider } from 'client/components/atoms/Divider';
import { BaseButton } from 'client/components/atoms/BaseButton';
import {
  TextLink,
  TextLinkProps,
} from 'client/components/molecules/links/TextLink';

const NavigationItem: React.FC<Omit<TextLinkProps, 'element'>> = props => {
  const { to, children, onClick, ...restProps } = props;

  return (
    <li>
      <TextLink
        to={to}
        element="Link"
        typographyVariant="h6"
        textColor={{ on: 'onSecondary', variant: 'standard' }}
        backgroundType="primary"
        backgroundColorVariant="standard"
        showUnderline={false}
        onClick={onClick}
        css={css`
          margin-top: 1em;
          text-transform: uppercase;
        `}
        {...restProps}
      >
        {children}
      </TextLink>
    </li>
  );
};

const transition = { duration: 0.2 };

export const Sidebar: React.FC<{
  open: boolean;
  onClose: () => void;
}> = props => {
  const theme = useAppTheme();
  const { open, onClose } = props;

  return (
    <div>
      <motion.div
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={transition}
        css={css`
          background-color: rgba(65, 65, 65, 0.8);
          height: 100vh;
          opacity: 0;
          pointer-events: none;
          position: fixed;
          width: 100vw;
          z-index: ${theme.elevation[componentElevationKey.sidebar].zIndex};
        `}
      />
      <motion.div
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { x: '0' },
          closed: { x: '-102vw' },
        }}
        transition={transition}
        onClick={onClose}
        css={css`
          height: 100vh;
          position: fixed;
          width: 100vw;
          z-index: ${theme.elevation[componentElevationKey.sidebar].zIndex};
        `}
      />
      <motion.div
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { x: '0' },
          closed: { x: '-102vw' },
        }}
        transition={transition}
        css={css`
          background-color: ${theme.colors.theme.secondary.variant0};
          box-shadow: ${theme.elevation[componentElevationKey.sidebar]
            .boxShadow};
          z-index: ${theme.elevation[componentElevationKey.sidebar].zIndex};
          width: 70vw;
          height: 100vh;
          max-width: 400px;
          top: 0;
          left: 0;
          padding-top: env(safe-area-inset-top);
          position: fixed;
          overflow: hidden;
          transform: translateX(-102vw);
        `}
      >
        <BaseButton
          aria-label="close"
          onClick={onClose}
          backgroundType="primary"
          backgroundColorVariant="standard"
          css={css`
            margin: ${theme.spacing.m};
          `}
        >
          <CloseIcon fill={theme.colors.theme.onSecondary.standard} />
        </BaseButton>
        <div
          css={css`
            text-align: center;
            margin: ${theme.spacing.l} auto;
          `}
        >
          <ul>
            <NavigationItem to={getDiscographyUrl()} onClick={onClose}>
              Discography
            </NavigationItem>
            <NavigationItem to={getMembersUrl()} onClick={onClose}>
              Members
            </NavigationItem>
            <NavigationItem to={getSearchUrl()} onClick={onClose}>
              Search
            </NavigationItem>
          </ul>
          <Divider
            lineColor={{
              on: 'onSecondary',
              variant: 'variant0',
            }}
            css={css`
              margin: ${commonStyles.spacing.l} auto;
              width: 24px;
            `}
          />
        </div>
      </motion.div>
    </div>
  );
};
