/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { getMemberData } from 'api/member';
import { MemberPageData } from 'server/pages/member';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { Card } from 'client/components/atoms/Card';
import { Typography } from 'client/components/atoms/Typography';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { GlowStickBadge } from 'client/components/pages/member/GlowStickBadge';
import { PositionBadge } from 'client/components/pages/member/PositionBadge';
import { PositionCounter } from 'client/components/pages/member/PositionCounter';
import { PageContent } from 'client/components/layout/PageContent';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { PositionType } from 'server/actors/Members/constants/position';
import { componentElevationKey } from 'client/styles/tokens/elevation';

type PathParams = { name: string };

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const memberData = await getMemberData();

  return {
    paths: ['ja', 'en', 'zh']
      .map(locale =>
        memberData.map(member => ({
          params: {
            name: member.name,
          },
          locale,
        }))
      )
      .flat(),
    fallback: false,
  };
};

type PageProps = MemberPageData;

export const getStaticProps: GetStaticProps<PageProps, PathParams> = async ({
  params,
}) => {
  const memberData = await getMemberData();

  if (params) {
    const member = memberData.find(member => member.name === params.name);

    if (member) {
      const { positionsHistory, ...rest } = member;

      return {
        props: {
          positionsHistory: positionsHistory
            .slice()
            .reverse()
            .filter(history => history.position !== 'none'),
          ...rest,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};

const MemberPage: React.FC<PageProps> = props => {
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
    positionsHistory,
    positionsCounter,
    glowStickColor,
    gallery,
  } = props;

  const { locale } = useRouter();
  const { Translation, getTranslation } = useTranslations();
  const theme = useAppTheme();
  const { formatWords, formatDate, formatWordsWithCommas } = useIntl();

  const shouldShowPositionCounter = React.useMemo(
    () =>
      positionsCounter.center +
        positionsCounter.fukujin +
        positionsCounter.selected +
        positionsCounter.under >
      0,
    [positionsCounter]
  );

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
    text: locale !== 'en' ? kanjiName : enName,
    lang: locale !== 'en' ? 'ja' : 'en',
  };
  const secondaryName = {
    text: locale === 'ja' ? furiganaName : locale === 'zh' ? enName : kanjiName,
    lang: locale === 'ja' ? 'ja-Hira' : locale === 'zh' ? 'en' : 'ja',
  };

  return (
    <>
      <PageHelmet
        title={primaryName.text}
        options={{ textTransform: 'capitalize' }}
      />
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
            <div
              css={css`
                border-radius: ${commonStyles.borderRadius.m};
                box-shadow: ${theme.elevation[
                  componentElevationKey.componentOnBackground
                ].boxShadow};
                overflow: hidden;
                width: 200px;
                height: 240px;
              `}
            >
              <Image
                src={profileImage}
                alt={formatWords([
                  locale !== 'en'
                    ? nameNotations.lastName + nameNotations.firstName
                    : enName,
                  getTranslation('profile image'),
                ])}
                width={200}
                height={240}
                objectFit="cover"
                objectPosition="top"
              />
            </div>
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
                <>
                  <InfoItemLabel>
                    <Translation text="units" />
                  </InfoItemLabel>
                  <InfoItemValue lang="ja">
                    {formatWordsWithCommas(units)}
                  </InfoItemValue>
                </>
              )}
              {corps.length > 0 && (
                <>
                  <InfoItemLabel>
                    <Translation text="corps" />
                  </InfoItemLabel>
                  <InfoItemValue lang="ja">
                    {formatWordsWithCommas(corps)}
                  </InfoItemValue>
                </>
              )}
              {glowStickColor.left !== GlowStickColorType.None && (
                <>
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
                </>
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
                      href={site.url}
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
                      href={photoAlbum.sites[0].url}
                      css={css`
                        width: 180px;
                        margin: ${commonStyles.spacing.xs};
                      `}
                    >
                      <article>
                        <Image
                          src={photoAlbum.cover}
                          alt=""
                          role="presentation"
                          width={180}
                          height={200}
                          objectFit="cover"
                          objectPosition="top"
                          css={css`
                            border-radius: ${commonStyles.borderRadius.s};
                          `}
                        />
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
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {positionsHistory.map(position => (
                <li
                  key={position.singleNumber}
                  value={position.singleNumber}
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
                <li
                  key={index}
                  css={css`
                    margin: ${commonStyles.spacing.xs};
                    border-radius: ${commonStyles.borderRadius.xs};
                    box-shadow: ${theme.elevation[
                      componentElevationKey.componentOnBackground
                    ].boxShadow};
                    width: 110px;
                    height: 132px;
                    overflow: hidden;
                  `}
                >
                  <Image
                    src={profileImage}
                    alt={[getTranslation('profile image'), index + 1].join(
                      locale === 'en' ? ' ' : ''
                    )}
                    width={110}
                    height={132}
                    objectFit="cover"
                    objectPosition="top"
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </PageContent>
    </>
  );
};

export default MemberPage;
