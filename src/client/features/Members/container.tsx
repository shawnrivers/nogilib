import { graphql } from "gatsby";
import * as React from "react";
import { Members, MembersProps } from "client/features/Members/template";
import { MembersTabType } from "client/types/tabs";
import { MemberResult } from "server/actors/Members/models";
import { JoinedGenerationType } from "server/actors/Members/constants/joinedGeneration";

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

const MembersContainer: React.FC<MembersData> = ({
  data: { allMembersJson },
  pageContext: { currentTab },
}) => {
  const allMembers = React.useMemo(() => {
    let membersData: {
      first: MembersProps["members"];
      second: MembersProps["members"];
      third: MembersProps["members"];
      fourth: MembersProps["members"];
      graduated: MembersProps["members"];
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

export default MembersContainer;
