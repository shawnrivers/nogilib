/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { GatsbyImage } from 'client/components/atoms/images/GatsbyImage';
import { commonStyles } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/urls';
import {
  TextLink,
  TextLinkProps,
} from 'client/components/molecules/links/TextLink';
import { useTranslations } from 'client/hooks/useTranslations';

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
  element: TextLinkProps['element'];
}> = props => (
  <TextLink
    to={props.to}
    element={props.element}
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
            width: 224px;
            height: 224px;
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
          textColor={{ on: 'onBackground', variant: 'variant0' }}
          css={css`
            text-align: center;
            margin-top: ${commonStyles.spacing.m};
            max-width: 30em;
          `}
        >
          {getTranslation(
            'A web app for showing the information about Nogizaka46 in a user-friendly way'
          )}
        </Typography>
        <SubHeading>{getTranslation('features')}</SubHeading>
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
          <SectionTextLink to={getDiscographyUrl()} element="Link">
            {getTranslation('discography')}
          </SectionTextLink>
          <SectionTextLink to={getMembersUrl()} element="Link">
            {getTranslation('members')}
          </SectionTextLink>
          <SectionTextLink to={getSearchUrl()} element="Link">
            {getTranslation('search')}
          </SectionTextLink>
        </div>
        <SubHeading>{getTranslation('developer')}</SubHeading>
        <SectionTextLink to="https://twitter.com/yuxiao_he" element="a">
          Yuxiao He (Usho Ka)
        </SectionTextLink>
        <SubHeading>{getTranslation('about')}</SubHeading>
        <SectionTextLink
          to="https://github.com/shawnrivers/nogilib"
          element="a"
        >
          GitHub
        </SectionTextLink>
      </div>
    </PageContent>
  );
};

export default HomePage;
