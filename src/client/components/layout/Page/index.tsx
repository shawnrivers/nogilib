import { css } from '@emotion/react';
import * as React from 'react';
import { TopNavigationBar } from 'client/components/layout/Page/components/TopNavigationBar';
import { commonStyles } from 'client/styles/tokens';
import { Surface } from 'client/components/atoms/Surface';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { Typography } from 'client/components/atoms/Typography';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { PAGE_CONTENT_ID } from 'client/components/layout/PageContent';
import { BottomNavigationBar } from 'client/components/layout/Page/components/BottomNavigationBar';
import { capitalizeFirstLetter } from 'utils/string';

const SkipLink: React.FC = () => {
  const { getTranslation } = useTranslations();

  return (
    <a
      id="skip-link"
      href={`#${PAGE_CONTENT_ID}`}
      css={css`
        top: ${commonStyles.spacing.xs};
        left: calc(${commonStyles.spacing.s} + env(safe-area-inset-left));
        transform: translateY(-170%);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        z-index: ${commonStyles.elevations[componentElevationKey.skipLink]
          .zIndex};
        position: absolute;

        &.focus-visible {
          opacity: 1;
          transform: translateY(0%);
          outline: 2px solid transparent;
          outline-offset: 2px;
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
          overflow: hidden;
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
            {capitalizeFirstLetter(getTranslation('skip to content'))}
          </Typography>
        </div>
      </Surface>
    </a>
  );
};

export const Page: React.FC = props => {
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
      <TopNavigationBar />
      <BottomNavigationBar />
      {props.children}
    </div>
  );
};
