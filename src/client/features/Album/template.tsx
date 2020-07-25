/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { Header, Main } from 'client/components/templates/Page';
import { QueryResultAlbum } from 'client/features/Album/container';
import { useAppTheme } from 'client/styles/tokens';
import { toCdNumber } from 'utils/strings';
import { Message } from 'client/components/atoms/Message';
import { GridArtworkImage } from 'client/components/atoms/image/GirdArtworkImage';
import { TextDivider } from 'client/features/Discography/components/atoms/TextDivider';

type AlbumPageProps = {
  album: QueryResultAlbum;
};

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  const { album } = props;
  const theme = useAppTheme();

  return (
    <React.Fragment>
      <Header>
        <Typography
          variant="h4"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
        >
          {toCdNumber(album.number)} {album.type}
        </Typography>
        <Typography variant="h2" element="h1">
          {album.title}
        </Typography>
        <Typography
          variant="body1"
          css={css`
            margin-top: 0.4em;
            text-transform: capitalize;
          `}
        >
          <Message text="release" />: {album.release}
        </Typography>
      </Header>
      <Main>
        <TextDivider text={<Message text="artworks" />} />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, 240px);
            grid-gap: ${theme.spacing.m};
            justify-content: center;
            overflow-x: auto;
          `}
        >
          {album.artworks.map((artwork, i) => (
            <GridArtworkImage key={i} src={artwork.url} alt={String(i + 1)} />
          ))}
        </div>
        <TextDivider text={<Message text="tracks" />} />
      </Main>
    </React.Fragment>
  );
};
