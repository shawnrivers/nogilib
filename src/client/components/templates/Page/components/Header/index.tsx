/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ArrowBackIcon } from 'client/components/atoms/icons/ArrowBack';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { BaseButton } from 'client/components/atoms/BaseButton';

export type HeaderProps = {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  titleTextTransform?: 'uppercase' | 'capitalize';
};

export const Header: React.FC<HeaderProps> = props => {
  const {
    title,
    subtitle,
    showBackButton = false,
    titleTextTransform = 'uppercase',
  } = props;
  const theme = useAppTheme();
  const handleGoBack = React.useCallback(() => window.history.back(), []);

  return (
    <header
      css={css`
        max-width: ${commonStyles.sizes.contentMaxWidth};
        margin: 0 auto;
      `}
    >
      {showBackButton && (
        <div
          css={css`
            display: flex;
            align-items: flex-end;
          `}
        >
          <BaseButton onClick={handleGoBack}>
            <ArrowBackIcon
              width={32}
              height={32}
              fill={theme.colors.theme.onBackground.standard}
            />
          </BaseButton>
          {subtitle !== undefined && (
            <Typography
              variant="h4"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
              css={css`
                margin-left: 0.5em;
                text-transform: capitalize;
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
          css={css`
            margin-top: 0.2em;
            text-transform: ${titleTextTransform ?? 'initial'};
          `}
        >
          {title}
        </Typography>
      )}
    </header>
  );
};
