import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import * as queryString from 'query-string';
import * as React from 'react';
import { DiscographyResult } from 'server/actors/Discography/models';
import { sortByDate } from 'utils/arrays';
import {
  DiscographyPage,
  DiscographyPageProps,
} from 'client/features/Discography/template';

export const query = graphql`
  query {
    allDiscographyJson {
      nodes {
        title
        key
        type
        number
        artworks {
          url
          type
        }
        release
      }
    }
  }
`;

type QueryResultDiscography = {
  title: DiscographyResult['title'];
  key: DiscographyResult['key'];
  type: DiscographyResult['type'];
  number: DiscographyResult['number'];
  artworks: DiscographyResult['artworks'];
  release: DiscographyResult['release'];
};

type QueryResult = {
  data: {
    allDiscographyJson: {
      nodes: QueryResultDiscography[];
    };
  };
};

export type CdGroupByYear = {
  year: number;
  cds: (QueryResultDiscography & {
    year: number;
  })[];
};

const groupCdsByYear = (cds: QueryResultDiscography[]): CdGroupByYear[] => {
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

const DiscographyPageContainer: React.FC<QueryResult> = props => {
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

  const location = useLocation();
  const { filter } = queryString.parse(location.search);
  const currentFilter: DiscographyPageProps['currentFilter'] =
    filter === 'singles' ? 'singles' : filter === 'albums' ? 'albums' : 'all';
  const cdGroupsByYear: DiscographyPageProps['cdGroupsByYear'] =
    filter === 'singles'
      ? singleGroupsByYear
      : filter === 'albums'
      ? albumGroupsByYear
      : allCdGroupsByYear;

  return (
    <DiscographyPage
      currentFilter={currentFilter}
      cdGroupsByYear={cdGroupsByYear}
    />
  );
};

export default DiscographyPageContainer;
