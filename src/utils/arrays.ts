import { JoinedGenerationType } from 'server/actors/Members/constants/joinedGeneration';
import { SocialMedia } from 'server/actors/Members/constants/socialMedia';
import { Site } from 'server/types/commons';
import { MemberResult } from 'server/actors/Members/models';

type SortOrder = 'asc' | 'desc';

export const arrayToObject = <T, K extends keyof T>(
  array: T[],
  keyField: K
): Record<
  T[K] extends string | number | symbol ? T[K] : string | number | symbol,
  T
> => {
  return Object.assign(
    {},
    ...array.map(item => {
      const key = String(item[keyField]);

      return { [key]: item };
    })
  );
};

export const sortByDate = <T>(
  array: T[],
  keyField: keyof T,
  order: SortOrder
): T[] => {
  return array.slice().sort((itemA, itemB) => {
    return order === 'asc'
      ? new Date(itemA[keyField] as any).getTime() -
          new Date(itemB[keyField] as any).getTime()
      : new Date(itemB[keyField] as any).getTime() -
          new Date(itemA[keyField] as any).getTime();
  });
};

export const sortByJoin = <T extends Pick<MemberResult, 'join'>>(
  array: T[],
  order: SortOrder
): T[] => {
  const joinWeightMap: Record<JoinedGenerationType, number> = {
    exchange: 100,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
  };

  return array.slice().sort((itemA, itemB) => {
    return order === 'asc'
      ? joinWeightMap[itemA.join] - joinWeightMap[itemB.join]
      : joinWeightMap[itemB.join] - joinWeightMap[itemA.join];
  });
};

export function sortByGraduation<T extends Pick<MemberResult, 'graduation'>>(
  array: readonly T[],
  order: SortOrder
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

export function sortBySocialMedia(
  sites: readonly Site[],
  order: SortOrder
): Site[] {
  const socialMediaWeightMap: Record<SocialMedia | string, number> = {
    [SocialMedia.Instagram]: 1,
    [SocialMedia.Twitter]: 2,
    [SocialMedia.YouTube]: 3,
    [SocialMedia.Blog]: 4,
    [SocialMedia.FourthGenBlog]: 5,
    [SocialMedia.Official]: 6,
    [SocialMedia.OnlineSalon]: 7,
    [SocialMedia.Profile]: 8,
  };

  return sites.slice().sort((mediaA, mediaB) => {
    const weightA = socialMediaWeightMap[mediaA.title];
    const weightB = socialMediaWeightMap[mediaB.title];

    if (weightA !== undefined && weightB !== undefined) {
      return order === 'asc' ? weightA - weightB : weightB - weightA;
    } else {
      return 1;
    }
  });
}

export const filterDuplicate = <
  T extends string | number | bigint | boolean | symbol
>(
  array: T[]
): T[] => {
  let uniqueList: T[] = [];

  for (const item of array) {
    let isSeen = false;

    for (const seenItem of uniqueList) {
      if (seenItem === item) {
        isSeen = true;
        break;
      }
    }

    if (!isSeen) {
      uniqueList.push(item);
    }
  }

  return uniqueList;
};
