import { JoinedGenerationType } from 'server/actors/Members/constants/joinedGeneration';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SocialMedia } from 'server/actors/Members/constants/socialMedia';
import { MemberResult } from 'server/actors/Members/models';
import { Site } from 'server/types/commons';

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
const joinOrder: JoinedGenerationType[] = [
  JoinedGenerationType.First,
  JoinedGenerationType.Second,
  JoinedGenerationType.Third,
  JoinedGenerationType.Fourth,
  JoinedGenerationType.Exchange,
].reverse();

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
  SocialMedia.Instagram,
  SocialMedia.Twitter,
  SocialMedia.YouTube,
  SocialMedia.Blog,
  SocialMedia.FourthGenBlog,
  SocialMedia.Official,
  SocialMedia.OnlineSalon,
  SocialMedia.Profile,
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

const memberOrder: MemberNameKey[] = [
  MemberNameKey.AkimotoManatsu,
  MemberNameKey.IkutaErika,
  MemberNameKey.ItouJunna,
  MemberNameKey.ItouRiria,
  MemberNameKey.IwamotoRenka,
  MemberNameKey.UmezawaMinami,
  MemberNameKey.OozonoMomoko,
  MemberNameKey.KitanoHinako,
  MemberNameKey.KuboShiori,
  MemberNameKey.SaitouAsuka,
  MemberNameKey.SakaguchiTamami,
  MemberNameKey.SatouKaede,
  MemberNameKey.ShinuchiMai,
  MemberNameKey.SuzukiAyane,
  MemberNameKey.TakayamaKazumi,
  MemberNameKey.TeradaRanze,
  MemberNameKey.NakamuraReno,
  MemberNameKey.HiguchiHina,
  MemberNameKey.HoshinoMinami,
  MemberNameKey.HoriMiona,
  MemberNameKey.MatsumuraSayuri,
  MemberNameKey.MukaiHazuki,
  MemberNameKey.YamazakiRena,
  MemberNameKey.YamashitaMizuki,
  MemberNameKey.YoshidaAyanoChristie,
  MemberNameKey.YodaYuuki,
  MemberNameKey.WatanabeMiria,
  MemberNameKey.WadaMaaya,
  MemberNameKey.EndouSakura,
  MemberNameKey.KakiHaruka,
  MemberNameKey.KakehashiSayaka,
  MemberNameKey.KanagawaSaya,
  MemberNameKey.KitagawaYuri,
  MemberNameKey.KuromiHaruka,
  MemberNameKey.SatouRika,
  MemberNameKey.ShibataYuna,
  MemberNameKey.SeimiyaRei,
  MemberNameKey.TamuraMayu,
  MemberNameKey.TsutsuiAyame,
  MemberNameKey.HayakawaSeira,
  MemberNameKey.HayashiRuna,
  MemberNameKey.MatsuoMiyu,
  MemberNameKey.YakuboMio,
  MemberNameKey.YumikiNao,
].reverse();

export function sortByMemberName<
  T extends {
    name: MemberNameKey;
  }
>(members: readonly T[], order: SortOrder = 'desc'): T[] {
  return members.slice().sort((memberA, memberB) => {
    const indexA = memberOrder.indexOf(memberA.name);
    const indexB = memberOrder.indexOf(memberB.name);

    return order === 'asc' ? indexA - indexB : indexB - indexA;
  });
}
