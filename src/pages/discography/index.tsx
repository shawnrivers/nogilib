import * as React from 'react';
import { GetStaticProps } from 'next';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useFilter } from 'client/hooks/useFilter';
import { getAlbumUrl, getDiscographyUrl } from 'client/utils/url';
import { getDiscographyData } from 'api/discography';
import { DiscographyPageData } from 'db/src/pages/discography';
import { sortByDate } from 'utils/sorting';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { ArtworkCard } from 'client/components/molecules/cards/ArtworkCard';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { TextSwitchLinkGroup } from 'client/components/molecules/TextSwitchLinkGroup';
import { PageContent } from 'client/components/layout/PageContent';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { commonStyles } from 'client/styles/tokens';

type CdGroupByYear = {
  year: number;
  cds: (DiscographyPageData[0] & {
    year: number;
  })[];
};

function groupCdsByYear(cds: DiscographyPageData): CdGroupByYear[] {
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

type DiscographyPageProps = {
  allCdGroupsByYear: CdGroupByYear[];
  singleGroupsByYear: CdGroupByYear[];
  albumGroupsByYear: CdGroupByYear[];
  digitalGroupsByYear: CdGroupByYear[];
};

export const getStaticProps: GetStaticProps<
  DiscographyPageProps
> = async () => {
  const discographyData = await getDiscographyData();

  const singlesData = discographyData.filter(cd => cd.type === 'single');
  const albumsData = discographyData.filter(cd => cd.type === 'album');
  const digitalsData = discographyData.filter(cd => cd.type === 'digital');
  const otherCdsData = discographyData.filter(
    cd => cd.type !== 'single' && cd.type !== 'album' && cd.type !== 'digital'
  );
  const allCdGroupsByYear = groupCdsByYear([
    ...singlesData,
    ...albumsData,
    ...digitalsData,
    ...otherCdsData,
  ]);
  const singleGroupsByYear = groupCdsByYear(singlesData);
  const albumGroupsByYear = groupCdsByYear(albumsData);
  const digitalGroupsByYear = groupCdsByYear(digitalsData);

  return {
    props: {
      allCdGroupsByYear,
      singleGroupsByYear,
      albumGroupsByYear,
      digitalGroupsByYear,
    },
  };
};

const DiscographyPage: React.FC<DiscographyPageProps> = props => {
  const {
    singleGroupsByYear,
    albumGroupsByYear,
    digitalGroupsByYear,
    allCdGroupsByYear,
  } = props;

  const filter = useFilter();
  const { Translation, getTranslation } = useTranslations();
  const { locale } = useRouter();

  const currentFilter = React.useMemo(() => {
    switch (filter) {
      case 'singles':
      case 'albums':
      case 'digital':
      case 'all':
        return filter;
      default:
        return 'all';
    }
  }, [filter]);

  const cdGroupsByYear = React.useMemo(() => {
    switch (currentFilter) {
      case 'singles':
        return singleGroupsByYear;
      case 'albums':
        return albumGroupsByYear;
      case 'digital':
        return digitalGroupsByYear;
      case 'all':
        return allCdGroupsByYear;
    }
  }, [
    currentFilter,
    singleGroupsByYear,
    albumGroupsByYear,
    digitalGroupsByYear,
    allCdGroupsByYear,
  ]);

  return (
    <>
      <PageHelmet title={getTranslation('discography')} />
      <PageContent
        title={{ text: getTranslation('discography'), lang: locale }}
      >
        <>
          <TextSwitchLinkGroup
            variant="h4"
            textOn="onBackground"
            capitalize
            links={[
              {
                text: <Translation text="all" />,
                isSwitchedOn: currentFilter === 'all',
                href: getDiscographyUrl('all'),
              },
              {
                text: <Translation text="singles" />,
                isSwitchedOn: currentFilter === 'singles',
                href: getDiscographyUrl('singles'),
              },
              {
                text: <Translation text="albums" />,
                isSwitchedOn: currentFilter === 'albums',
                href: getDiscographyUrl('albums'),
              },
              {
                text: <Translation text="digital" />,
                isSwitchedOn: currentFilter === 'digital',
                href: getDiscographyUrl('digital'),
              },
            ]}
            css={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              text-transform: capitalize;
            `}
          />
          {cdGroupsByYear.map(cdGroup => (
            <section key={cdGroup.year}>
              <TextDivider text={cdGroup.year} element="h2" />
              <ul
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  margin: auto;
                `}
              >
                {cdGroup.cds.map(cd => (
                  <li key={cd.key}>
                    <ArtworkCard
                      href={getAlbumUrl(cd.key)}
                      image={cd.artwork}
                      width={175}
                      number={cd.number}
                      type={cd.type}
                      title={cd.title}
                      titleElement="h3"
                      borderRadius="s"
                      padding="s"
                      css={css`
                        margin: ${commonStyles.spacing.xs};
                      `}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      </PageContent>
    </>
  );
};

export default DiscographyPage;
