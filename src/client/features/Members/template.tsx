/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Message } from 'client/components/atoms/Message';
import { Typography } from 'client/components/atoms/Typography';
import { TextSwitchLinkGroup } from 'client/components/molecules/buttonGroup/TextSwitchLinkGroup';
import { PageContent } from 'client/components/templates/Page';
import { TextDivider } from 'client/components/atoms/TextDivider';
import { MemberResult } from 'server/actors/Members/models';
import { MemberCard } from 'client/components/molecules/card/MemberCard';
import { useAppTheme } from 'client/styles/tokens';
import {
  getMembersUrl,
  getMemberUrl,
  MembersUrlFilter,
} from 'client/utils/urls';

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
  const theme = useAppTheme();

  return (
    <PageContent
      header={
        <React.Fragment>
          <Typography
            variant="h1"
            css={css`
              margin-bottom: 0.3em;
              word-break: break-word;
              line-height: 1;
              text-transform: uppercase;
            `}
          >
            members
          </Typography>
          <TextSwitchLinkGroup
            variant="h2"
            textOn="onBackground"
            links={[
              {
                text: <Message text="all" />,
                isSwitchedOn: currentFilter === 'all',
                to: getMembersUrl(),
              },
              {
                text: <Message text="current" />,
                isSwitchedOn: currentFilter === 'current',
                to: getMembersUrl('current'),
              },
              {
                text: <Message text="graduated" />,
                isSwitchedOn: currentFilter === 'graduated',
                to: getMembersUrl('graduated'),
              },
            ]}
            css={css`
              text-transform: capitalize;
            `}
          />
        </React.Fragment>
      }
    >
      <React.Fragment>
        {memberGroupsByJoin.map(member => (
          <div key={member.join}>
            <TextDivider text={member.join} />
            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                grid-template-rows: auto;
                grid-gap: ${theme.spacing.m};
                justify-content: center;
                max-width: 60rem;
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
                  surfaceColor="standard"
                  borderRadius="m"
                  padding="m"
                />
              ))}
            </div>
          </div>
        ))}
      </React.Fragment>
    </PageContent>
  );
};
