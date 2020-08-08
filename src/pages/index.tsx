/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { GatsbyImage } from 'client/components/atoms/image/GatsbyImage';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { TextCard } from 'client/components/molecules/card/TextCard';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { TextLink } from 'client/components/molecules/links/TextLink';

const HomePage: React.FC = () => {
  const theme = useAppTheme();

  return (
    <PageContent>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: ${commonStyles.spacing.l};
        `}
      >
        <GatsbyImage
          src="icon.png"
          css={css`
            border-radius: 50%;
            width: 256px;
            height: 256px;
            box-shadow: ${theme.elevation[4].boxShadow};
          `}
        />
        <Typography
          variant="h1"
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.l};
          `}
        >
          NOGILIB
        </Typography>
        <Typography
          variant="body1"
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.m};
          `}
        >
          A web app for showing the information about Nogizaka46 in a
          user-friendly way
        </Typography>
        <Typography
          variant="h3"
          element="h2"
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.l};
          `}
        >
          Features
        </Typography>
        <div
          css={css`
            display: grid;
            grid-auto-columns: max-content;
            grid-gap: ${commonStyles.spacing.s};
            margin-top: ${commonStyles.spacing.m};
          `}
        >
          <TextCard to={getDiscographyUrl()} text="Discography" />
          <TextCard to={getMembersUrl()} text="Members" />
          <TextCard to={getSearchUrl()} text="Search" />
        </div>
        <Typography
          variant="h3"
          element="h2"
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.l};
          `}
        >
          Author
        </Typography>
        <TextLink
          to="https://twitter.com/yuxiao_he"
          element="a"
          typographyVariant="body2"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.s};
          `}
        >
          Yuxiao He (Usho Ka)
        </TextLink>
      </div>
    </PageContent>
  );
};

export default HomePage;
