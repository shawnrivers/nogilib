import * as MemberConverters from 'server/actors/Members/converters';
import {
  MemberRaw,
  MemberResult,
  MembersRawArray,
  MembersRawObject,
  MembersResultArray,
} from 'server/actors/Members/models';
import { SongsRawObject } from 'server/actors/Songs/models';
import { UnitsRawArray } from 'server/actors/Units/models';
import { arrayToObject } from 'utils/arrays';
import { DiscographyRawArray } from 'server/actors/Discography/models';

type ConvertMemberParams = {
  memberRaw: MemberRaw;
  unitsRawArray: UnitsRawArray;
  singlesRawArray: DiscographyRawArray;
  albumsRawArray: DiscographyRawArray;
  digitalRawArray: DiscographyRawArray;
  songsRawObject: SongsRawObject;
};

export class Members {
  private rawDataArray: MembersRawArray;
  private rawDataObject: MembersRawObject;
  private resultData: MembersResultArray;

  public constructor(membersRawArray: MembersRawArray) {
    this.rawDataArray = membersRawArray;
    this.rawDataObject = arrayToObject(membersRawArray, 'name');
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

  public convertMembers(
    params: Omit<ConvertMemberParams, 'memberRaw'>
  ): MembersResultArray {
    const {
      unitsRawArray,
      singlesRawArray,
      albumsRawArray,
      digitalRawArray,
      songsRawObject,
    } = params;

    const membersResult = [];

    for (const memberRaw of this.rawDataArray) {
      membersResult.push(
        this.convertMember({
          memberRaw,
          unitsRawArray,
          singlesRawArray,
          albumsRawArray,
          digitalRawArray,
          songsRawObject,
        })
      );
    }

    this.resultData = membersResult;
    return membersResult;
  }

  private convertMember(params: ConvertMemberParams): MemberResult {
    const {
      memberRaw,
      unitsRawArray,
      singlesRawArray,
      albumsRawArray,
      digitalRawArray,
      songsRawObject,
    } = params;

    const positionsHistory = MemberConverters.convertMemberPositionsHistory({
      memberName: memberRaw.name,
      singlesRawArray,
      songsRawObject,
    });

    const profileImages = MemberConverters.convertProfileImages({
      memberName: memberRaw.name,
      singlesRawArray,
      albumsRawArray,
      digitalRawArray,
    });

    return {
      name: memberRaw.name,
      nameNotations: memberRaw.nameNotations,
      glowStickColor: memberRaw.glowStickColor,
      profileImage: profileImages.gallery[0],
      profileImages,
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
