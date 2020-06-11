import { graphql } from "gatsby";
import * as React from "react";
import { Members, MemberType } from "client/features/Members/template";
import { MembersTabType } from "client/types/tabs";
import { JoinedGenerationType } from "server/constants/commons";
import { MemberResult } from "server/actors/Members/models";

export const query = graphql`
  query MembersQuery {
    allMembersJson {
      nodes {
        name
        nameNotations {
          lastName
          firstName
          lastNameEn
          firstNameEn
        }
        join
        graduation {
          isGraduated
          graduatedDate
        }
        profileImage
      }
    }
  }
`;

interface MembersData {
  data: {
    allMembersJson: {
      nodes: (Pick<
        MemberResult,
        "name" | "join" | "graduation" | "profileImage"
      > & {
        nameNotations: Pick<
          MemberResult["nameNotations"],
          "lastName" | "firstName" | "lastNameEn" | "firstNameEn"
        >;
      })[];
    };
  };
  pageContext: {
    currentTab: MembersTabType;
    locale: string;
  };
}

const MembersContainer = ({
  data: { allMembersJson },
  pageContext: { currentTab },
}: MembersData) => {
  const allMembers = React.useMemo(() => {
    let membersData: {
      first: MemberType[];
      second: MemberType[];
      third: MemberType[];
      fourth: MemberType[];
      graduated: MemberType[];
    } = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      graduated: [],
    };

    if (allMembersJson) {
      const { nodes } = allMembersJson;

      membersData = {
        first: nodes.filter(
          member =>
            member.join === JoinedGenerationType.First &&
            !member.graduation.isGraduated
        ),
        second: nodes.filter(
          member =>
            member.join === JoinedGenerationType.Second &&
            !member.graduation.isGraduated
        ),
        third: nodes.filter(
          member =>
            member.join === JoinedGenerationType.Third &&
            !member.graduation.isGraduated
        ),
        fourth: nodes.filter(
          member =>
            member.join === JoinedGenerationType.Fourth &&
            !member.graduation.isGraduated
        ),
        graduated: nodes
          .filter(member => member.graduation.isGraduated)
          .sort(
            (memberA, memberB) =>
              new Date(memberB.graduation.graduatedDate).getTime() -
              new Date(memberA.graduation.graduatedDate).getTime()
          ),
      };
    }

    return membersData;
  }, [allMembersJson]);

  const members = React.useMemo(() => {
    switch (currentTab) {
      case MembersTabType.FirstGeneration:
        return allMembers.first;
      case MembersTabType.SecondGeneration:
        return allMembers.second;
      case MembersTabType.ThirdGeneration:
        return allMembers.third;
      case MembersTabType.FourthGeneration:
        return allMembers.fourth;
      case MembersTabType.Graduated:
        return allMembers.graduated;
      default:
        return allMembers.first;
    }
  }, [currentTab, allMembers]);

  return allMembersJson ? (
    <Members page={currentTab} members={members} />
  ) : null;
};

export default MembersContainer;
