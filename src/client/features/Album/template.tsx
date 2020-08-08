/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { commonStyles } from 'client/styles/tokens';
import { toCdNumber } from 'utils/strings';
import { GridArtworkImage } from 'client/components/atoms/images/GirdArtworkImage';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { AlbumPageProps } from 'client/features/Album/container';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { getMemberUrl, getSongUrl } from 'client/utils/urls';
import { useTranslations } from 'client/hooks/useTranslations';
import { HorizontalCard } from 'client/components/molecules/cards/HorizontalCard';

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  const { Translation } = useTranslations();

  return (
    <PageContent
      title={props.title}
      subtitle={`${toCdNumber(props.number)} ${props.type}`}
      showBackButton
    >
      <React.Fragment>
        <Typography
          variant="body1"
          css={css`
            margin-top: 0.4em;
            text-transform: capitalize;
          `}
        >
          <Translation text="release" />: {props.release}
        </Typography>
        <TextDivider text={<Translation text="tracks" />} />
        <ul
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: ${commonStyles.spacing.m};
            justify-content: center;
          `}
        >
          {props.tracks.map(track => (
            <li key={track.key}>
              <HorizontalCard
                to={getSongUrl(track.key)}
                image={{
                  src: track.artwork,
                  alt: track.inCdType[0],
                }}
                title={track.title}
                tags={[track.type]}
              />
            </li>
          ))}
        </ul>
        {props.centers.length > 0 ? (
          <React.Fragment>
            <TextDivider text={<Translation text="center" />} />
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
                  textSize="em2"
                  borderRadius="s"
                  padding="s"
                />
              ))}
            </div>
          </React.Fragment>
        ) : null}
        <TextDivider text={<Translation text="artworks" />} />
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
