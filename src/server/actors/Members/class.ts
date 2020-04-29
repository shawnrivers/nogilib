import {
  MembersRawArray,
  MembersRawObj,
  MembersResultArray,
  MemberResult,
  MemberRaw,
} from "server/actors/Members/models";
import { rawMembers } from "server/editor/members";
import { arrayToObject } from "client/utils/arrays";
import * as MemberConverters from "server/actors/Members/converters";

export class Members {
  private rawDataArray: MembersRawArray;
  private rawDataObj: MembersRawObj;
  private resultData: MembersResultArray;

  public constructor() {
    this.rawDataArray = rawMembers;
    this.rawDataObj = arrayToObject(rawMembers, "name");
    this.resultData = [];
  }

  public get rawArray(): MembersRawArray {
    return this.rawDataArray;
  }

  public get rawObject(): MembersRawObj {
    return this.rawDataObj;
  }

  public get result(): MembersResultArray {
    return this.resultData;
  }

  public convertMembers(): MembersResultArray {
    let membersResult: MembersResultArray = [];

    for (const memberRaw of this.rawDataArray) {
      membersResult.push(this.convertMember({ memberRaw }));
    }

    this.resultData = membersResult;
    return membersResult;
  }

  private convertMember({ memberRaw }: { memberRaw: MemberRaw }): MemberResult {
    return {
      name: memberRaw.name,
      nameNotations: memberRaw.nameNotations,
      glowStickColor: memberRaw.glowStickColor,
      profileImage: MemberConverters.convertMemberProfileImage(),
      singleImages: MemberConverters.convertMemberSingleImages(),
      join: memberRaw.join,
      birthday: memberRaw.birthday,
      height: memberRaw.height,
      bloodType: memberRaw.bloodType,
      origin: memberRaw.origin,
      sites: memberRaw.sites,
      photoAlbums: memberRaw.photoAlbums,
      units: MemberConverters.convertMemberUnits(),
      positionsHistory: MemberConverters.convertMemberPositionsHistory(),
      positionsCounter: MemberConverters.convertMemberPositionsCounter(),
      graduation: memberRaw.graduation,
    };
  }
}
