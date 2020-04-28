import * as fs from "fs";
import { RawMember, ResultMember, ResultMembers } from "../models/IMember";
import { ResultSingles } from "../models/ISingle";
import { ResultSongs } from "../models/ISong";
import { ResultUnits } from "../models/IUnit";
import { arrayToObject } from "../utils/arrays";
import { FukujinType, PositionType, SongType } from "../utils/constants";

export const initializeMembers = (rawMembers: RawMember[]): ResultMembers => {
  const initializeMember = (rawMember: RawMember): ResultMember => ({
    name: rawMember.name,
    nameNotations: rawMember.nameNotations,
    glowStickColor: rawMember.glowStickColor,
    profileImage: "",
    singleImages: [],
    join: rawMember.join,
    birthday: rawMember.birthday,
    height: rawMember.height,
    bloodType: rawMember.bloodType,
    origin: rawMember.origin,
    sites: rawMember.sites,
    photoAlbums: rawMember.photoAlbums,
    units: [],
    positionsHistory: [],
    positionsCounter: {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0,
    },
    graduation: rawMember.graduation,
  });

  const initializedArray = rawMembers.map(initializeMember);

  return arrayToObject(initializedArray, "name");
};

export const recordUnits = (members: ResultMembers, units: ResultUnits) => {
  for (const member of Object.values(members)) {
    member.units = [];

    for (const unit of Object.values(units)) {
      if (unit.members.includes(member.name)) {
        member.units.push({
          name: unit.name,
          type: unit.type,
        });
      }
    }
  }
};

export const recordPositions = (
  members: ResultMembers,
  singles: ResultSingles,
  songs: ResultSongs
) => {
  for (const member of Object.values(members)) {
    member.positionsCounter = {
      center: 0,
      fukujin: 0,
      selected: 0,
      under: 0,
    };

    for (const single of Object.values(singles)) {
      let singlePosition = PositionType.None;

      // Check trainee, skip and under.
      if (single.behindPerformers.trainees.includes(member.name)) {
        singlePosition = PositionType.Trainee;
      } else if (single.behindPerformers.skips.includes(member.name)) {
        singlePosition = PositionType.Skip;
      } else if (single.underMembers.includes(member.name)) {
        singlePosition = PositionType.Under;
        member.positionsCounter.under += 1;
      } else {
        for (const singleSong of single.songs) {
          const song = songs[singleSong.title];

          // Calculate center, fukujin, selected.
          if (singleSong.type === SongType.Title) {
            // Check order: Center -> Fukujin -> Selected
            if (song.performers.center.includes(member.name)) {
              // Check Center
              singlePosition = PositionType.Center;
              member.positionsCounter.center += 1;
              member.positionsCounter.fukujin += 1;
              member.positionsCounter.selected += 1;
            } else if (
              song.performers.fukujin === FukujinType.RowOne &&
              song.formations.firstRow.includes(member.name)
            ) {
              // Check Fukujin (first row case)
              singlePosition = PositionType.Fukujin;
              member.positionsCounter.fukujin += 1;
              member.positionsCounter.selected += 1;
            } else if (
              song.performers.fukujin === FukujinType.RowOneTwo &&
              (song.formations.firstRow.includes(member.name) ||
                song.formations.secondRow.includes(member.name))
            ) {
              // Check Fukujin (first & second row case)
              singlePosition = PositionType.Fukujin;
              member.positionsCounter.fukujin += 1;
              member.positionsCounter.selected += 1;
            } else if (
              song.performers.fukujin instanceof Array &&
              song.performers.fukujin.includes(member.name)
            ) {
              // Check Fukujin (irregular case)
              singlePosition = PositionType.Fukujin;
              member.positionsCounter.fukujin += 1;
              member.positionsCounter.selected += 1;
            } else if (
              song.formations.firstRow.includes(member.name) ||
              song.formations.secondRow.includes(member.name) ||
              song.formations.thirdRow.includes(member.name)
            ) {
              // Check Selected
              singlePosition = PositionType.Selected;
              member.positionsCounter.selected += 1;
            }
          }
        }
      }

      member.positionsHistory.push({
        singleNumber: single.number,
        position: singlePosition,
      });
    }

    member.positionsHistory.sort(
      (positionA, positionB) =>
        Number(positionA.singleNumber) - Number(positionB.singleNumber)
    );
  }
};

export const recordProfileImages = (
  members: ResultMembers,
  singleCount: number
) => {
  for (const member of Object.values(members)) {
    for (let i = 0; i < singleCount; i++) {
      const profileImageSrc = `members/${i + 1}/${member.name}.jpg`;

      let singleImage = "";

      if (fs.existsSync("./src/assets/images/" + profileImageSrc)) {
        singleImage = profileImageSrc;
      } else if (i > 1) {
        singleImage = member.singleImages[i - 1];
      }

      member.singleImages.push(singleImage);
    }

    const graduatedProfileImagePath = `members/graduated/${member.name}.jpg`;

    if (member.singleImages[singleCount - 1] === "") {
      member.profileImage = "members/member_no_image.png";
    } else {
      if (
        member.graduation.isGraduated &&
        fs.existsSync("./src/assets/images/" + graduatedProfileImagePath)
      ) {
        member.profileImage = graduatedProfileImagePath;
      } else {
        member.profileImage =
          member.singleImages[singleCount - 1] !== ""
            ? member.singleImages[singleCount - 1]
            : member.singleImages[singleCount - 1];
      }
    }
  }
};
