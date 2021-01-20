/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { Card } from 'client/components/atoms/Card';
import { DiscographyIcon } from 'client/components/atoms/icons/DiscographyIcon';
import { MembersIcon } from 'client/components/atoms/icons/MembersIcon';
import { SearchIcon } from 'client/components/atoms/icons/SearchIcon';
import { GatsbyImage } from 'client/components/atoms/images/GatsbyImage';

const SubHeading: React.FC = props => (
  <Typography
    variant="h3"
    element="h2"
    css={css`
      text-align: center;
      text-transform: capitalize;
      margin: ${commonStyles.spacing.l} 0 ${commonStyles.spacing.s};
    `}
  >
    {props.children}
  </Typography>
);

const SectionTextLink: React.FC<{
  to: string;
}> = props => (
  <TextLink
    to={props.to}
    typographyVariant="body2"
    textColor={{ on: 'onBackground', variant: 'variant0' }}
    css={css`
      text-transform: capitalize;
    `}
  >
    {props.children}
  </TextLink>
);

const HomePage: React.FC = () => {
  const { getTranslation } = useTranslations();
  const theme = useAppTheme();
  const heroImageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "design/preview.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

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
        <h1>
          <GatsbyImage
            fluid={heroImageData.file.childImageSharp.fluid}
            alt="NOGILIB"
            css={css`
              max-width: 80vw;
              width: 800px;
              height: 400px;
              border-radius: ${commonStyles.borderRadius.m};
              box-shadow: ${commonStyles.elevations[3].boxShadow};
            `}
          />
        </h1>
        <Typography
          variant="body1"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.xl};
            max-width: 30em;
          `}
        >
          {getTranslation(
            'NOGILIB is a web app for showing the information about Nogizaka46 in a user-friendly way.'
          )}
        </Typography>
        <SubHeading>{getTranslation('features')}</SubHeading>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            & > * {
              margin-top: ${commonStyles.spacing.s};
              margin-left: ${commonStyles.spacing.s};
              margin-right: ${commonStyles.spacing.s};
              min-width: max-content;
              width: 240px;
            }
          `}
        >
          <Card to={getDiscographyUrl()} padding="l" borderRadius="m">
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <DiscographyIcon
                width="40"
                height="40"
                fill={theme.colors.theme.onSurface.standard}
              />
              <Typography
                variant="body1"
                capitalize
                css={css`
                  margin-top: ${commonStyles.spacing.s};
                `}
              >
                {getTranslation('discography')}
              </Typography>
            </div>
          </Card>
          <Card to={getMembersUrl()} padding="l" borderRadius="m">
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <MembersIcon
                width="40"
                height="40"
                fill={theme.colors.theme.onSurface.standard}
              />
              <Typography
                variant="body1"
                capitalize
                css={css`
                  margin-top: ${commonStyles.spacing.s};
                `}
              >
                {getTranslation('members')}
              </Typography>
            </div>
          </Card>
          <Card to={getSearchUrl()} padding="l" borderRadius="m">
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <SearchIcon
                width="40"
                height="40"
                fill={theme.colors.theme.onSurface.standard}
              />
              <Typography
                variant="body1"
                capitalize
                css={css`
                  margin-top: ${commonStyles.spacing.s};
                `}
              >
                {getTranslation('search')}
              </Typography>
            </div>
          </Card>
        </div>
        <SubHeading>{getTranslation('developer')}</SubHeading>
        <SectionTextLink to="https://twitter.com/yuxiao_he">
          Yuxiao He (Usho Ka)
        </SectionTextLink>
        <SubHeading>{getTranslation('about')}</SubHeading>
        <SectionTextLink to="https://github.com/shawnrivers/nogilib">
          GitHub
        </SectionTextLink>
      </div>
    </PageContent>
  );
};

export default HomePage;
