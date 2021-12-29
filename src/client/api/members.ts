import { MembersPageData } from 'db/src/pages/members';

export async function getMembersData(): Promise<MembersPageData> {
  return (await import('db/result/members.json')).default as MembersPageData;
}
