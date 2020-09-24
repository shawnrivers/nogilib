/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { PositionBadge } from 'client/features/Member/components/PositionBadge';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { PositionType } from 'server/actors/Members/constants/position';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { useAppContext } from 'client/hooks/useAppContext';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { useAppTheme, commonStyles } from 'client/styles/tokens';
import { GridMemberImage } from 'client/components/atoms/images/GridMemberImage';
import { useTranslations } from 'client/hooks/useTranslations';
import { MemberPageProps } from 'client/features/Member/container';
import { useIntl } from 'client/hooks/useIntl';
import { PositionCounter } from 'client/features/Member/components/PositionCounter';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { GlowStickBadge } from 'client/features/Member/components/GlowStickBadge';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { GridImage } from 'client/components/atoms/images/GirdImage';
import { Card } from 'client/components/atoms/Card';

export const MemberPage: React.FC<MemberPageProps> = props => {
  const {
    nameNotations,
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
    glowStickColor,
    gallery,
  } = props;
  const { language } = useAppContext();
  const { Translation, getTranslation } = useTranslations();
  const theme = useAppTheme();
  const { formatWords, formatDate, formatWordsWithCommas } = useIntl();

  useScrollRestoration();

  const kanjiName = [nameNotations.lastName, nameNotations.firstName].join(' ');
  const enName = [nameNotations.lastNameEn, nameNotations.firstNameEn].join(
    ' '
  );
  const furiganaName = [
    nameNotations.lastNameFurigana,
    nameNotations.firstNameFurigana,
  ].join(' ');

  const primaryName = {
    text: language !== 'en' ? kanjiName : enName,
    lang: language !== 'en' ? 'ja' : 'en',
  };
  const secondaryName = {
    text:
      language === 'ja' ? furiganaName : language === 'zh' ? enName : kanjiName,
    lang: language === 'ja' ? 'ja-Hira' : language === 'zh' ? 'en' : 'ja',
  };

  return (
    <PageContent
      title={primaryName}
      titleTextTransform="capitalize"
      showBackButton
    >
      <Typography
        variant="body1"
        textColor={{
          on: 'onBackground',
          variant: 'variant0',
        }}
        css={css`
          vertical-align: center;
          text-transform: capitalize;
          text-align: center;
          margin-top: 0.3em;
        `}
        lang={secondaryName.lang}
      >
        {secondaryName.text}
      </Typography>
      <section>
        <TextDivider text={<Translation text="profile" />} element="h2" />
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
            alt={formatWords([
              language !== 'en'
                ? nameNotations.lastName + nameNotations.firstName
                : enName,
              getTranslation('profile image'),
            ])}
            fixedSize
            shadow
            css={css`
              width: 200px;
              height: 240px;
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
            `}
          >
            <InfoItemLabel>
              <Translation text="join" />
            </InfoItemLabel>
            <InfoItemValue>
              <Translation text={('join: ' + join) as any} />{' '}
              {graduation.isGraduated
                ? `(${getTranslation('graduate')})`
                : null}
            </InfoItemValue>
            <InfoItemLabel>
              <Translation text="birthday" />
            </InfoItemLabel>
            <InfoItemValue>
              <time dateTime={birthday}>{formatDate(birthday)}</time>
            </InfoItemValue>
            <InfoItemLabel>
              <Translation text="height" />
            </InfoItemLabel>
            <InfoItemValue>{height}cm</InfoItemValue>
            <InfoItemLabel>
              <Translation text="blood type" />
            </InfoItemLabel>
            <InfoItemValue
              css={css`
                text-transform: uppercase;
              `}
            >
              <Translation text={bloodType} />
            </InfoItemValue>
            <InfoItemLabel>
              <Translation text="birthplace" />
            </InfoItemLabel>
            <InfoItemValue>
              <Translation text={origin as any} />
            </InfoItemValue>
            {units.length > 0 && (
              <React.Fragment>
                <InfoItemLabel>
                  <Translation text="units" />
                </InfoItemLabel>
                <InfoItemValue lang="ja">
                  {formatWordsWithCommas(units)}
                </InfoItemValue>
              </React.Fragment>
            )}
            {corps.length > 0 && (
              <React.Fragment>
                <InfoItemLabel>
                  <Translation text="corps" />
                </InfoItemLabel>
                <InfoItemValue lang="ja">
                  {formatWordsWithCommas(corps)}
                </InfoItemValue>
              </React.Fragment>
            )}
            {glowStickColor.left !== GlowStickColorType.None && (
              <React.Fragment>
                <InfoItemLabel>
                  <Translation text="glow stick" />
                </InfoItemLabel>
                <div
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                  `}
                >
                  <GlowStickBadge
                    color={glowStickColor.left}
                    size={14}
                    css={css`
                      margin-right: ${commonStyles.spacing.xxs};
                    `}
                  />
                  <GlowStickBadge color={glowStickColor.right} size={14} />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        {sites.length > 0 ? (
          <section>
            <SectionSubtitle
              element="h3"
              css={css`
                margin-top: 0.6em;
              `}
            >
              <Translation text="websites" />
            </SectionSubtitle>
            <ul
              css={css`
                display: flex;
                justify-content: center;
                align-items: baseline;
                flex-wrap: wrap;
                margin-top: 0.5em;
              `}
            >
              {sites.map(site => (
                <li key={site.title}>
                  <TextLink
                    to={site.url}
                    typographyVariant="body2"
                    textColor={{
                      on: 'onBackground',
                      variant: 'variant0',
                    }}
                    capitalize
                  >
                    <Translation text={site.title as any} />
                  </TextLink>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        {photoAlbums.length > 0 ? (
          <section>
            <SectionSubtitle
              element="h3"
              css={css`
                margin-top: 0.6em;
              `}
            >
              <Translation text="photo books" />
            </SectionSubtitle>
            <ul
              css={css`
                display: flex;
                justify-content: center;
                align-items: baseline;
                flex-wrap: wrap;
                margin-top: 0.5em;
              `}
            >
              {photoAlbums.map(photoAlbum => (
                <li key={photoAlbum.title}>
                  <Card
                    borderRadius="s"
                    padding="xs"
                    to={photoAlbum.sites[0].url}
                    css={css`
                      width: 180px;
                      margin: ${commonStyles.spacing.xs};
                    `}
                  >
                    <article>
                      <GridImage ratio={1.1} src={photoAlbum.cover} alt="" />
                      <Typography
                        variant="body2"
                        element="p"
                        css={css`
                          margin-top: 0.8em;
                          text-align: center;
                          line-height: 1.4;
                        `}
                        lang="ja"
                      >
                        {photoAlbum.title}
                      </Typography>
                    </article>
                  </Card>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </section>
      {positionsHistory.length > 0 ? (
        <section>
          <TextDivider
            text={<Translation text="position history" />}
            element="h2"
          />
          <ol
            start={parseInt(positionsHistory[0].singleNumber)}
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            {positionsHistory.map(position => (
              <li
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
              </li>
            ))}
          </ol>
          {shouldShowPositionCounter ? (
            <section>
              <SectionSubtitle
                element="h3"
                css={css`
                  margin-top: 1em;
                `}
              >
                {getTranslation('position counter')}
              </SectionSubtitle>
              <div
                css={css`
                  margin-top: 0.5em;

                  & > * {
                    margin: auto;
                  }
                `}
              >
                <PositionCounter {...positionsCounter} />
              </div>
              <ul
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  margin-top: 1em;
                `}
              >
                <li
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
                      line-height: 1;
                    `}
                  >
                    <Translation text="center" />
                  </Typography>
                </li>
                <li
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
                      line-height: 1;
                    `}
                  >
                    <Translation text="fukujin" />
                  </Typography>
                </li>
                <li
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
                      line-height: 1;
                    `}
                  >
                    <Translation text="selected" />
                  </Typography>
                </li>
                <li
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
                      line-height: 1;
                    `}
                  >
                    <Translation text="under" />
                  </Typography>
                </li>
              </ul>
            </section>
          ) : null}
        </section>
      ) : null}
      {gallery.length > 0 ? (
        <section>
          <TextDivider text={<Translation text="gallery" />} element="h2" />
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            {gallery.map((profileImage, index) => (
              <li key={index}>
                <GridMemberImage
                  src={profileImage}
                  alt={[getTranslation('profile image'), index + 1].join(
                    language === 'en' ? ' ' : ''
                  )}
                  shadow
                  fixedSize
                  css={css`
                    width: ${110}px;
                    height: ${132}px;
                    margin: ${commonStyles.spacing.xs};
                  `}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </PageContent>
  );
};
