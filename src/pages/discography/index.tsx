import * as React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { sortByDate } from 'utils/sorting';
import { DiscographyPage } from 'client/templates/Discography';
import { useFilter } from 'client/hooks/useFilter';
import { DiscographyUrlFilter } from 'client/utils/urls';
import { DiscographyPageData } from 'server/pages/discography';

export const query = graphql`
  {
    allDiscographyJson {
      nodes {
        title
        key
        type
        number
        artwork {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
        release
      }
    }
  }
`;

type DiscographyPageDataNode = {
  title: DiscographyPageData[0]['title'];
  key: DiscographyPageData[0]['key'];
  type: DiscographyPageData[0]['type'];
  number: DiscographyPageData[0]['number'];
  artwork: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  release: DiscographyPageData[0]['release'];
};

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

const DiscographyPageContainer: React.FC<{
  data: {
    allDiscographyJson: {
      nodes: DiscographyPageDataNode[];
    };
  };
}> = props => {
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
