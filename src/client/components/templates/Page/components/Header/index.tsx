/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ArrowBackIcon } from 'client/components/atoms/icons/ArrowBack';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { BaseButton } from 'client/components/atoms/BaseButton';
import { useTranslations } from 'client/i18n/hooks/useTranslations';

export type HeaderProps = {
  title?: {
    text: string;
    lang: string;
  };
  subtitle?: {
    text: string;
    lang: string;
  };
  showBackButton?: boolean;
  titleTextTransform?: 'uppercase' | 'capitalize' | 'initial';
};

export const Header: React.FC<HeaderProps> = props => {
  const {
    title,
    subtitle,
    showBackButton = false,
    titleTextTransform = 'uppercase',
  } = props;
  const theme = useAppTheme();
  const { getTranslation } = useTranslations();

  const handleGoBack = React.useCallback(() => window.history.back(), []);

  return (
    <header
      css={css`
        max-width: ${commonStyles.sizes.contentMaxWidth};
        margin: 0 auto;
      `}
    >
      {showBackButton && (
        <nav
          aria-label={getTranslation('back')}
          css={css`
            display: flex;
            align-items: flex-end;
          `}
        >
          <BaseButton
            aria-label={getTranslation('back')}
            onClick={handleGoBack}
          >
            <ArrowBackIcon
              width={32}
              height={32}
              fill={theme.colors.theme.onBackground.standard}
            />
          </BaseButton>
        </nav>
      )}
      {subtitle !== undefined && (
        <Typography
          variant="h4"
          element="p"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            margin-left: 0.5em;
            text-transform: capitalize;
            text-align: center;
          `}
          lang={subtitle.lang}
        >
          {subtitle.text}
        </Typography>
      )}
      {title !== undefined && (
        <Typography
          variant="h1"
          textColor={{ on: 'onBackground', variant: 'standard' }}
          css={css`
            margin-top: 0.2em;
            text-transform: ${titleTextTransform ?? 'initial'};
            text-align: center;
          `}
          lang={title.lang}
        >
          {title.text}
        </Typography>
      )}
    </header>
  );
};
