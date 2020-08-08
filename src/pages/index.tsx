/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { GatsbyImage } from 'client/components/atoms/image/GatsbyImage';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { TextLink } from 'client/components/atoms/buttons/TextLink';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';

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
          <TextLink to={getDiscographyUrl()} text="Discography" />
          <TextLink to={getMembersUrl()} text="Members" />
          <TextLink to={getSearchUrl()} text="Search" />
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
        <a
          href="https://twitter.com/yuxiao_he"
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.s};
          `}
        >
          <Typography
            variant="body2"
            element="span"
            textColor={{
              on: 'onBackground',
              variant: 'variant0',
            }}
          >
            Yuxiao He (Usho Ka)
          </Typography>
        </a>
      </div>
    </PageContent>
  );
};

export default HomePage;
