/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ArrowBackIcon } from 'client/components/atoms/icons/ArrowBack';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';

export type HeaderProps = {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
};

export const Header: React.FC<HeaderProps> = props => {
  const { title, subtitle, showBackButton = false } = props;
  const handleGoBack = React.useCallback(() => window.history.back(), []);

  return (
    <header
      css={css`
        max-width: ${commonStyles.sizes.contentMaxWidth};
        margin: auto;
      `}
    >
      {showBackButton && (
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <button onClick={handleGoBack}>
            <ArrowBackIcon width={20} height={20} />
          </button>
          {subtitle !== undefined && (
            <Typography
              variant="h2"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
              css={css`
                margin-left: 0.5em;
              `}
            >
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      {title !== undefined && (
        <Typography
          variant="h1"
          textColor={{ on: 'onBackground', variant: 'standard' }}
        >
          {title}
        </Typography>
      )}
    </header>
  );
};
