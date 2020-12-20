import * as React from 'react';
import { Search, SearchProps } from 'client/features/Search/template';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { toCdNumber } from 'utils/strings';
import { getAlbumUrl, getMemberUrl, getSongUrl } from 'client/utils/urls';
import { MemberResult } from 'server/actors/Members/models';
import { DiscographyResult } from 'server/actors/Discography/models';
import { SongResult } from 'server/actors/Songs/models';
import { useTranslations } from 'client/hooks/useTranslations';
import { useAppContext } from 'client/store/app/useAppContext';
import { useIntl } from 'client/hooks/useIntl';

export type MemberDoc = {
  key: MemberResult['name'];
  nameNotations: MemberResult['nameNotations'];
  profileImage: MemberResult['profileImages']['gallery'][0];
  join: MemberResult['join'];
};

export type CdDoc = {
  title: DiscographyResult['title'];
  key: DiscographyResult['key'];
  number: DiscographyResult['number'];
  artwork: DiscographyResult['artworks'][0];
  cdType: DiscographyResult['type'];
};

export type SongDoc = {
  title: SongResult['title'];
  key: SongResult['key'];
  artwork: SongResult['artwork'];
  songType: SongResult['type'];
  single: SongResult['single'];
  album: SongResult['albums'][0] | undefined;
};

export type SearchDoc = (
  | (CdDoc & {
      type: 'cds';
    })
  | (SongDoc & {
      type: 'songs';
    })
  | (MemberDoc & {
      type: 'members';
    })
) & {
  id: string;
  name: string;
};

let timeout: NodeJS.Timeout;

export const SearchPageContainer: React.FC = () => {
  useScrollRestoration();

  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<SearchDoc[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const { language } = useAppContext();
  const { getTranslation } = useTranslations();
  const { formatMemberName } = useIntl();

  const lunr = React.useMemo(
    () => (typeof window !== 'undefined' ? (window as any).__LUNR__.ja : null),
    []
  );

  const search = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const inputQuery = event.currentTarget.value;
      setQuery(inputQuery);

      setIsSearching(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const searchResult =
          inputQuery !== ''
            ? lunr.index
                .search(`name:*${inputQuery}*`, { extend: true })
                .map(({ ref }: any) => lunr.store[ref])
            : [];

        setResults(searchResult);

        setIsSearching(false);
      }, 300);
    },
    [lunr]
  );

  const convertedResults = React.useMemo((): SearchProps['results'] => {
    let members: SearchProps['results']['members'] = [];
    let cds: SearchProps['results']['cds'] = [];
    let songs: SearchProps['results']['songs'] = [];

    for (const result of results) {
      if (result.type === 'members') {
        const memberName = formatMemberName({
          firstName: result.nameNotations.firstName,
          lastName: result.nameNotations.lastName,
          firstNameEn: result.nameNotations.firstNameEn,
          lastNameEn: result.nameNotations.lastNameEn,
        });

        members.push({
          to: getMemberUrl(result.key),
          imgSrc: result.profileImage,
          heading: {
            text: memberName.name,
            lang: memberName.lang,
          },
          captions: [
            {
              text: getTranslation(`join: ${result.join}` as any),
              lang: language,
            },
          ],
        });
      }

      if (result.type === 'cds') {
        cds.push({
          to: getAlbumUrl(result.key),
          imgSrc: result.artwork.url,
          heading: { text: result.title, lang: 'ja' },
          captions: [
            {
              text: `${toCdNumber(result.number)} ${result.cdType}`,
              lang: 'en',
            },
          ],
        });
      }

      if (result.type === 'songs') {
        const captions = [
          { text: `${getTranslation(result.songType as any)}`, lang: language },
        ];

        if (result.single.number !== '') {
          captions.push({
            text: `${toCdNumber(result.single.number)} single`,
            lang: 'en',
          });
        } else {
          if (result.album !== undefined) {
            captions.push({
              text: `${toCdNumber(result.album.number)} album`,
              lang: 'en',
            });
          }
        }

        songs.push({
          to: getSongUrl(result.key),
          imgSrc: result.artwork,
          heading: { text: result.title, lang: 'ja' },
          captions,
        });
      }
    }

    return { members, cds, songs };
  }, [results, formatMemberName, getTranslation, language]);

  return (
    <Search
      query={query}
      search={search}
      results={convertedResults}
      isSearching={isSearching}
    />
  );
};

export default SearchPageContainer;
