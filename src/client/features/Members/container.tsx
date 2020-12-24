import * as React from 'react';
import { MemberResult } from 'server/actors/Members/models';
import { MembersPage } from 'client/features/Members/template';
import { sortByJoin, sortByGraduation, sortByMemberName } from 'utils/sorting';
import { useFilter } from 'client/hooks/useFilter';
import { MembersUrlFilter } from 'client/utils/urls';
import {
  MembersPageDataNode,
  useMembersPageQuery,
} from 'client/features/Members/query';

type MemberCard = Omit<MembersPageDataNode, 'profileImage'> & {
  profileImageFluid: MembersPageDataNode['profileImage']['childImageSharp']['fluid'];
};

type MemberGroupByYear = {
  join: MemberResult['join'];
  members: MemberCard[];
};

function getMemberCards(membersData: MembersPageDataNode[]): MemberCard[] {
  return membersData.map(({ profileImage, ...restFields }) => ({
    ...restFields,
    profileImageFluid: profileImage.childImageSharp.fluid,
  }));
}

function groupMembersByJoin(members: MemberCard[]): MemberGroupByYear[] {
  const memberGroupByJoin: MemberGroupByYear[] = [];
  const membersSortedByJoin = sortByJoin(members);

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

export type MembersPageProps = {
  currentFilter: MembersUrlFilter;
  memberGroupsByJoin: MemberGroupByYear[];
};

export const MembersPageContainer: React.FC = () => {
  const pageData = useMembersPageQuery();
  const memberData = pageData.allMembersJson.nodes;

  const memberCards = React.useMemo(() => {
    const membersData = sortByMemberName(memberData);

    return getMemberCards(membersData);
  }, [memberData]);

  const currentMembersData = React.useMemo(
    () => memberCards.filter(member => !member.graduation.isGraduated),
    [memberCards]
  );
  const graduatedMembersData = React.useMemo(
    () =>
      sortByGraduation(
        memberCards.filter(member => member.graduation.isGraduated)
      ),
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

  return memberCards ? (
    <MembersPage
      currentFilter={currentFilter}
      memberGroupsByJoin={memberGroupsByJoin}
    />
  ) : null;
};
