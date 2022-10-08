import { Generation, MemberNameKey } from 'db/src/actors/Members/types';
import { MemberResult } from 'db/src/actors/Members/models';
import { Site } from 'db/src/types/commons';

type SortOrder = 'asc' | 'desc';

export function sortByDate<T>(
  array: T[],
  keyField: keyof T,
  order: SortOrder = 'desc'
): T[] {
  return array.slice().sort((itemA, itemB) => {
    return order === 'asc'
      ? new Date(itemA[keyField] as any).getTime() -
          new Date(itemB[keyField] as any).getTime()
      : new Date(itemB[keyField] as any).getTime() -
          new Date(itemA[keyField] as any).getTime();
  });
}

/**
 * Why use reverse():
 * The larger the index is,
 * the earlier the item should come in the array.
 * For the items that do not exist in the array,
 * they should have the lowest order.
 */
const joinOrder: Generation[] = (
  ['first', 'second', 'third', 'fourth', 'fifth', 'exchange'] as const
)
  .slice()
  .reverse();

export function sortByJoin<T extends Pick<MemberResult, 'join'>>(
  array: readonly T[],
  order: SortOrder = 'desc'
): T[] {
  return array.slice().sort((itemA, itemB) => {
    const indexA = joinOrder.indexOf(itemA.join);
    const indexB = joinOrder.indexOf(itemB.join);

    return order === 'asc' ? indexA - indexB : indexB - indexA;
  });
}

export function sortByGraduation<T extends Pick<MemberResult, 'graduation'>>(
  array: readonly T[],
  order: SortOrder = 'desc'
): T[] {
  return array.slice().sort((itemA, itemB) => {
    let compareResult = 0;

    if (itemA.graduation.isGraduated && itemB.graduation.isGraduated) {
      compareResult =
        new Date(itemA.graduation.graduatedDate).getTime() -
        new Date(itemB.graduation.graduatedDate).getTime();
    } else if (itemA.graduation.isGraduated && !itemB.graduation.isGraduated) {
      compareResult = 1;
    } else if (!itemA.graduation.isGraduated && itemB.graduation.isGraduated) {
      compareResult = -1;
    } else if (!itemA.graduation.isGraduated && !itemB.graduation.isGraduated) {
      compareResult = 0;
    }

    return order === 'asc' ? compareResult : compareResult * -1;
  });
}

const socialMediaOrder: string[] = [
  'Instagram',
  'Twitter',
  'YouTube',
  'TikTok',
  'blog',
  'Fourth Gen Blog',
  'official',
  'online salon',
  'profile',
  'Weibo',
].reverse();

export function sortBySocialMedia(
  sites: readonly Site[],
  order: SortOrder = 'desc'
): Site[] {
  return sites.slice().sort((mediaA, mediaB) => {
    const indexA = socialMediaOrder.indexOf(mediaA.title);
    const indexB = socialMediaOrder.indexOf(mediaB.title);

    return order === 'asc' ? indexA - indexB : indexB - indexA;
  });
}

const reversedMemberOrder: MemberNameKey[] = [
  'akimotomanatsu',
  'ikutaerika',
  'itoujunna',
  'itouriria',
  'iwamotorenka',
  'umezawaminami',
  'oozonomomoko',
  'kitanohinako',
  'kuboshiori',
  'saitouasuka',
  'sakaguchitamami',
  'satoukaede',
  'shinuchimai',
  'suzukiayane',
  'takayamakazumi',
  'teradaranze',
  'nakamurareno',
  'higuchihina',
  'hoshinominami',
  'horimiona',
  'matsumurasayuri',
  'mukaihazuki',
  'yamazakirena',
  'yamashitamizuki',
  'yoshidaayanochristie',
  'yodayuuki',
  'watanabemiria',
  'wadamaaya',
  'endousakura',
  'kakiharuka',
  'kakehashisayaka',
  'kanagawasaya',
  'kitagawayuri',
  'kuromiharuka',
  'satourika',
  'shibatayuna',
  'seimiyarei',
  'tamuramayu',
  'tsutsuiayame',
  'hayakawaseira',
  'hayashiruna',
  'matsuomiyu',
  'yakubomio',
  'yumikinao',
];

export function sortByMemberName<
  T extends {
    name: MemberNameKey;
  }
>(members: readonly T[], order: SortOrder = 'desc'): T[] {
  const memberOrder = reversedMemberOrder.slice().reverse();

  return members.slice().sort((memberA, memberB) => {
    const indexA = memberOrder.indexOf(memberA.name);
    const indexB = memberOrder.indexOf(memberB.name);

    return order === 'asc' ? indexA - indexB : indexB - indexA;
  });
}
