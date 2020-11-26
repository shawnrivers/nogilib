/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  Header,
  HeaderProps,
} from 'client/components/templates/Page/components/Header';
import { NavigationBar } from 'client/components/templates/Page/components/NavigationBar';
import { Sidebar } from 'client/components/templates/Page/components/Sidebar';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { BaseButtonRef } from 'client/components/atoms/BaseButton';
import { MENU_BUTTON_ID } from 'client/constants/ids';

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
  const [isSidebarOpen, toggleSidebar] = React.useState(false);
  const handleOpenSidebar = React.useCallback(() => {
    toggleSidebar(true);
  }, [toggleSidebar]);
  const handleCloseSidebar = React.useCallback(() => {
    toggleSidebar(false);
  }, [toggleSidebar]);

  const menuButtonRef = React.useRef<BaseButtonRef>(null);

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
      <NavigationBar
        onOpenSidebar={handleOpenSidebar}
        menuButtonRef={menuButtonRef}
      />
      <Sidebar
        open={isSidebarOpen}
        onClose={handleCloseSidebar}
        className="small"
        menuButtonRef={menuButtonRef}
        id={MENU_BUTTON_ID}
      />
      {props.children}
    </div>
  );
};
