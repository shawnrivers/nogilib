import * as MemberConverters from "server/actors/Members/converters";
import {
  MemberRaw,
  MemberResult,
  MembersRawArray,
  MembersRawObject,
  MembersResultArray,
} from "server/actors/Members/models";
import { SinglesRawArray } from "server/actors/Cds/Singles/models";
import { SongsRawObject } from "server/actors/Songs/models";
import { UnitsRawArray } from "server/actors/Units/models";
import { arrayToObject } from "utils/arrays";

export class Members {
  private rawDataArray: MembersRawArray;
  private rawDataObject: MembersRawObject;
  private resultData: MembersResultArray;

  public constructor(membersRawArray: MembersRawArray) {
    this.rawDataArray = membersRawArray;
    this.rawDataObject = arrayToObject(membersRawArray, "name");
    this.resultData = [];
  }

  public get rawArray(): MembersRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): MembersRawObject {
    return this.rawDataObject;
  }

  public get result(): MembersResultArray {
    return this.resultData;
  }

  public convertMembers({
    unitsRawArray,
    singlesRawArray,
    songsRawObject,
  }: {
    unitsRawArray: UnitsRawArray;
    singlesRawArray: SinglesRawArray;
    songsRawObject: SongsRawObject;
  }): MembersResultArray {
    const membersResult = [];

    for (const memberRaw of this.rawDataArray) {
      membersResult.push(
        this.convertMember({
          memberRaw,
          unitsRawArray,
          singlesRawArray,
          songsRawObject,
        })
      );
    }

    this.resultData = membersResult;
    return membersResult;
  }

  private convertMember({
    memberRaw,
    unitsRawArray,
    singlesRawArray,
    songsRawObject,
  }: {
    memberRaw: MemberRaw;
    unitsRawArray: UnitsRawArray;
    singlesRawArray: SinglesRawArray;
    songsRawObject: SongsRawObject;
  }): MemberResult {
    const singleImages = MemberConverters.convertMemberSingleImages({
      memberName: memberRaw.name,
      numberOfSingles: singlesRawArray.length,
    });

    const positionsHistory = MemberConverters.convertMemberPositionsHistory({
      memberName: memberRaw.name,
      singlesRawArray,
      songsRawObject,
    });

    return {
      name: memberRaw.name,
      nameNotations: memberRaw.nameNotations,
      glowStickColor: memberRaw.glowStickColor,
      profileImage: MemberConverters.convertMemberProfileImage({
        memberName: memberRaw.name,
        numberOfSingles: singlesRawArray.length,
        memberSingleImages: singleImages,
        isMemberGraduated: memberRaw.graduation.isGraduated,
      }),
      singleImages,
      join: memberRaw.join,
      birthday: memberRaw.birthday,
      height: memberRaw.height,
      bloodType: memberRaw.bloodType,
      origin: memberRaw.origin,
      sites: memberRaw.sites,
      photoAlbums: memberRaw.photoAlbums,
      units: MemberConverters.convertMemberUnits({
        memberName: memberRaw.name,
        unitsRawArray,
      }),
      positionsHistory,
      positionsCounter: MemberConverters.convertMemberPositionsCounter(
        positionsHistory
      ),
      graduation: memberRaw.graduation,
    };
  }
}
