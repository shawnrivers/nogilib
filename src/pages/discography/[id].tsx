import { css } from '@emotion/react';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { arrayToObject } from 'utils/array';
import { AlbumPageData } from 'server/pages/album';
import { getAlbumData } from 'api/album';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { Typography } from 'client/components/atoms/Typography';
import { HorizontalCard } from 'client/components/molecules/cards/HorizontalCard';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { PageContent } from 'client/components/layout/PageContent';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { commonStyles } from 'client/styles/tokens';
import { componentElevationKey } from 'client/styles/tokens/elevation';
import { getSongUrl, getMemberUrl } from 'client/utils/url';
import { AspectRatioImage } from 'client/components/atoms/image/AspectRatioImage';

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

type PageProps = Omit<AlbumPageData, 'songs'> & {
  songs: {
    key: AlbumPageData['songs'][0]['key'];
    title: AlbumPageData['songs'][0]['title'];
    type: AlbumPageData['songs'][0]['type'];
    artwork: AlbumPageData['artworks'][0]['url'];
  }[];
};

export const getStaticProps: GetStaticProps<PageProps, PathParams> = async ({
  params,
}) => {
  const albumData = await getAlbumData();

  if (params) {
    const album = albumData.find(album => album.key === params.id);

    if (album) {
      const { songs: rawSongs, ...rest } = album;
      const artworksObject = arrayToObject(album.artworks, 'type');
      const songs: PageProps['songs'] = rawSongs.map(song => ({
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

const AlbumPage: React.FC<PageProps> = props => {
  const { title, type, number } = props;
  const { Translation, getTranslation } = useTranslations();
  const { formatDate, formatMemberName, formatAlbumType, locale } = useIntl();

  const subtitleText = formatAlbumType(type, number);

  return (
    <>
      <PageHelmet title={title} options={{ textTransform: 'none' }} />
      <PageContent
        title={{ text: title, lang: 'ja', textTransform: 'initial' }}
        subtitle={{
          text: subtitleText,
          lang: locale,
        }}
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
          {props.songs.length > 0 && (
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
                      href={getSongUrl(track.key)}
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
          )}
          {props.centers.length > 0 && (
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
                      href={getMemberUrl(member.name)}
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
          )}
          {props.artworks.length > 0 && (
            <section>
              <TextDivider
                text={<Translation text="artworks" />}
                element="h2"
              />
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
                      box-shadow: ${commonStyles.elevations[
                        componentElevationKey.componentOnBackground
                      ].boxShadow};
                      overflow: hidden;
                      width: 160px;
                      height: 160px;
                    `}
                  >
                    <AspectRatioImage
                      src={artwork.url.lg}
                      srcSet={`${artwork.url.sm}, ${artwork.url.md} 2x, ${artwork.url.lg} 3x`}
                      alt={`Type ${artwork.type}`}
                      aspectRatio={1}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      </PageContent>
    </>
  );
};

export default AlbumPage;
