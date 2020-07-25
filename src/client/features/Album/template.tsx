/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { Header, Main } from 'client/components/templates/Page';
import { useAppTheme } from 'client/styles/tokens';
import { toCdNumber } from 'utils/strings';
import { Message } from 'client/components/atoms/Message';
import { GridArtworkImage } from 'client/components/atoms/image/GirdArtworkImage';
import { TextDivider } from 'client/features/Discography/components/atoms/TextDivider';
import { AlbumPageProps } from 'client/features/Album/container';
import { Card } from 'client/components/atoms/card/Card';
import { MemberCard } from 'client/components/molecules/card/MemberCard';

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  const theme = useAppTheme();

  return (
    <React.Fragment>
      <Header>
        <Typography
          variant="h4"
          textColor={{ on: 'onBackground', variant: 'variant0' }}
        >
          {toCdNumber(props.number)} {props.type}
        </Typography>
        <Typography variant="h2" element="h1">
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          css={css`
            margin-top: 0.4em;
            text-transform: capitalize;
          `}
        >
          <Message text="release" />: {props.release}
        </Typography>
      </Header>
      <Main>
        <div
          css={css`
            max-width: 60em;
            margin: auto;
          `}
        >
          <TextDivider text={<Message text="tracks" />} />
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              grid-gap: ${theme.spacing.m};
              justify-content: center;
            `}
          >
            {props.tracks.map((track, i) => (
              <Card key={String(i + 1)} borderRadius="m" padding="xs">
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: 90px auto;
                    grid-template-rows: auto;
                    grid-gap: ${theme.spacing.m};
                    padding: ${theme.spacing.xs};
                    overflow: hidden;
                  `}
                >
                  <GridArtworkImage
                    src={track.artwork}
                    alt={track.inCdType[0]}
                    glow
                  />
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: space-evenly;
                      flex-wrap: nowrap;
                      overflow: hidden;
                    `}
                  >
                    <Typography variant="h7" element="p" bold ellipsis>
                      {track.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textColor={{ on: 'onSurface', variant: 'variant1' }}
                      ellipsis
                    >
                      #{track.type}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {props.centers.length > 0 ? (
            <React.Fragment>
              <TextDivider text={<Message text="centers" />} />
              <div
                css={css`
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                  grid-template-rows: auto;
                  grid-gap: ${theme.spacing.m};
                  justify-content: center;
                `}
              >
                {props.centers.map(member => (
                  <MemberCard
                    key={member.name}
                    profileImage={member.profileImage}
                    name={
                      member.nameNotations.lastName +
                      member.nameNotations.firstName
                    }
                    elevation={3}
                    surfaceColor="standard"
                    borderRadius="m"
                    padding="m"
                  />
                ))}
              </div>
            </React.Fragment>
          ) : null}
          <TextDivider text={<Message text="artworks" />} />
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
              grid-template-rows: auto;
              grid-gap: ${theme.spacing.m};
              justify-content: center;
            `}
          >
            {props.artworks.map((artwork, i) => (
              <GridArtworkImage key={i} src={artwork.url} alt={String(i + 1)} />
            ))}
          </div>
        </div>
      </Main>
    </React.Fragment>
  );
};
