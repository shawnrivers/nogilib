import { css } from '@emotion/react';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';

type HeaderProps = {
  title?: {
    text: string;
    lang?: string;
  };
  subtitle?: {
    text: string;
    lang?: string;
  };
  titleTextTransform?: 'uppercase' | 'capitalize' | 'initial';
};

const Header: React.FC<HeaderProps> = props => {
  const { title, subtitle, titleTextTransform = 'uppercase' } = props;

  return (
    <header
      css={css`
        max-width: ${commonStyles.sizes.contentMaxWidth};
        margin: 0 auto;
      `}
    >
      {subtitle !== undefined && (
        <Typography
          variant="h4"
          element="p"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
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

export const PAGE_CONTENT_ID = 'page-content';

export const PageContent: React.FC<HeaderProps> = props => {
  return (
    <div
      css={css`
        padding-top: calc(
          ${commonStyles.sizes.navigationBarHeight} + ${commonStyles.spacing.m} +
            env(safe-area-inset-top)
        );
        padding-left: calc(
          ${commonStyles.spacing.m} + env(safe-area-inset-left)
        );
        padding-right: calc(
          ${commonStyles.spacing.m} + env(safe-area-inset-right)
        );
        padding-bottom: calc(
          ${commonStyles.sizes.navigationBarHeight} +
            ${commonStyles.spacing.xxl} + env(safe-area-inset-bottom)
        );
      `}
      id={PAGE_CONTENT_ID}
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
