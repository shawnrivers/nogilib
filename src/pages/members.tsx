import * as React from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import * as queryString from 'query-string';
import { MemberResult } from 'server/actors/Members/models';
import {
  MemberGroupByYear,
  MembersPage,
  MembersPageProps,
} from 'client/features/Members/template';
import { sortByJoin } from 'utils/arrays';

export const query = graphql`
  query {
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

type QueryResultMember = {
  name: MemberResult['name'];
  nameNotations: Pick<
    MemberResult['nameNotations'],
    'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
  >;
  join: MemberResult['join'];
  graduation: MemberResult['graduation'];
  profileImage: MemberResult['profileImage'];
};

type QueryResult = {
  data: {
    allMembersJson: {
      nodes: QueryResultMember[];
    };
  };
};

const groupMembersByJoin = (
  members: QueryResultMember[]
): MemberGroupByYear[] => {
  const memberGroupByJoin: MemberGroupByYear[] = [];
  const membersSortedByJoin = sortByJoin(members, 'join', 'asc');

  for (const member of membersSortedByJoin) {
    if (memberGroupByJoin.length === 0) {
      memberGroupByJoin.push({ join: member.join, members: [member] });
    } else {
      for (let i = 0; i < memberGroupByJoin.length; i++) {
        const memberGroup = memberGroupByJoin[i];

        if (memberGroup.join === member.join) {
          memberGroup.members.push(member);
          break;
        } else if (i === memberGroupByJoin.length - 1) {
          memberGroupByJoin.push({ join: member.join, members: [member] });
          break;
        }
      }
    }
  }

  return memberGroupByJoin;
};

const MembersPageContainer: React.FC<QueryResult> = props => {
  const membersData = props.data.allMembersJson.nodes;
  const currentMembersData = React.useMemo(
    () => membersData.filter(member => !member.graduation.isGraduated),
    [membersData]
  );
  const graduatedMembersData = React.useMemo(
    () => membersData.filter(member => member.graduation.isGraduated),
    [membersData]
  );
  const allMemberGroupByJoin = React.useMemo(
    () => groupMembersByJoin([...currentMembersData, ...graduatedMembersData]),
    [currentMembersData, graduatedMembersData]
  );
  const currentMemberGroupByJoin = React.useMemo(
    () => groupMembersByJoin(currentMembersData),
    [currentMembersData]
  );
  const graduatedMemberGroupByJoin = React.useMemo(
    () => groupMembersByJoin(graduatedMembersData),
    [graduatedMembersData]
  );

  const location = useLocation();
  const { filter } = queryString.parse(location.search);
  const currentFilter: MembersPageProps['currentFilter'] = React.useMemo(() => {
    switch (filter) {
      case 'current':
        return 'current';
      case 'graduated':
        return 'graduated';
      case 'all':
        return 'all';
      default:
        return 'current';
    }
  }, [filter]);
  const memberGroupsByJoin: MembersPageProps['memberGroupsByJoin'] = React.useMemo(() => {
    switch (filter) {
      case 'current':
        return currentMemberGroupByJoin;
      case 'graduated':
        return graduatedMemberGroupByJoin;
      case 'all':
        return allMemberGroupByJoin;
      default:
        return currentMemberGroupByJoin;
    }
  }, [
    filter,
    currentMemberGroupByJoin,
    graduatedMemberGroupByJoin,
    allMemberGroupByJoin,
  ]);

  return (
    <MembersPage
      currentFilter={currentFilter}
      memberGroupsByJoin={memberGroupsByJoin}
    />
  );
};

export default MembersPageContainer;
