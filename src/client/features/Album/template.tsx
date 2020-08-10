/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { commonStyles } from 'client/styles/tokens';
import { toCdNumber } from 'utils/strings';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { AlbumPageProps } from 'client/features/Album/container';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { getMemberUrl, getSongUrl } from 'client/utils/urls';
import { useTranslations } from 'client/hooks/useTranslations';
import { HorizontalCard } from 'client/components/molecules/cards/HorizontalCard';
import { useIntl } from 'client/hooks/useIntl';
import { GridImage } from 'client/components/atoms/images/GirdImage';

export const AlbumPage: React.FC<AlbumPageProps> = props => {
  const { Translation } = useTranslations();
  const { formatDate } = useIntl();

  return (
    <PageContent
      title={props.title}
      subtitle={`${toCdNumber(props.number)} ${props.type}`}
      showBackButton
    >
      <React.Fragment>
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
          <Translation text="release" />: {formatDate(props.release)}
        </Typography>
        <TextDivider text={<Translation text="tracks" />} />
        <ul
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {props.tracks.map(track => (
            <li
              key={track.key}
              css={css`
                width: 300px;
                margin: ${commonStyles.spacing.xs};
              `}
            >
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
                display: flex;
                flex-wrap: wrap;
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
                  textSize="body2"
                  borderRadius="s"
                  padding="xs"
                  css={css`
                    width: 120px;
                    margin: ${commonStyles.spacing.xs};
                  `}
                />
              ))}
            </div>
          </React.Fragment>
        ) : null}
        <TextDivider text={<Translation text="artworks" />} />
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {props.artworks.map((artwork, i) => (
            <GridImage
              key={i}
              src={artwork.url}
              alt={String(i + 1)}
              shadow
              fixedSize
              css={css`
                width: 160px;
                height: 160px;
                margin: ${commonStyles.spacing.s};
              `}
            />
          ))}
        </div>
      </React.Fragment>
    </PageContent>
  );
};
