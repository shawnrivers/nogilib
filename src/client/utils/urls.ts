export type DiscographyUrlFilter = 'all' | 'singles' | 'albums';
export const getDiscographyUrl = (filter?: DiscographyUrlFilter): string =>
  filter ? `/discography?filter=${filter}` : '/discography';

export const getAlbumUrl = (albumTitleKey: string): string =>
  `/discography/${albumTitleKey}`;

export const getSongUrl = (sonTitleKey: string): string =>
  `/songs/${sonTitleKey}`;

export type MembersUrlFilter = 'all' | 'current' | 'graduated';
export const getMembersUrl = (filter?: MembersUrlFilter): string =>
  filter ? `/members?filter=${filter}` : '/members';

export const getMemberUrl = (memberName: string) => `/members/${memberName}`;
