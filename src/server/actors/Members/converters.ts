import * as fs from "fs";
import { MemberResult, MemberRaw } from "server/actors/Members/models";
import { UnitsRawArray } from "server/actors/Units/models";
import { SinglesRawArray } from "server/actors/Singles/models";
import { SongsRawObj } from "server/actors/Songs/models";
import { PositionType, SongType, FukujinType } from "server/utils/constants";

type ConvertMemberProfileImage = (params: {
  memberName: MemberRaw["name"];
  numberOfSingles: number;
  memberSingleImages: MemberResult["singleImages"];
  isMemberGraduated: MemberRaw["graduation"]["isGraduated"];
}) => MemberResult["profileImage"];

export const convertMemberProfileImage: ConvertMemberProfileImage = ({
  memberName,
  numberOfSingles,
  memberSingleImages,
  isMemberGraduated,
}) => {
  let memberProfileImageResult = "";

  const graduatedProfileImagePath = `members/graduated/${memberName}.jpg`;

  for (let i = 0; i < numberOfSingles; i++) {
    if (memberSingleImages[numberOfSingles - 1] === "") {
      memberProfileImageResult = "members/member_no_image.png";
    } else {
      if (
        isMemberGraduated &&
        fs.existsSync("./src/assets/images/" + graduatedProfileImagePath)
      ) {
        memberProfileImageResult = graduatedProfileImagePath;
      } else {
        memberProfileImageResult =
          memberSingleImages[numberOfSingles - 1] !== ""
            ? memberSingleImages[numberOfSingles - 1]
            : memberSingleImages[numberOfSingles - 1];
      }
    }
  }

  return memberProfileImageResult;
};

type ConvertMemberSingleImages = (params: {
  memberName: MemberRaw["name"];
  numberOfSingles: number;
}) => MemberResult["singleImages"];

export const convertMemberSingleImages: ConvertMemberSingleImages = ({
  memberName,
  numberOfSingles,
}) => {
  const memberSingleImagesResult = [];

  for (let i = 0; i < numberOfSingles; i++) {
    const profileImageSrc = `members/${i + 1}/${memberName}.jpg`;

    let singleImage = "";

    if (fs.existsSync("./src/assets/images/" + profileImageSrc)) {
      singleImage = profileImageSrc;
    } else if (i > 1) {
      singleImage = memberSingleImagesResult[i - 1];
    }

    memberSingleImagesResult.push(singleImage);
  }

  return memberSingleImagesResult;
};

type ConvertMemberUnits = (params: {
  memberName: MemberRaw["name"];
  unitsRawArray: UnitsRawArray;
}) => MemberResult["units"];

export const convertMemberUnits: ConvertMemberUnits = ({
  memberName,
  unitsRawArray,
}) => {
  const memberUnitsResult = [];

  for (const unit of unitsRawArray) {
    if (unit.members.includes(memberName)) {
      memberUnitsResult.push({
        name: unit.name,
        type: unit.type,
      });
    }
  }

  return memberUnitsResult;
};

type ConvertMemberPositionsHistory = (params: {
  memberName: MemberRaw["name"];
  singlesRawArray: SinglesRawArray;
  songsRawObj: SongsRawObj;
}) => MemberResult["positionsHistory"];

export const convertMemberPositionsHistory: ConvertMemberPositionsHistory = ({
  memberName,
  singlesRawArray,
  songsRawObj,
}) => {
  const memberPositionHistoryResult = [];

  for (const single of singlesRawArray) {
    let singlePosition = PositionType.None;

    // Check trainee, skip and under.
    if (single.behindPerformers.trainees.includes(memberName)) {
      singlePosition = PositionType.Trainee;
    } else if (single.behindPerformers.skips.includes(memberName)) {
      singlePosition = PositionType.Skip;
    } else if (single.underMembers.includes(memberName)) {
      singlePosition = PositionType.Under;
    } else {
      for (const singleSong of single.songs) {
        const song = songsRawObj[singleSong.title];

        // Calculate center, fukujin, selected.
        if (song.type === SongType.Title) {
          // Check order: Center -> Fukujin -> Selected
          if (song.performers.center.includes(memberName)) {
            // Check Center
            singlePosition = PositionType.Center;
          } else if (
            song.performers.fukujin === FukujinType.RowOne &&
            song.formations.firstRow.includes(memberName)
          ) {
            // Check Fukujin (first row case)
            singlePosition = PositionType.Fukujin;
          } else if (
            song.performers.fukujin === FukujinType.RowOneTwo &&
            (song.formations.firstRow.includes(memberName) ||
              song.formations.secondRow.includes(memberName))
          ) {
            // Check Fukujin (first & second row case)
            singlePosition = PositionType.Fukujin;
          } else if (
            song.performers.fukujin instanceof Array &&
            song.performers.fukujin.includes(memberName)
          ) {
            // Check Fukujin (irregular case)
            singlePosition = PositionType.Fukujin;
          } else if (
            song.formations.firstRow.includes(memberName) ||
            song.formations.secondRow.includes(memberName) ||
            song.formations.thirdRow.includes(memberName)
          ) {
            // Check Selected
            singlePosition = PositionType.Selected;
          }
        }
      }
    }

    memberPositionHistoryResult.push({
      singleNumber: single.number,
      position: singlePosition,
    });
  }

  return memberPositionHistoryResult.sort(
    (positionA, positionB) =>
      Number(positionA.singleNumber) - Number(positionB.singleNumber)
  );
};

type ConvertMemberPositionsCounter = (
  positionsHistory: MemberResult["positionsHistory"]
) => MemberResult["positionsCounter"];

export const convertMemberPositionsCounter: ConvertMemberPositionsCounter = positionsHistory => {
  let center = 0;
  let fukujin = 0;
  let selected = 0;
  let under = 0;

  for (const position of positionsHistory) {
    switch (position.position) {
      case PositionType.Center:
        center += 1;
        fukujin += 1;
        selected += 1;
        break;
      case PositionType.Fukujin:
        fukujin += 1;
        selected += 1;
        break;
      case PositionType.Selected:
        selected += 1;
        break;
      case PositionType.Under:
        under += 1;
        break;
      default:
        break;
    }
  }

  return { center, fukujin, selected, under };
};
