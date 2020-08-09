/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { TextSwitchLinkGroup } from 'client/components/molecules/TextSwitchLinkGroup';
import { PageContent } from 'client/components/templates/Page';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { MemberResult } from 'server/actors/Members/models';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { commonStyles } from 'client/styles/tokens';
import {
  getMembersUrl,
  getMemberUrl,
  MembersUrlFilter,
} from 'client/utils/urls';
import { useTranslations } from 'client/hooks/useTranslations';

export type MemberGroupByYear = {
  join: MemberResult['join'];
  members: {
    name: MemberResult['name'];
    nameNotations: Pick<
      MemberResult['nameNotations'],
      'lastName' | 'firstName' | 'lastNameEn' | 'firstNameEn'
    >;
    join: MemberResult['join'];
    graduation: MemberResult['graduation'];
    profileImage: MemberResult['profileImage'];
  }[];
};

export type MembersPageProps = {
  currentFilter: MembersUrlFilter;
  memberGroupsByJoin: MemberGroupByYear[];
};

export const MembersPage: React.FC<MembersPageProps> = props => {
  const { currentFilter, memberGroupsByJoin } = props;
  const { Translation } = useTranslations();

  return (
    <PageContent title="members">
      <React.Fragment>
        <TextSwitchLinkGroup
          variant="h2"
          textOn="onBackground"
          links={[
            {
              text: <Translation text="current" />,
              isSwitchedOn: currentFilter === 'current',
              to: getMembersUrl('current'),
            },
            {
              text: <Translation text="graduated" />,
              isSwitchedOn: currentFilter === 'graduated',
              to: getMembersUrl('graduated'),
            },
            {
              text: <Translation text="all" />,
              isSwitchedOn: currentFilter === 'all',
              to: getMembersUrl('all'),
            },
          ]}
          css={css`
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            text-transform: capitalize;
          `}
        />
        {memberGroupsByJoin.map(member => (
          <div key={member.join}>
            <TextDivider text={member.join} />
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: auto;
              `}
            >
              {member.members.map(member => (
                <MemberCard
                  key={member.name}
                  profileImage={member.profileImage}
                  name={
                    member.nameNotations.lastName +
                    member.nameNotations.firstName
                  }
                  to={getMemberUrl(member.name)}
                  textSize="em2"
                  borderRadius="s"
                  padding="s"
                  css={css`
                    width: 150px;
                    margin: ${commonStyles.spacing.xs};
                  `}
                />
              ))}
            </div>
          </div>
        ))}
      </React.Fragment>
    </PageContent>
  );
};
