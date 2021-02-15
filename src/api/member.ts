import { MemberPageData } from 'server/pages/member';

export async function getMemberData(): Promise<MemberPageData[]> {
  return (await import('data/member.json')).default as MemberPageData[];
}
