/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { commonStyles } from 'client/styles/tokens';
import { toCdNumber } from 'utils/strings';
import { Message } from 'client/components/atoms/Message';
import { GridArtworkImage } from 'client/components/atoms/image/GirdArtworkImage';
import { TextDivider } from 'client/components/atoms/TextDivider';
import { AlbumPageProps } from 'client/features/Album/container';
import { Card } from 'client/components/atoms/Card';
import { MemberCard } from 'client/components/molecules/card/MemberCard';
import { getMemberUrl, getSongUrl } from 'client/utils/urls';

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  return (
    <PageContent
      header={
        <React.Fragment>
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
        </React.Fragment>
      }
    >
      <React.Fragment>
        <TextDivider text={<Message text="tracks" />} />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: ${commonStyles.spacing.m};
            justify-content: center;
          `}
        >
          {props.tracks.map(track => (
            <Card
              key={track.key}
              borderRadius="m"
              padding="xs"
              to={getSongUrl(track.key)}
            >
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 90px auto;
                  grid-template-rows: auto;
                  grid-gap: ${commonStyles.spacing.m};
                  padding: ${commonStyles.spacing.xs};
                  overflow: hidden;
                `}
              >
                <GridArtworkImage src={track.artwork} alt={track.inCdType[0]} />
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
            <TextDivider text={<Message text="center" />} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
                grid-template-rows: auto;
                grid-gap: ${commonStyles.spacing.s};
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
                  to={getMemberUrl(member.name)}
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
            grid-gap: ${commonStyles.spacing.m};
            justify-content: center;
          `}
        >
          {props.artworks.map((artwork, i) => (
            <GridArtworkImage key={i} src={artwork.url} alt={String(i + 1)} />
          ))}
        </div>
      </React.Fragment>
    </PageContent>
  );
};
