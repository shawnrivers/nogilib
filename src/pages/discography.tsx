import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import * as queryString from 'query-string';
import * as React from 'react';
import { DiscographyResult } from 'server/actors/Discography/models';
import { sortByDate } from 'utils/arrays';
import {
  CdGroupByYear,
  Discography,
  DiscographyType,
} from 'client/features/Discography/template';
import { FocusPerformers } from 'server/actors/Discography/types';
import { Context } from 'client/store/app/context';

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

const DiscographyContainer: React.FC<QueryResult> = props => {
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
  const currentGroup: DiscographyType['currentGroup'] =
    filter === 'singles' ? 'singles' : filter === 'albums' ? 'albums' : 'all';
  const cdGroupsByYear: DiscographyType['cdGroupsByYear'] =
    filter === 'singles'
      ? singleGroupsByYear
      : filter === 'albums'
      ? albumGroupsByYear
      : allCdGroupsByYear;

  const { themeMode, language, setTheme, setLanguage } = React.useContext(
    Context
  );

  return (
    <Discography
      currentGroup={currentGroup}
      cdGroupsByYear={cdGroupsByYear}
      themeMode={themeMode}
      language={language}
      onSwitchTheme={setTheme}
      onSwitchLanguage={setLanguage}
    />
  );
};

export default DiscographyContainer;
