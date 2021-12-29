import { MemberPageData } from 'db/src/pages/member';

export async function getMemberData(): Promise<MemberPageData[]> {
  return (await import('db/result/member.json')).default as MemberPageData[];
}
