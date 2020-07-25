export type DiscographyUrlFilter = 'all' | 'singles' | 'albums';
export const getDiscographyUrl = (filter?: DiscographyUrlFilter): string =>
  filter ? `/discography?filter=${filter}` : '/discography';

export const getAlbumUrl = (albumKey: string): string =>
  `/discography/${albumKey}`;

export type MembersUrlFilter = 'all' | 'current' | 'graduated';
export const getMembersUrl = (filter?: MembersUrlFilter): string =>
  filter ? `/members?filter=${filter}` : '/members';
