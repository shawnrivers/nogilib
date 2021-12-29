import * as MemberConverters from 'db/src/actors/Members/converters';
import {
  MemberRaw,
  MemberResult,
  MembersRawArray,
  MembersRawObject,
  MembersResultArray,
  MembersResultObject,
} from 'db/src/actors/Members/models';
import { SongsRawObject } from 'db/src/actors/Songs/models';
import { UnitsRawArray } from 'db/src/actors/Units/models';
import { arrayToObject } from 'utils/array';
import { DiscographyRawArray } from 'db/src/actors/Discography/models';

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
  private resultDataObject: MembersResultObject | null;
  public isConverted: boolean;

  public constructor(membersRawArray: MembersRawArray) {
    this.rawDataArray = membersRawArray;
    this.rawDataObject = arrayToObject(membersRawArray, 'name');
    this.resultData = [];
    this.resultDataObject = null;
    this.isConverted = false;
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

  public getResultObject(): MembersResultObject {
    if (!this.resultDataObject) {
      throw new Error('Please convert Members data at first.');
    }

    return this.resultDataObject;
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
    this.resultDataObject = arrayToObject(membersResult, 'name');
    this.isConverted = true;
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
      profileImages,
      join: memberRaw.join,
      birthday: memberRaw.birthday,
      height: memberRaw.height,
      bloodType: memberRaw.bloodType,
      origin: memberRaw.origin,
      sites: memberRaw.sites,
      photoAlbums: MemberConverters.convertPhotoAlbums(memberRaw.photoAlbums),
      units: MemberConverters.convertMemberUnits({
        memberName: memberRaw.name,
        unitsRawArray,
      }),
      positionsHistory,
      positionsCounter:
        MemberConverters.convertMemberPositionsCounter(positionsHistory),
      graduation: memberRaw.graduation,
    };
  }
}
