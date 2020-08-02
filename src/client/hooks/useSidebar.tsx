/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { CloseIcon } from 'client/components/atoms/icons/CloseIcon';
import { useAppTheme } from 'client/styles/tokens';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { componentElevationKey } from 'client/styles/elevation';

const backgroundFade = {
  opened: { opacity: 1, transition: { duration: 0.2 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const sideBarFade = {
  opened: { x: '0', transition: { duration: 0.2 } },
  closed: { x: '-102vw', transition: { duration: 0.2 } },
};

const NavigationItem: React.FC<
  Omit<TypographyProps, 'variant'> & {
    onClick: () => void;
    to: string;
  }
> = props => {
  const { to, onClick, children, ...typographyProps } = props;

  return (
    <Typography
      variant="h6"
      element="li"
      textColor={{
        on: 'onSecondary',
        variant: 'standard',
      }}
      css={css`
        margin-top: 1em;
        text-transform: uppercase;
      `}
      {...typographyProps}
    >
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </Typography>
  );
};

const Divider: React.FC = () => {
  const theme = useAppTheme();

  return (
    <hr
      css={css`
        border: 1px solid ${theme.colors.theme.onSecondary.variant0};
        margin: ${theme.spacing.l} auto;
        width: 24px;
      `}
    />
  );
};

export const useSidebar = () => {
  const [opened, toggle] = React.useState(false);
  const closeSidebar = React.useCallback(() => toggle(false), [toggle]);
  const toggleSidebar = React.useCallback(() => toggle(!opened), [
    toggle,
    opened,
  ]);

  const theme = useAppTheme();

  return {
    toggleSidebar,
    SideBar: () => (
      <>
        <motion.div
          animate={opened ? 'opened' : 'closed'}
          variants={backgroundFade}
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
          animate={opened ? 'opened' : 'closed'}
          variants={sideBarFade}
          onClick={closeSidebar}
          css={css`
            height: 100vh;
            position: fixed;
            width: 100vw;
            z-index: ${theme.elevation[componentElevationKey.sidebar].zIndex};
          `}
        />
        <motion.div
          animate={opened ? 'opened' : 'closed'}
          variants={sideBarFade}
          css={css`
            background-color: ${theme.colors.theme.secondary.variant0};
            box-shadow: ${theme.elevation[8].boxShadow};
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
          <button
            aria-label="close"
            onClick={closeSidebar}
            css={css`
              margin: ${theme.spacing.m};
            `}
          >
            <CloseIcon fill={theme.colors.theme.onSecondary.standard} />
          </button>
          <div
            css={css`
              text-align: center;
              margin: ${theme.spacing.l} auto;
            `}
          >
            <ul>
              <NavigationItem to={getDiscographyUrl()} onClick={closeSidebar}>
                Discography
              </NavigationItem>
              <NavigationItem to={getMembersUrl()} onClick={closeSidebar}>
                Members
              </NavigationItem>
              <NavigationItem to={getSearchUrl()} onClick={closeSidebar}>
                Search
              </NavigationItem>
            </ul>
            <Divider />
          </div>
        </motion.div>
      </>
    ),
  };
};
