/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { LocalizedList } from 'client/components/atoms/locales/LocalizedList';
import { PositionBadge } from 'client/features/Member/components/PositionBadge';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { PositionType } from 'server/actors/Members/constants/position';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { useAppContext } from 'client/hooks/useAppContext';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { useAppTheme } from 'client/styles/tokens';
import { GridMemberImage } from 'client/components/atoms/images/GridMemberImage';
import { useTranslations } from 'client/hooks/useTranslations';
import { MemberPageProps } from 'client/features/Member/container';
import { useIntl } from 'client/hooks/useIntl';
import { PositionCounter } from 'client/features/Member/components/PositionCounter';
import { TextLink } from 'client/components/molecules/links/TextLink';

export const MemberPage: React.FC<MemberPageProps> = props => {
  const {
    name,
    names,
    profileImage,
    sites,
    join,
    graduation,
    birthday,
    height,
    bloodType,
    origin,
    units,
    corps,
    photoAlbums,
    shouldShowPositionCounter,
    positionsHistory,
    positionsCounter,
    gallery,
  } = props;
  const { language } = useAppContext();
  const { Translation } = useTranslations();
  const theme = useAppTheme();
  const { formatDate } = useIntl();

  useScrollRestoration();

  return (
    <PageContent
      title={language !== 'en' ? names.ja : names.en}
      titleTextTransform="capitalize"
      showBackButton
    >
      <React.Fragment>
        <Typography
          variant="body1"
          css={css`
            vertical-align: center;
            text-transform: capitalize;
          `}
        >
          {language === 'ja'
            ? names.furigana
            : language === 'zh'
            ? names.en
            : names.ja}
        </Typography>
        <TextDivider text={<Translation text="profile" />} />
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            & > * {
              margin: ${theme.spacing.s};
            }
          `}
        >
          <GridMemberImage
            src={profileImage}
            alt={name}
            fixedSize
            css={css`
              width: 180px;
              height: 220px;
            `}
          />
          <div
            css={css`
              display: grid;
              grid-template-columns: max-content auto;
              grid-template-rows: auto;
              grid-gap: ${theme.spacing.s};
              margin-top: 0.5em;
              align-items: center;
              text-transform: capitalize;
            `}
          >
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'standard' }}
            >
              <Translation text="join" />
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
            >
              <Translation text={('join: ' + join) as any} />{' '}
              {graduation.isGraduated ? <Translation text="graduate" /> : null}
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'standard' }}
            >
              <Translation text="birthday" />
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
            >
              {formatDate(birthday)}
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'standard' }}
            >
              <Translation text="height" />
            </Typography>
            <Typography
              variant="body2"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
              element="span"
              css={css`
                text-transform: lowercase;
              `}
            >
              {height}cm
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'standard' }}
            >
              <Translation text="blood type" />
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
            >
              {bloodType}
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'standard' }}
            >
              <Translation text="birthplace" />
            </Typography>
            <Typography
              variant="body2"
              element="span"
              textColor={{ on: 'onBackground', variant: 'variant0' }}
            >
              <Translation text={origin as any} />
            </Typography>
            {units.length > 0 ? (
              <React.Fragment>
                <Typography
                  variant="body2"
                  element="span"
                  textColor={{ on: 'onBackground', variant: 'standard' }}
                >
                  <Translation text="units" />
                </Typography>
                <Typography
                  variant="body2"
                  element="span"
                  textColor={{ on: 'onBackground', variant: 'variant0' }}
                >
                  <LocalizedList list={units} />
                </Typography>
              </React.Fragment>
            ) : null}
            {corps.length > 0 ? (
              <React.Fragment>
                <Typography
                  variant="body2"
                  element="span"
                  textColor={{ on: 'onBackground', variant: 'standard' }}
                >
                  <Translation text="corps" />
                </Typography>
                <Typography
                  variant="body2"
                  element="span"
                  textColor={{ on: 'onBackground', variant: 'variant0' }}
                >
                  <LocalizedList list={corps} />
                </Typography>
              </React.Fragment>
            ) : null}
          </div>
        </div>
        {sites.length > 0 ? (
          <React.Fragment>
            <Typography
              variant="h4"
              element="h3"
              css={css`
                margin: 0.5em 0;
                text-align: center;
              `}
            >
              <Translation text="websites" />
            </Typography>
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: baseline;
                flex-wrap: wrap;
              `}
            >
              {sites.map(site => (
                <TextLink
                  key={site.title}
                  element="a"
                  to={site.url}
                  typographyVariant="body2"
                  css={css`
                    &:not(:first-of-type) {
                      margin-left: 1em;
                    }
                  `}
                >
                  <Translation text={site.title as any} />
                </TextLink>
              ))}
            </div>
          </React.Fragment>
        ) : null}
        {photoAlbums.length > 0 ? (
          <React.Fragment>
            <Typography
              variant="h4"
              element="h3"
              css={css`
                margin: 0.5em 0;
                text-align: center;
              `}
            >
              <Translation text="photo albums" />
            </Typography>
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: baseline;
                flex-wrap: wrap;
              `}
            >
              {photoAlbums.map(photoAlbum => (
                <Typography
                  key={photoAlbum.title}
                  variant="body2"
                  element="span"
                >
                  『{photoAlbum.title}』
                </Typography>
              ))}
            </div>
          </React.Fragment>
        ) : null}
        {positionsHistory.length > 0 ? (
          <React.Fragment>
            <TextDivider text={<Translation text="position history" />} />
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {positionsHistory.map(position => (
                <div
                  key={position.singleNumber}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: ${theme.spacing.xxs};
                  `}
                >
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{
                      on: 'onBackground',
                      variant: 'variant0',
                    }}
                    css={css`
                      margin-bottom: 0.3em;
                    `}
                  >
                    {position.singleNumber}
                  </Typography>
                  <PositionBadge position={position.position} />
                </div>
              ))}
            </div>
            {shouldShowPositionCounter ? (
              <React.Fragment>
                <div
                  css={css`
                    margin-top: 1em;

                    & > * {
                      margin: auto;
                    }
                  `}
                >
                  <PositionCounter {...positionsCounter} />
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 1em;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Center} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                      `}
                    >
                      <Translation text="center" />
                    </Typography>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Fukujin} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                      `}
                    >
                      <Translation text="fukujin" />
                    </Typography>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Selected} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                      `}
                    >
                      <Translation text="selected" />
                    </Typography>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Under} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                      `}
                    >
                      <Translation text="under" />
                    </Typography>
                  </div>
                </div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}
        {gallery.length > 0 ? (
          <React.Fragment>
            <TextDivider text={<Translation text="gallery" />} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
                grid-template-rows: auto;
                grid-gap: ${theme.spacing.m};
                justify-content: center;
              `}
            >
              {gallery.map((profileImage, index) => (
                <GridMemberImage src={profileImage} key={index} alt={name} />
              ))}
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    </PageContent>
  );
};
