import * as React from "react";
import { graphql } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import { JoinedGenerationType } from "types/responseTypes";
import { MemberType, Members } from "components/templates/Members";
import "styles/app.scss";

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
        }
        profileImage {
          large
          small
        }
      }
    }
  }
`;

interface CdsData {
  data: {
    allMembersJson: {
      nodes: MemberType[];
    };
  };
}

export default (props: RouteComponentProps<CdsData>) => {
  const members = React.useMemo(() => {
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

    if (props.data && props.data.allMembersJson) {
      const { nodes } = props.data.allMembersJson;

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
  }, [props.data]);

  const query = React.useMemo(
    () => (props.location ? props.location.search : ""),
    [props.location]
  );

  return props.data ? <Members query={query} members={members} /> : null;
};
