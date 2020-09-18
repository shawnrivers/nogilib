export const FILTER_PARAM_KEY = 'filter';

export type DiscographyUrlFilter = 'all' | 'singles' | 'albums';
export const getDiscographyUrl = (filter?: DiscographyUrlFilter): string =>
  filter ? `/discography/?${FILTER_PARAM_KEY}=${filter}` : '/discography/';

export const getAlbumUrl = (albumTitleKey: string): string =>
  `/discography/${albumTitleKey}/`;

export const getSongUrl = (sonTitleKey: string): string =>
  `/songs/${sonTitleKey}/`;

export type MembersUrlFilter = 'all' | 'current' | 'graduated';
export const getMembersUrl = (filter?: MembersUrlFilter): string =>
  filter ? `/members/?${FILTER_PARAM_KEY}=${filter}` : '/members/';

export const getMemberUrl = (memberName: string) => `/members/${memberName}/`;

export const getSearchUrl = () => '/search/';
