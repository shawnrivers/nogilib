import * as React from "react";
import { graphql } from "gatsby";
import { MemberType, Members } from "components/templates/Members";
import { JoinedGenerationType, MembersType } from "types/responseTypes";

export const query = graphql`
  query MembersContainerQuery {
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
        }
        profileImage {
          large
          small
        }
      }
    }
  }
`;

interface MembersData {
  data: {
    allMembersJson: {
      nodes: MemberType[];
    };
  };
  pageContext: {
    currentTab: MembersType;
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
        graduated: nodes.filter(member => member.graduation.isGraduated),
      };
    }

    return membersData;
  }, [allMembersJson]);

  const members = React.useMemo(() => {
    switch (currentTab) {
      case MembersType.FirstGeneration:
        return allMembers.first;
      case MembersType.SecondGeneration:
        return allMembers.second;
      case MembersType.ThirdGeneration:
        return allMembers.third;
      case MembersType.FourthGeneration:
        return allMembers.fourth;
      case MembersType.Graduated:
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
