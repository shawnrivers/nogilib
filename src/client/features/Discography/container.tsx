import * as React from 'react';
import { sortByDate } from 'utils/sorting';
import { DiscographyPage } from 'client/features/Discography/template';
import { useFilter } from 'client/hooks/useFilter';
import {
  DiscographyPageDataNode,
  useDiscographyPageQuery,
} from 'client/features/Discography/query';
import { DiscographyUrlFilter } from 'client/utils/urls';

type CdGroupByYear = {
  year: number;
  cds: (DiscographyPageDataNode & {
    year: number;
  })[];
};

function groupCdsByYear(cds: DiscographyPageDataNode[]): CdGroupByYear[] {
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
    cds: sortByDate(cdGroup.cds, 'release'),
  }));
}

export type DiscographyPageProps = {
  currentFilter: DiscographyUrlFilter;
  cdGroupsByYear: CdGroupByYear[];
};

export const DiscographyPageContainer: React.FC = () => {
  const pageData = useDiscographyPageQuery();
  const discographyData = pageData.allDiscographyJson.nodes;

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
