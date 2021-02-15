/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { arrayToObject } from 'utils/arrays';
import { AlbumPageData } from 'server/pages/album';
import { getAlbumData } from 'api/album';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { Typography } from 'client/components/atoms/Typography';
import { HorizontalCard } from 'client/components/molecules/cards/HorizontalCard';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { PageContent } from 'client/components/templates/Page';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { PageHelmet } from 'client/layouts/PageHelmet';
import { useAppTheme, commonStyles } from 'client/styles/tokens';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { getSongLink, getMemberLink } from 'client/utils/urls';
import { toCdNumber } from 'utils/strings';

type PathParams = { id: string };

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const albumData = await getAlbumData();

  return {
    paths: ['ja', 'en', 'zh']
      .map(locale =>
        albumData.map(album => ({
          params: {
            id: album.key,
          },
          locale,
        }))
      )
      .flat(),
    fallback: false,
  };
};

export type AlbumPageProps = Omit<AlbumPageData, 'songs'> & {
  songs: {
    key: AlbumPageData['songs'][0]['key'];
    title: AlbumPageData['songs'][0]['title'];
    type: AlbumPageData['songs'][0]['type'];
    artwork: AlbumPageData['artworks'][0]['url'];
  }[];
};

export const getStaticProps: GetStaticProps<
  AlbumPageProps,
  PathParams
> = async ({ params }) => {
  const albumData = await getAlbumData();

  if (params) {
    const album = albumData.find(album => album.key === params.id);

    if (album) {
      const { songs: rawSongs, ...rest } = album;
      const artworksObject = arrayToObject(album.artworks, 'type');
      const songs: AlbumPageProps['songs'] = rawSongs.map(song => ({
        key: song.key,
        title: song.title,
        type: song.type,
        artwork: artworksObject[song.inCdType[0]].url,
      }));

      return {
        props: {
          id: params?.id ?? '',
          songs,
          ...rest,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};

const AlbumPage: React.FC<AlbumPageProps> = props => {
  const { Translation, getTranslation } = useTranslations();
  const { formatDate, formatMemberName } = useIntl();
  const { locale } = useRouter();
  const theme = useAppTheme();

  return (
    <>
      <PageHelmet title={props.title} options={{ textTransform: 'none' }} />
      <PageContent
        title={{ text: props.title, lang: 'ja' }}
        subtitle={{
          text: `${toCdNumber(props.number)} ${props.type}`,
          lang: 'en',
        }}
        showBackButton
        titleTextTransform="initial"
      >
        <>
          <Typography
            variant="body1"
            textColor={{
              on: 'onBackground',
              variant: 'variant0',
            }}
            css={css`
              margin-top: 0.8em;
              text-transform: capitalize;
              text-align: center;
            `}
          >
            <Translation text="release" />:{' '}
            <time dateTime={props.release}>{formatDate(props.release)}</time>
          </Typography>
          <section>
            <TextDivider text={<Translation text="tracks" />} element="h2" />
            <ol
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {props.songs.map(track => (
                <li
                  key={track.key}
                  css={css`
                    width: 300px;
                    margin: ${commonStyles.spacing.xs};
                  `}
                >
                  <HorizontalCard
                    href={getSongLink(track.key)}
                    image={track.artwork}
                    title={{ text: track.title, lang: 'ja' }}
                    tags={[
                      {
                        text: getTranslation(track.type as any),
                        lang: locale,
                      },
                    ]}
                  />
                </li>
              ))}
            </ol>
          </section>
          {props.centers.length > 0 ? (
            <section>
              <TextDivider text={<Translation text="center" />} element="h2" />
              <ul
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                `}
              >
                {props.centers.map(member => (
                  <li key={member.name}>
                    <MemberCard
                      href={getMemberLink(member.name)}
                      profileImage={member.albumProfileImage}
                      name={formatMemberName(member.nameNotations).name}
                      lang={formatMemberName(member.nameNotations).lang}
                      width={130}
                      textSize="body2"
                      borderRadius="s"
                      padding="xs"
                      css={css`
                        margin: ${commonStyles.spacing.xs};
                      `}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <section>
            <TextDivider text={<Translation text="artworks" />} element="h2" />
            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {props.artworks.map((artwork, i) => (
                <li
                  key={i}
                  css={css`
                    margin: ${commonStyles.spacing.s};
                    border-radius: ${commonStyles.borderRadius.m};
                    box-shadow: ${theme.elevation[
                      componentElevationKey.componentOnBackground
                    ].boxShadow};
                    overflow: hidden;
                    width: 160px;
                    height: 160px;
                  `}
                >
                  <Image
                    src={artwork.url}
                    alt={`Type ${artwork.type}`}
                    width={160}
                    height={160}
                    objectFit="cover"
                    objectPosition="top"
                  />
                </li>
              ))}
            </ul>
          </section>
        </>
      </PageContent>
    </>
  );
};

export default AlbumPage;
