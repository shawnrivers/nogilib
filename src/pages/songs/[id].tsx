/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { PageContent } from 'client/components/layout/PageContent';
import { Hashtag } from 'client/components/atoms/Hashtag';
import { commonStyles } from 'client/styles/tokens';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { getSongData } from 'api/song';
import { SongPageData } from 'server/pages/song';
import { getMemberUrl } from 'client/utils/url';
import { componentElevationKey } from 'client/styles/tokens/elevation';

type PathParams = { id: string };

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const songData = await getSongData();

  return {
    paths: ['ja', 'en', 'zh']
      .map(locale =>
        songData.map(song => {
          return {
            params: {
              id: song.key,
            },
            locale,
          };
        })
      )
      .flat(),
    fallback: false,
  };
};

export type SongPageProps = SongPageData;

export const getStaticProps: GetStaticProps<
  SongPageProps,
  PathParams
> = async ({ params }) => {
  const songData = await getSongData();

  if (params) {
    const song = songData.find(song => song.key === params.id);

    if (song) {
      return {
        props: song,
      };
    }
  }

  return {
    notFound: true,
  };
};

const PerformersTag: React.FC<SongPageProps['performersTag']> = props => {
  const { name, album } = props;
  const { getTranslation } = useTranslations();
  const { formatNth, formatWords } = useIntl();

  if (name === '') {
    return null;
  }

  if (name.includes('generation')) {
    return <Hashtag>{getTranslation(name as any)}</Hashtag>;
  }

  if (name === 'selected' || name === 'under') {
    if (album.number !== null) {
      const number = formatNth({ num: album.number, unit: 'cd' });

      const words = [
        number ?? getTranslation(album.number as any),
        getTranslation(album.type as any),
        getTranslation(name as any),
        getTranslation('members'),
      ];

      return <Hashtag>{formatWords(words)}</Hashtag>;
    }
  }

  return <Hashtag lang="ja">{name}</Hashtag>;
};

export const SongPage: React.FC<SongPageProps> = props => {
  useScrollRestoration();

  const {
    title,
    type,
    single,
    albums,
    otherCds,
    artwork,
    performersTag,
    performers,
    creators,
  } = props;
  const { Translation, getTranslation } = useTranslations();
  const {
    formatWords,
    formatNth,
    formatWordsWithCommas,
    formatMemberName,
    formatAlbumType,
  } = useIntl();

  const songTags = React.useMemo(
    () => [
      ...[single]
        .filter(({ number }) => number !== '')
        .map(({ number }) => formatAlbumType('single', number)),
      ...albums.map(({ number }) => formatAlbumType('album', number)),
      ...otherCds.map(({ number }) => formatAlbumType('digital', number)),
    ],
    [single, albums, otherCds, formatAlbumType]
  );

  return (
    <>
      <PageHelmet title={title} options={{ textTransform: 'none' }} />
      <PageContent
        title={{ text: title, lang: 'ja' }}
        showBackButton
        titleTextTransform="initial"
      >
        <>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-top: 0.8em;
            `}
          >
            <Hashtag
              css={css`
                &:not(:first-of-type) {
                  margin-left: 0.4em;
                }
              `}
            >
              <Translation text={type as any} />
            </Hashtag>
            {songTags.map((tag, index) => (
              <Hashtag
                key={index}
                css={css`
                  &:not(:first-of-type) {
                    margin-left: 0.4em;
                  }
                `}
              >
                {tag}
              </Hashtag>
            ))}
          </div>
          <section>
            <TextDivider text={<Translation text="info" />} element="h2" />
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;

                & > * {
                  margin: ${commonStyles.spacing.s};
                }
              `}
            >
              <div
                css={css`
                  margin: ${commonStyles.spacing.s};
                  border-radius: ${commonStyles.borderRadius.m};
                  box-shadow: ${commonStyles.elevations[
                    componentElevationKey.componentOnBackground
                  ].boxShadow};
                  overflow: hidden;
                  width: 200px;
                  height: 200px;
                `}
              >
                <Image
                  src={artwork}
                  alt={formatWords([title, getTranslation('artwork')])}
                  width={200}
                  height={200}
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              {creators.lyrics.length +
                creators.compose.length +
                creators.arrange.length +
                creators.direct.length >
                0 && (
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: max-content auto;
                    grid-template-rows: auto;
                    grid-gap: ${commonStyles.spacing.m};
                    margin-top: 0.5em;
                    align-items: center;
                  `}
                >
                  {creators.lyrics.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="lyrics" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.lyrics)}
                      </InfoItemValue>
                    </>
                  )}
                  {creators.compose.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="compose" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.compose)}
                      </InfoItemValue>
                    </>
                  )}
                  {creators.arrange.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="arrange" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.arrange)}
                      </InfoItemValue>
                    </>
                  )}
                  {creators.direct.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="direct" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.direct)}
                      </InfoItemValue>
                    </>
                  )}
                </div>
              )}
            </div>
          </section>
          {performers.length > 0 && (
            <section>
              <TextDivider
                text={<Translation text="performers" />}
                element="h2"
              />
              <div>
                <section>
                  <div
                    css={css`
                      display: flex;
                      justify-content: center;
                    `}
                  >
                    {performersTag.name !== '' ? (
                      <PerformersTag {...performersTag} />
                    ) : null}
                  </div>
                  <div
                    css={css`
                      margin-top: 1em;
                    `}
                  >
                    {performers.map((row, index) => (
                      <section key={index}>
                        {performers.length > 1 && (
                          <SectionSubtitle
                            element="h3"
                            css={css`
                              margin-top: 0.5em;
                            `}
                          >
                            {formatNth({ num: index + 1, unit: 'row' })}
                          </SectionSubtitle>
                        )}
                        <ul
                          css={css`
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            margin-top: 0.5em;
                          `}
                        >
                          {row.map(member => (
                            <li
                              key={member.name}
                              css={css`
                                margin: ${commonStyles.spacing.xs};
                              `}
                            >
                              <MemberCard
                                name={
                                  formatMemberName(member.nameNotations).name
                                }
                                lang={
                                  formatMemberName(member.nameNotations).lang
                                }
                                width={110}
                                profileImage={member.profileImage}
                                href={
                                  member.isMember
                                    ? getMemberUrl(member.name)
                                    : undefined
                                }
                                position={member.position ?? undefined}
                                textSize="body3"
                                borderRadius="s"
                                padding="xs"
                              />
                            </li>
                          ))}
                          {props.children}
                        </ul>
                      </section>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          )}
        </>
      </PageContent>
    </>
  );
};

export default SongPage;
