import { MemberResult } from "server/actors/Members/models";

type ConvertMemberProfileImage = () => MemberResult["profileImage"];

export const convertMemberProfileImage: ConvertMemberProfileImage = () => {
  return "";
};

type ConvertMemberSingleImages = () => MemberResult["singleImages"];

export const convertMemberSingleImages: ConvertMemberSingleImages = () => {
  return [];
};

type ConvertMemberUnits = () => MemberResult["units"];

export const convertMemberUnits: ConvertMemberUnits = () => {
  return [];
};

type ConvertMemberPositionsHistory = () => MemberResult["positionsHistory"];

export const convertMemberPositionsHistory: ConvertMemberPositionsHistory = () => {
  return [];
};

type ConvertMemberPositionsCounter = () => MemberResult["positionsCounter"];

export const convertMemberPositionsCounter: ConvertMemberPositionsCounter = () => {
  return {
    center: 0,
    fukujin: 0,
    selected: 0,
    under: 0,
  };
};
