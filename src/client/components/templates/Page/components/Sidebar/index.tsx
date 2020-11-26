/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { motion } from 'framer-motion';
import { CloseIcon } from 'client/components/atoms/icons/CloseIcon';
import { useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { BaseButton } from 'client/components/atoms/BaseButton';
import {
  TextLink,
  TextLinkProps,
} from 'client/components/molecules/links/TextLink';
import { useTranslations } from 'client/hooks/useTranslations';
import { Divider } from 'client/components/atoms/Divider';

type SidebarItemProps = Omit<
  TextLinkProps,
  | 'typographyVariant'
  | 'textColor'
  | 'backgroundType'
  | 'backgroundColorVariant'
  | 'showUnderline'
>;

const SidebarItem: React.FC<SidebarItemProps> = props => {
  const { to, children, onClick, ...restProps } = props;

  return (
    <TextLink
      to={to}
      typographyVariant="h6"
      textColor={{ on: 'onSecondary', variant: 'standard' }}
      backgroundType="primary"
      backgroundColorVariant="standard"
      showUnderline={false}
      onClick={onClick}
      css={css`
        text-transform: uppercase;
      `}
      {...restProps}
    >
      {children}
    </TextLink>
  );
};

const NavigationItem: React.FC<Omit<SidebarItemProps, 'element'>> = props => {
  const { children, ...sidebarItemProps } = props;

  return (
    <li
      css={css`
        margin-top: 1em;
      `}
    >
      <SidebarItem {...sidebarItemProps}>{children}</SidebarItem>
    </li>
  );
};

const transition = { duration: 0.2 };

export type SidebarProps = {
  open: boolean;
  onClose: () => void;
  className?: string;
};

export const Sidebar: React.FC<SidebarProps> = props => {
  const theme = useAppTheme();
  const { getTranslation } = useTranslations();
  const { open, onClose } = props;

  return (
    <div className={props.className}>
      <motion.div
        initial={{ opacity: 0 }}
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
        initial={{ x: '-102vw' }}
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
      <motion.nav
        initial={{ x: '-102vw' }}
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
          tabIndex={open ? 0 : -1}
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
            <NavigationItem
              to={getDiscographyUrl()}
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              {getTranslation('discography')}
            </NavigationItem>
            <NavigationItem
              to={getMembersUrl()}
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              {getTranslation('members')}
            </NavigationItem>
            <NavigationItem
              to={getSearchUrl()}
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              {getTranslation('search')}
            </NavigationItem>
          </ul>
        </div>
        <Divider
          lineColor={{ on: 'onSecondary', variant: 'standard' }}
          css={css`
            margin-top: 2em;
            width: 40px;
          `}
        />
        <div
          css={css`
            text-align: center;
            margin-top: 2em;
          `}
        >
          <SidebarItem
            to="https://github.com/shawnrivers/nogilib"
            tabIndex={open ? 0 : -1}
            onClick={onClose}
          >
            {getTranslation('about')}
          </SidebarItem>
        </div>
      </motion.nav>
    </div>
  );
};
