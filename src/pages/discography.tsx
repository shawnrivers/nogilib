/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { Image } from 'client/components/atoms/Image';
import { Typography } from 'client/components/atoms/Typography';
import { CdResult } from 'server/actors/Cds/models';
import { toCdNumber } from 'utils/strings';

export const query = graphql`
  query SinglesQuery {
    allSinglesJson {
      nodes {
        title
        number
        artworks
        release
        songs {
          focusPerformers {
            name
            type
          }
        }
      }
    }
  }
`;

type FocusPerformers = CdResult['songs'][0]['focusPerformers'];

type QueryResultCds = {
  title: CdResult['title'];
  number: CdResult['number'];
  artworks: CdResult['artworks'];
  release: CdResult['release'];
  songs: {
    focusPerformers: FocusPerformers;
  }[];
}[];

type QueryResult = {
  data: {
    allSinglesJson: {
      nodes: QueryResultCds;
    };
  };
};

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 200px) minmax(min-content, 1fr) minmax(
      max-content,
      140px
    );
  grid-template-rows: auto;
  grid-template-areas:
    'navigation header settings'
    'main main main';
  margin-top: 64px;
`;

const Navigation = styled.nav`
  grid-area: navigation;
`;

const Header = styled.header`
  grid-area: header;
`;

const Settings = styled.div`
  grid-area: settings;
`;

const Main = styled.main`
  grid-area: main;
`;

const FeatureCd: React.FC<{
  artwork: string;
  number: string;
  title: string;
  focusPerformers: FocusPerformers;
  release: string;
}> = props => (
  <div
    css={css`
      display: flex;
    `}
  >
    <ArtworkImage
      src={props.artwork}
      alt={props.number}
      width={300}
      height={300}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Typography variant="h1" element="h4">
        {toCdNumber(props.number)} <br /> Single
      </Typography>
      <div>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body1">
          {props.focusPerformers.type}: {props.focusPerformers.name}
        </Typography>
        <Typography variant="body1">発売日：{props.release}</Typography>
      </div>
    </div>
  </div>
);

const NormalCd: React.FC<{
  artwork: string;
  number: string;
  title: string;
  focusPerformers: FocusPerformers;
}> = props => (
  <div>
    <ArtworkImage src={props.artwork} alt={props.number} />
    <Typography variant="h4">{toCdNumber(props.number)}</Typography>
    <Typography variant="body1">{props.title}</Typography>
    <Typography variant="body2">
      {props.focusPerformers.type}: {props.focusPerformers.name}
    </Typography>
  </div>
);

const ArtworkImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}> = props => (
  <Image
    src={props.src}
    alt={props.alt}
    objectFit="cover"
    objectPosition="top"
    css={css`
      width: ${props.width ?? 200}px;
      height: ${props.height ?? 200}px;
    `}
  />
);

type CdGroupByYear = {
  year: number;
  cds: (QueryResultCds[0] & { year: number })[];
};

const groupCdsByYear = (cds: QueryResultCds): CdGroupByYear[] => {
  const cdsWithYear = cds
    .map(cd => ({
      ...cd,
      year: new Date(cd.release).getFullYear(),
    }))
    .sort((cdA, cdB) => cdB.year - cdA.year);

  const cdGroupsByYear: CdGroupByYear[] = [];

  for (const cd of cdsWithYear) {
    if (cdGroupsByYear.length === 0) {
      cdGroupsByYear.push({ year: cd.year, cds: [cd] });
    } else {
      for (let i = 0; i < cdGroupsByYear.length; i++) {
        const cdGroup = cdGroupsByYear[i];
        if (cdGroup.year === cd.year) {
          cdGroup.cds.push(cd);
          break;
        } else if (i === cdGroupsByYear.length - 1) {
          cdGroupsByYear.push({ year: cd.year, cds: [cd] });
          break;
        }
      }
    }
  }

  return cdGroupsByYear;
};

const Discography: React.FC<QueryResult> = props => {
  const {
    data: {
      allSinglesJson: { nodes },
    },
  } = props;

  const cdGroupsByYear = groupCdsByYear(nodes);

  return (
    <Container>
      <Navigation>
        <ul>
          <Typography variant="h6" element="li">
            DISCOGRAPHY
          </Typography>
          <Typography variant="h6" element="li">
            MEMBERS
          </Typography>
          <Typography variant="h6" element="li">
            SEARCH
          </Typography>
        </ul>
      </Navigation>
      <Settings>
        <Typography variant="h7" element="div">
          Light / Dark
        </Typography>
        <Typography variant="h7" element="div">
          EN / 日 / 中
        </Typography>
      </Settings>
      <Header>
        <Typography
          variant="h1"
          css={css`
            overflow-wrap: break-word;
          `}
        >
          DISCOGRAPHY
        </Typography>
        <Typography variant="h2">Singles / Albums</Typography>
      </Header>
      <Main>
        {cdGroupsByYear.map((cdGroup, i) => {
          if (i === 0) {
            const [featuredCd, ...restCds] = cdGroup.cds;

            return (
              <div key={cdGroup.year}>
                <Typography
                  variant="h3"
                  css={css`
                    text-align: center;
                  `}
                >
                  {cdGroup.year}
                </Typography>
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: repeat(3, 200px);
                    grid-template-rows: auto;
                    grid-template-areas: 'featured featured featured';
                    grid-gap: 24px;
                    justify-content: center;
                  `}
                >
                  <div
                    css={css`
                      grid-area: featured;
                    `}
                  >
                    <FeatureCd
                      artwork={featuredCd.artworks[0]}
                      number={featuredCd.number}
                      title={featuredCd.title}
                      focusPerformers={featuredCd.songs[0].focusPerformers}
                      release={featuredCd.release}
                    />
                  </div>
                  {restCds.map(cd => (
                    <NormalCd
                      key={cd.number}
                      artwork={cd.artworks[0]}
                      number={cd.number}
                      title={cd.title}
                      focusPerformers={cd.songs[0].focusPerformers}
                    />
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={cdGroup.year}>
              <Typography
                variant="h3"
                css={css`
                  text-align: center;
                `}
              >
                {cdGroup.year}
              </Typography>
              <div
                css={css`
                  display: grid;
                  grid-template-columns: repeat(3, 200px);
                  grid-template-rows: auto;
                  grid-gap: 24px;
                  justify-content: center;
                `}
              >
                {cdGroup.cds.map(cd => (
                  <NormalCd
                    key={cd.number}
                    artwork={cd.artworks[0]}
                    number={cd.number}
                    title={cd.title}
                    focusPerformers={cd.songs[0].focusPerformers}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </Main>
    </Container>
  );
};

export default Discography;
