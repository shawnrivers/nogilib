import * as React from 'react';
import { graphql } from 'gatsby';
import { MemberResult } from 'server/actors/Members/models';
import { MembersPage } from 'client/features/Members/template';
import { sortByJoin } from 'utils/arrays';
import { useFilter } from 'client/hooks/useFilter';
import { MembersUrlFilter } from 'client/utils/urls';

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
        profileImages {
          gallery
        }
      }
    }
  }
`;

type QueryResultMember = Pick<MemberResult, 'name' | 'join' | 'graduation'> & {
  nameNotations: Pick<
    MemberResult['nameNotations'],
    'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
  >;
  profileImages: Pick<MemberResult['profileImages'], 'gallery'>;
};

type QueryResult = {
  data: {
    allMembersJson: {
      nodes: QueryResultMember[];
    };
  };
};

export type MembersPageProps = {
  currentFilter: MembersUrlFilter;
  memberGroupsByJoin: MemberGroupByYear[];
};

const MembersPageContainer: React.FC<QueryResult> = props => {
  const membersData = props.data.allMembersJson.nodes;
  const memberCards = getMemberCards(membersData);
  const currentMembersData = React.useMemo(
    () => memberCards.filter(member => !member.graduation.isGraduated),
    [memberCards]
  );
  const graduatedMembersData = React.useMemo(
    () => memberCards.filter(member => member.graduation.isGraduated),
    [memberCards]
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

  const filter = useFilter();

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

type MemberCard = Omit<QueryResultMember, 'profileImages'> & {
  profileImage: string;
};

type MemberGroupByYear = {
  join: MemberResult['join'];
  members: MemberCard[];
};

function getMemberCards(membersData: QueryResultMember[]): MemberCard[] {
  return membersData.map(({ profileImages, ...restFields }) => ({
    ...restFields,
    profileImage: profileImages.gallery.slice().reverse()[0],
  }));
}

function groupMembersByJoin(members: MemberCard[]): MemberGroupByYear[] {
  const memberGroupByJoin: MemberGroupByYear[] = [];
  const membersSortedByJoin = sortByJoin(members, 'asc');

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
          memberGroupByJoin.push({
            join: member.join,
            members: [member],
          });
          break;
        }
      }
    }
  }

  return memberGroupByJoin;
}
