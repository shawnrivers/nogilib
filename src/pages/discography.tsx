/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import { useLocation } from '@reach/router';
import * as queryString from 'query-string';
import * as React from 'react';
import styled from '@emotion/styled';
import { Image } from 'client/components/atoms/Image';
import { Typography } from 'client/components/atoms/Typography';
import { toCdNumber, commaTextArray } from 'utils/strings';
import { DiscographyResult } from 'server/actors/Discography/models';
import { sortByDate } from 'utils/arrays';
import { useTheme } from 'client/styles/tokens';

export const query = graphql`
  query DiscographyQuery {
    allDiscographyJson {
      nodes {
        title
        type
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

type FocusPerformers = DiscographyResult['songs'][0]['focusPerformers'];

type QueryResultCds = {
  title: DiscographyResult['title'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artworks: DiscographyResult['artworks'];
  release: DiscographyResult['release'];
  songs: {
    focusPerformers: FocusPerformers;
  }[];
}[];

type QueryResult = {
  data: {
    allDiscographyJson: {
      nodes: QueryResultCds;
    };
  };
};

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 800px) minmax(
      max-content,
      1fr
    );
  grid-template-rows: auto;
  grid-template-areas:
    'navigation header settings'
    'main main main';
  grid-gap: 16px;
  margin-top: 64px;
`;

const Navigation = styled.nav`
  grid-area: navigation;
  justify-self: end;
  padding-top: 2ex;
`;

const Header = styled.header`
  grid-area: header;
`;

const Settings = styled.div`
  grid-area: settings;
  justify-self: start;
  padding-top: 2ex;
`;

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CdGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-template-rows: auto;
  grid-template-areas: 'featured featured featured';
  grid-gap: 40px;
  justify-content: center;
  max-width: 800px;
`;

const FeaturedCdContainer = styled.div`
  grid-area: featured;
`;

const FeatureCd: React.FC<{
  artwork: string;
  title: string;
  number: string;
  type: string;
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
      width={360}
      height={360}
      css={css`
        margin-right: 32px;
      `}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <Typography
        variant="h1"
        element="h4"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
          line-height: 1;
          margin-bottom: 1.5ex;
        `}
      >
        {toCdNumber(props.number)} <br /> {props.type}
      </Typography>
      <div>
        <Typography variant="h4" element="p">
          {props.title}
        </Typography>
        {props.focusPerformers.name.length > 0 ? (
          <Typography
            variant="body1"
            css={css`
              text-transform: capitalize;
            `}
          >
            {props.focusPerformers.type}:{' '}
            {commaTextArray(props.focusPerformers.name)}
          </Typography>
        ) : null}
        <Typography
          variant="body1"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
        >
          発売日：{props.release}
        </Typography>
      </div>
    </div>
  </div>
);

const NormalCd: React.FC<{
  artwork: string;
  title: string;
  number: string;
  type: string;
  focusPerformers: FocusPerformers;
}> = props => (
  <div>
    <ArtworkImage
      src={props.artwork}
      alt={props.number}
      width={240}
      height={240}
      css={css`
        margin-bottom: 8px;
      `}
    />
    <Typography
      variant="h4"
      textColor={{ on: 'onBackground', variant: 'variant1' }}
      css={css`
        text-transform: capitalize;
        margin-bottom: 0.5ex;
      `}
    >
      {toCdNumber(props.number)} {props.type}
    </Typography>
    <Typography
      variant="em1"
      css={css`
        margin-bottom: 0.5ex;
      `}
    >
      {props.title}
    </Typography>
    {props.type === 'single' && props.focusPerformers.name.length > 0 ? (
      <Typography
        variant="body3"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
        `}
      >
        {props.focusPerformers.type}:{' '}
        {commaTextArray(props.focusPerformers.name)}
      </Typography>
    ) : null}
  </div>
);

const ArtworkImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}> = props => {
  const { src, alt, width, height, ...restProps } = props;

  return (
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      objectPosition="top"
      css={css`
        width: ${width ?? 240}px;
        height: ${height ?? 240}px;
      `}
      {...restProps}
    />
  );
};

const TextSideDivider = styled.div`
  width: 128px;
  border-top: 2px solid ${props => props.color};
  margin-top: 1.5ex;
`;

const TextDivider: React.FC<{ text: string | number }> = props => {
  const theme = useTheme();
  const dividerLineColor = theme.colors.theme.onBackground.variant1;

  return (
    <Typography
      variant="h3"
      textColor={{ on: 'onBackground', variant: 'standard' }}
      css={css`
        display: flex;
        justify-content: center;
        margin: 2ex 0;
      `}
    >
      <TextSideDivider color={dividerLineColor} />
      <div
        css={css`
          margin: 0 1em;
        `}
      >
        {props.text}
      </div>
      <TextSideDivider color={dividerLineColor} />
    </Typography>
  );
};

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

  return cdGroupsByYear.map(cdGroup => ({
    ...cdGroup,
    cds: sortByDate(cdGroup.cds, 'release', 'desc'),
  }));
};

const Discography: React.FC<QueryResult> = props => {
  const theme = useTheme();
  const discographyData = props.data.allDiscographyJson.nodes;

  const singlesData = React.useMemo(
    () => discographyData.filter(cd => cd.type === 'single'),
    [discographyData]
  );
  const albumsData = React.useMemo(
    () => discographyData.filter(cd => cd.type === 'album'),
    [discographyData]
  );
  const otherCdsData = React.useMemo(
    () => discographyData.filter(cd => cd.type === 'other'),
    [discographyData]
  );
  const allCdGroupsByYear = React.useMemo(
    () => groupCdsByYear([...singlesData, ...albumsData, ...otherCdsData]),
    [singlesData, albumsData, otherCdsData]
  );
  const singleGroupsByYear = React.useMemo(() => groupCdsByYear(singlesData), [
    singlesData,
  ]);
  const albumGroupsByYear = React.useMemo(() => groupCdsByYear(albumsData), [
    albumsData,
  ]);
  const otherCdGroupsByYear = React.useMemo(
    () => groupCdsByYear(otherCdsData),
    [otherCdsData]
  );

  const location = useLocation();
  const { filter } = queryString.parse(location.search);

  const cdGroupsByYear = React.useMemo(() => {
    if (filter === 'singles') {
      return singleGroupsByYear;
    }

    if (filter === 'albums') {
      return albumGroupsByYear;
    }

    if (filter === 'others') {
      return otherCdGroupsByYear;
    }

    if (filter === 'all') {
      return allCdGroupsByYear;
    }

    return allCdGroupsByYear;
  }, [
    filter,
    allCdGroupsByYear,
    singleGroupsByYear,
    albumGroupsByYear,
    otherCdGroupsByYear,
  ]);

  return (
    <Container>
      <Navigation>
        <ul
          css={css`
            & > *:not(:last-child) {
              margin-bottom: 2ex;
            }
          `}
        >
          <li>
            <Link to="/discography">
              <Typography variant="h6" element="li">
                DISCOGRAPHY
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/members-list/first-gen">
              <Typography variant="h6" element="li">
                MEMBERS
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <Typography variant="h6" element="li">
                SEARCH
              </Typography>
            </Link>
          </li>
        </ul>
      </Navigation>
      <Settings>
        <Typography
          variant="h7"
          element="div"
          css={css`
            margin-bottom: 2ex;
          `}
        >
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
            margin-bottom: 0.5ex;
          `}
        >
          DISCOGRAPHY
        </Typography>
        <Typography
          variant="h2"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
        >
          <Link
            to="/discography"
            css={css`
              color: ${filter !== 'singles' && filter !== 'albums'
                ? theme.colors.theme.onBackground.standard
                : theme.colors.theme.onBackground.variant1};
            `}
          >
            All
          </Link>{' '}
          /{' '}
          <Link
            to="/discography?filter=singles"
            css={css`
              color: ${filter === 'singles'
                ? theme.colors.theme.onBackground.standard
                : theme.colors.theme.onBackground.variant1};
            `}
          >
            Singles
          </Link>{' '}
          /{' '}
          <Link
            to="/discography?filter=albums"
            css={css`
              color: ${filter === 'albums'
                ? theme.colors.theme.onBackground.standard
                : theme.colors.theme.onBackground.variant1};
            `}
          >
            Albums
          </Link>
        </Typography>
      </Header>
      <Main>
        {cdGroupsByYear.map((cdGroup, i) => {
          if (i === 0) {
            const [featuredCd, ...restCds] = cdGroup.cds;

            return (
              <div key={cdGroup.year}>
                <TextDivider text={cdGroup.year} />
                <CdGroupContainer>
                  <FeaturedCdContainer>
                    <FeatureCd
                      artwork={featuredCd.artworks[0]}
                      title={featuredCd.title}
                      number={featuredCd.number}
                      type={featuredCd.type}
                      focusPerformers={featuredCd.songs[0].focusPerformers}
                      release={featuredCd.release}
                    />
                  </FeaturedCdContainer>
                  {restCds.map(cd => (
                    <NormalCd
                      key={cd.number}
                      artwork={cd.artworks[0]}
                      title={cd.title}
                      number={cd.number}
                      type={cd.type}
                      focusPerformers={cd.songs[0].focusPerformers}
                    />
                  ))}
                </CdGroupContainer>
              </div>
            );
          }

          return (
            <div key={cdGroup.year}>
              <TextDivider text={cdGroup.year} />
              <CdGroupContainer>
                {cdGroup.cds.map(cd => (
                  <NormalCd
                    key={cd.number}
                    artwork={cd.artworks[0]}
                    number={cd.number}
                    type={cd.type}
                    title={cd.title}
                    focusPerformers={cd.songs[0].focusPerformers}
                  />
                ))}
              </CdGroupContainer>
            </div>
          );
        })}
      </Main>
    </Container>
  );
};

export default Discography;
