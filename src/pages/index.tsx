/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { GatsbyImage } from 'client/components/atoms/images/GatsbyImage';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { useTranslations } from 'client/hooks/useTranslations';

const HomePage: React.FC = () => {
  const theme = useAppTheme();
  const { getTranslation } = useTranslations();

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
            width: 224px;
            height: 224px;
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
            max-width: 520px;
          `}
        >
          {getTranslation(
            'A web app for showing the information about Nogizaka46 in a user-friendly way'
          )}
        </Typography>
        <Typography
          variant="h3"
          element="h2"
          css={css`
            text-align: center;
            text-transform: capitalize;
            margin-top: ${commonStyles.spacing.l};
          `}
        >
          {getTranslation('features')}
        </Typography>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            & > * {
              margin-top: ${commonStyles.spacing.s};
            }
          `}
        >
          <TextLink
            to={getDiscographyUrl()}
            element="a"
            typographyVariant="body2"
            textColor={{ on: 'onBackground', variant: 'variant0' }}
            css={css`
              text-transform: capitalize;
            `}
          >
            {getTranslation('discography')}
          </TextLink>
          <TextLink
            to={getMembersUrl()}
            element="a"
            typographyVariant="body2"
            textColor={{ on: 'onBackground', variant: 'variant0' }}
            css={css`
              text-transform: capitalize;
            `}
          >
            {getTranslation('members')}
          </TextLink>
          <TextLink
            to={getSearchUrl()}
            element="a"
            typographyVariant="body2"
            textColor={{ on: 'onBackground', variant: 'variant0' }}
            css={css`
              text-transform: capitalize;
            `}
          >
            {getTranslation('search')}
          </TextLink>
        </div>
        <Typography
          variant="h3"
          element="h2"
          css={css`
            text-align: center;
            text-transform: capitalize;
            margin: ${commonStyles.spacing.l} 0 ${commonStyles.spacing.s};
          `}
        >
          {getTranslation('developer')}
        </Typography>
        <TextLink
          to="https://twitter.com/yuxiao_he"
          element="a"
          typographyVariant="body2"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            text-align: center;
          `}
        >
          Yuxiao He (Usho Ka)
        </TextLink>
      </div>
    </PageContent>
  );
};

export default HomePage;
