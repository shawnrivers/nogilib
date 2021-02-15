import { MembersPageData } from 'server/pages/members';

export async function getMembersData(): Promise<MembersPageData> {
  return (await import('data/members.json')).default as MembersPageData;
}
