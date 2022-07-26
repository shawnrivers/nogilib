import { css } from '@emotion/react';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';

type TextTransform = 'uppercase' | 'capitalize' | 'initial';
type HeaderText = {
  text: string;
  lang?: string;
  textTransform?: TextTransform;
};
type HeaderProps = Partial<{
  title: HeaderText;
  titleCaption: HeaderText;
  subtitle: HeaderText;
}>;

const Header: React.FC<HeaderProps> = props => {
  const { title, titleCaption, subtitle } = props;

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
          as="p"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            margin-bottom: 0.1em;
            text-transform: ${subtitle.textTransform ?? 'uppercase'};
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
            margin-bottom: 0.1em;
            text-transform: ${title.textTransform ?? 'uppercase'};
            text-align: center;
          `}
          lang={title.lang}
        >
          {title.text}
        </Typography>
      )}
      {titleCaption !== undefined && (
        <Typography
          variant="body1"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            text-transform: ${titleCaption.textTransform ?? 'uppercase'};
            text-align: center;
          `}
          lang={titleCaption.lang}
        >
          {titleCaption.text}
        </Typography>
      )}
    </header>
  );
};

export const PAGE_CONTENT_ID = 'page-content';

export const PageContent: React.FC<
  HeaderProps & { children?: React.ReactNode }
> = props => {
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
