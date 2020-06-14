import { singlesRawArray } from "server/actors/Cds/Singles/raw";
import { MemberNameKey } from "server/actors/Members/constants/memberName";
import {
  convertMemberPositionsCounter,
  convertMemberPositionsHistory,
  convertMemberProfileImage,
  convertMemberSingleImages,
  convertMemberUnits,
} from "server/actors/Members/converters";
import { Songs } from "server/actors/Songs";
import { songsRawArray } from "server/actors/Songs/raw";
import { unitsRawArray } from "server/actors/Units/raw";

const songsRawObject = new Songs(songsRawArray).rawObject;

const numberOfSingles = singlesRawArray.length;
const asukaSingleImages = convertMemberSingleImages({
  memberName: MemberNameKey.SaitouAsuka,
  numberOfSingles,
});
const ranzeSingleImages = convertMemberSingleImages({
  memberName: MemberNameKey.TeradaRanze,
  numberOfSingles,
});
const nanaminSingleImages = convertMemberSingleImages({
  memberName: MemberNameKey.HashimotoNanami,
  numberOfSingles,
});
const nanaseSingleImages = convertMemberSingleImages({
  memberName: MemberNameKey.NishinoNanase,
  numberOfSingles,
});

const nanaminPositionsHistory = convertMemberPositionsHistory({
  memberName: MemberNameKey.HashimotoNanami,
  singlesRawArray,
  songsRawObject,
});
const ioriPositionsHistory = convertMemberPositionsHistory({
  memberName: MemberNameKey.SagaraIori,
  singlesRawArray,
  songsRawObject,
});

describe("convertMemberSingleImages", () => {
  test("should have the same amount of profile images to the amount of singles", () => {
    expect(asukaSingleImages).toHaveLength(singlesRawArray.length);
  });

  test("should contain member profile image when the correspond file exists", () => {
    expect(asukaSingleImages[24]).toEqual("members/25/saitouasuka.jpg");
  });

  test("should use the previous profile image when the correspond file doesn't exist", () => {
    expect(asukaSingleImages[13]).toEqual("members/14/saitouasuka.jpg");

    expect(asukaSingleImages[14]).toEqual("members/15/saitouasuka.jpg");

    expect(asukaSingleImages[15]).toEqual("members/15/saitouasuka.jpg");
  });

  test("should use the empty string for singles before join", () => {
    expect(ranzeSingleImages[5]).toEqual("");
  });
});

describe("convertMemberProfileImage", () => {
  test("should return the latest single profile image if not graduated", () => {
    expect(
      convertMemberProfileImage({
        memberName: MemberNameKey.SaitouAsuka,
        numberOfSingles,
        memberSingleImages: asukaSingleImages,
        isMemberGraduated: false,
      })
    ).toEqual(asukaSingleImages[asukaSingleImages.length - 1]);
  });

  test("should return the current profile image if graduated", () => {
    expect(
      convertMemberProfileImage({
        memberName: MemberNameKey.NishinoNanase,
        numberOfSingles,
        memberSingleImages: nanaseSingleImages,
        isMemberGraduated: true,
      })
    ).toEqual("members/graduated/nishinonanase.jpg");
  });

  test("should return the last profile image if graduated doesn't have a current profile image", () => {
    expect(
      convertMemberProfileImage({
        memberName: MemberNameKey.HashimotoNanami,
        numberOfSingles,
        memberSingleImages: nanaminSingleImages,
        isMemberGraduated: true,
      })
    ).toEqual(nanaminSingleImages[nanaminSingleImages.length - 1]);
  });
});

describe("convertMemberPositionsHistory", () => {
  test("should calculate Hashimoto Nanami's position history correctly", () => {
    expect(nanaminPositionsHistory.slice(0, 16)).toEqual([
      {
        singleNumber: "1",
        position: "fukujin",
      },
      {
        singleNumber: "2",
        position: "fukujin",
      },
      {
        singleNumber: "3",
        position: "fukujin",
      },
      {
        singleNumber: "4",
        position: "fukujin",
      },
      {
        singleNumber: "5",
        position: "fukujin",
      },
      {
        singleNumber: "6",
        position: "fukujin",
      },
      {
        singleNumber: "7",
        position: "fukujin",
      },
      {
        singleNumber: "8",
        position: "fukujin",
      },
      {
        singleNumber: "9",
        position: "fukujin",
      },
      {
        singleNumber: "10",
        position: "fukujin",
      },
      {
        singleNumber: "11",
        position: "fukujin",
      },
      {
        singleNumber: "12",
        position: "fukujin",
      },
      {
        singleNumber: "13",
        position: "fukujin",
      },
      {
        singleNumber: "14",
        position: "fukujin",
      },
      {
        singleNumber: "15",
        position: "fukujin",
      },
      {
        singleNumber: "16",
        position: "center",
      },
    ]);
  });

  test("should calculate Sagara Iori's position history correctly", () => {
    expect(ioriPositionsHistory.slice(0, 20)).toEqual([
      {
        singleNumber: "1",
        position: "none",
      },
      {
        singleNumber: "2",
        position: "none",
      },
      {
        singleNumber: "3",
        position: "none",
      },
      {
        singleNumber: "4",
        position: "none",
      },
      {
        singleNumber: "5",
        position: "none",
      },
      {
        singleNumber: "6",
        position: "none",
      },
      {
        singleNumber: "7",
        position: "skip",
      },
      {
        singleNumber: "8",
        position: "skip",
      },
      {
        singleNumber: "9",
        position: "trainee",
      },
      {
        singleNumber: "10",
        position: "trainee",
      },
      {
        singleNumber: "11",
        position: "selected",
      },
      {
        singleNumber: "12",
        position: "under",
      },
      {
        singleNumber: "13",
        position: "under",
      },
      {
        singleNumber: "14",
        position: "under",
      },
      {
        singleNumber: "15",
        position: "under",
      },
      {
        singleNumber: "16",
        position: "under",
      },
      {
        singleNumber: "17",
        position: "under",
      },
      {
        singleNumber: "18",
        position: "under",
      },
      {
        singleNumber: "19",
        position: "under",
      },
      {
        singleNumber: "20",
        position: "under",
      },
    ]);
  });
});

describe("convertMemberPositionsCounter", () => {
  test("should calculate Hashimoto Nanami's positions counter correctly", () => {
    expect(convertMemberPositionsCounter(nanaminPositionsHistory)).toEqual({
      center: 1,
      fukujin: 16,
      selected: 16,
      under: 0,
    });
  });

  test("should calculate Sagara Iori's positions counter correctly", () => {
    expect(convertMemberPositionsCounter(ioriPositionsHistory)).toEqual({
      center: 0,
      fukujin: 0,
      selected: 1,
      under: 9,
    });
  });
});

describe("convertMemberUnits", () => {
  test("should calculate Nishino Nanase's units correctly", () => {
    expect(
      convertMemberUnits({
        memberName: MemberNameKey.NishinoNanase,
        unitsRawArray,
      })
    ).toEqual([
      { name: "ナスカ", type: "unit" },
      { name: "スイカ", type: "corp" },
    ]);
  });

  test("should calculate Fukagawa Mai's units correctly", () => {
    expect(
      convertMemberUnits({
        memberName: MemberNameKey.FukagawaMai,
        unitsRawArray,
      })
    ).toEqual([]);
  });
});
