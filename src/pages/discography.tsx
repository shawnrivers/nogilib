import { graphql } from 'gatsby';
import * as React from 'react';
import { DiscographyResult } from 'server/actors/Discography/models';
import { sortByDate } from 'utils/sorting';
import {
  DiscographyPage,
  DiscographyPageProps,
} from 'client/features/Discography/template';
import { useFilter } from 'client/hooks/useFilter';

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
    () =>
      discographyData.filter(
        cd => cd.type === 'single' || cd.type === 'digital'
      ),
    [discographyData]
  );
  const albumsData = React.useMemo(
    () => discographyData.filter(cd => cd.type === 'album'),
    [discographyData]
  );
  const otherCdsData = React.useMemo(
    () =>
      discographyData.filter(
        cd =>
          cd.type !== 'single' && cd.type !== 'album' && cd.type !== 'digital'
      ),
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

  const filter = useFilter();

  const currentFilter: DiscographyPageProps['currentFilter'] = React.useMemo(() => {
    switch (filter) {
      case 'singles':
        return 'singles';
      case 'albums':
        return 'albums';
      case 'all':
        return 'all';
      default:
        return 'singles';
    }
  }, [filter]);
  const cdGroupsByYear: DiscographyPageProps['cdGroupsByYear'] = React.useMemo(() => {
    switch (filter) {
      case 'singles':
        return singleGroupsByYear;
      case 'albums':
        return albumGroupsByYear;
      case 'all':
        return allCdGroupsByYear;
      default:
        return singleGroupsByYear;
    }
  }, [filter, singleGroupsByYear, albumGroupsByYear, allCdGroupsByYear]);

  return (
    <DiscographyPage
      currentFilter={currentFilter}
      cdGroupsByYear={cdGroupsByYear}
    />
  );
};

export default DiscographyPageContainer;
