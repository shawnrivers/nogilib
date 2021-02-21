/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import { NavigationBar } from 'client/components/layout/Page/components/NavigationBar';
import { Sidebar } from 'client/components/layout/Page/components/Sidebar';
import { commonStyles } from 'client/styles/tokens';
import { BaseButtonRef } from 'client/components/atoms/BaseButton';
import { MENU_BUTTON_ID } from 'client/constants/ids';
import { Surface } from 'client/components/atoms/Surface';
import {
  componentElevationKey,
  ELEVATION_DARK,
} from 'client/styles/tokens/elevation';
import { Typography } from 'client/components/atoms/Typography';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { PAGE_CONTENT_ID } from 'client/components/layout/PageContent';

const SkipLink: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <a
      id="skip-link"
      href={`#${PAGE_CONTENT_ID}`}
      css={css`
        display: inline-block;
        top: ${commonStyles.spacing.xs};
        left: ${commonStyles.spacing.s};
        transform: translateY(-170%);
        opacity: 0;
        transition: all 0.3s;
        z-index: ${ELEVATION_DARK[componentElevationKey.skipLink].zIndex};
        position: absolute;

        &:focus {
          opacity: 1;
          transform: translateY(0%);
        }
      `}
    >
      <Surface
        backgroundColor="variant0"
        foregroundColor="standard"
        colorType="primary"
        elevation={componentElevationKey.skipLink}
        css={css`
          display: inline-block;
          border-radius: ${commonStyles.borderRadius.xs};
        `}
      >
        <div
          css={css`
            padding: ${commonStyles.spacing.s};
          `}
        >
          <Typography
            variant="body2"
            element="span"
            textColor={{ on: 'onPrimary', variant: 'standard' }}
          >
            {getTranslation('skip to content')}
          </Typography>
        </div>
      </Surface>
    </a>
  );
};

export const Page: React.FC = props => {
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
        min-height: 100vh;

        & .large {
          display: inherit;
        }

        & .small {
          display: none;
        }

        @media screen and (max-width: ${commonStyles.breakPoints.sp}) {
          & .large {
            display: none;
          }

          & .small {
            display: inherit;
          }
        }
      `}
    >
      <SkipLink />
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
