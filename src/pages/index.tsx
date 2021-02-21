/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import Image from 'next/image';
import { PageContent } from 'client/components/layout/PageContent';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';
import {
  getDiscographyUrl,
  getMembersUrl,
  getSearchUrl,
} from 'client/utils/url';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { Card } from 'client/components/atoms/Card';
import { DiscographyIcon } from 'client/components/atoms/icons/DiscographyIcon';
import { MembersIcon } from 'client/components/atoms/icons/MembersIcon';
import { SearchIcon } from 'client/components/atoms/icons/SearchIcon';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { getColorVarName } from 'client/styles/tokens/colors';

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
    href={props.to}
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
    <>
      <PageHelmet />
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
            <Image
              src="/images/favicon-512.png"
              alt="NOGILIB"
              width={192}
              height={192}
              objectFit="cover"
              objectPosition="top"
              css={css`
                box-shadow: ${commonStyles.elevations[
                  componentElevationKey.componentOnBackground
                ].boxShadow};
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
            <Card href={getDiscographyUrl()} padding="l" borderRadius="m">
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
                  css={css`
                    fill: var(${getColorVarName('onSurface', 'standard')});
                  `}
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
            <Card href={getMembersUrl()} padding="l" borderRadius="m">
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
                  css={css`
                    fill: var(${getColorVarName('onSurface', 'standard')});
                  `}
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
            <Card href={getSearchUrl()} padding="l" borderRadius="m">
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
                  css={css`
                    fill: var(${getColorVarName('onSurface', 'standard')});
                  `}
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
    </>
  );
};

export default HomePage;
