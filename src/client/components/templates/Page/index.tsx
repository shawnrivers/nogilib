/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  Header,
  HeaderProps,
} from 'client/components/templates/Page/components/Header';
import { NavigationBar } from 'client/components/templates/Page/components/NavigationBar';
import { useSidebar } from 'client/hooks/useSidebar';
import { commonStyles, useAppTheme } from 'client/styles/tokens';

export const PageContent: React.FC<HeaderProps> = props => {
  return (
    <div
      css={css`
        padding-top: calc(
          ${commonStyles.sizes.navigationBarHeight} + ${commonStyles.spacing.m} +
            env(safe-area-inset-top)
        );
        padding-left: ${commonStyles.spacing.m};
        padding-right: ${commonStyles.spacing.m};
        padding-bottom: calc(
          ${commonStyles.spacing.xxl} + env(safe-area-inset-bottom)
        );
      `}
    >
      {(props.title !== undefined || props.subtitle !== undefined) && (
        <Header {...props} />
      )}
      <main
        css={css`
          max-width: ${commonStyles.sizes.contentMaxWidth};
          margin: auto;
        `}
      >
        {props.children}
      </main>
    </div>
  );
};

export const Page: React.FC = props => {
  const theme = useAppTheme();
  const { toggleSidebar, SideBar } = useSidebar();

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background.standard};
        min-height: 100vh;

        & .large {
          display: inherit;
        }

        & .small {
          display: none;
        }

        @media screen and (max-width: ${theme.breakPoints.sp}) {
          & .large {
            display: none;
          }

          & .small {
            display: inherit;
          }
        }
      `}
    >
      <NavigationBar toggleSidebar={toggleSidebar} />
      <SideBar />
      {props.children}
    </div>
  );
};
