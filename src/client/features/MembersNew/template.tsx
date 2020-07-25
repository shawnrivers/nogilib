/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Message } from 'client/components/atoms/Message';
import { Typography } from 'client/components/atoms/Typography';
import { TextSwitchLinkGroup } from 'client/components/molecules/buttonGroup/TextSwitchLinkGroup';
import { Header, Main } from 'client/components/templates/Page';
import { TextDivider } from 'client/features/Discography/components/atoms/TextDivider';
import { MemberResult } from 'server/actors/Members/models';
import { MemberCard } from 'client/components/molecules/card/MemberCard';
import { useTheme } from 'client/styles/tokens';

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

export type MembersProps = {
  currentGroup: 'current' | 'graduated' | 'all';
  memberGroupsByJoin: MemberGroupByYear[];
};

export const MEMBERS_PAGE_FILTER_ALL = 'all';
export const MEMBERS_PAGE_FILTER_CURRENT = 'current';
export const MEMBERS_PAGE_FILTER_GRADUATED = 'graduated';

export const Members: React.FC<MembersProps> = props => {
  const { currentGroup, memberGroupsByJoin } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      <Header>
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
              text: <Message text={MEMBERS_PAGE_FILTER_ALL} />,
              isSwitchedOn: currentGroup === MEMBERS_PAGE_FILTER_ALL,
              to: '/members',
            },
            {
              text: <Message text={MEMBERS_PAGE_FILTER_CURRENT} />,
              isSwitchedOn: currentGroup === MEMBERS_PAGE_FILTER_CURRENT,
              to: `/members?filter=${MEMBERS_PAGE_FILTER_CURRENT}`,
            },
            {
              text: <Message text={MEMBERS_PAGE_FILTER_GRADUATED} />,
              isSwitchedOn: currentGroup === MEMBERS_PAGE_FILTER_GRADUATED,
              to: `/members?filter=${MEMBERS_PAGE_FILTER_GRADUATED}`,
            },
          ]}
          css={css`
            text-transform: capitalize;
          `}
        />
      </Header>
      <Main>
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
                max-width: 800px;
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
                  elevation={3}
                  surfaceColor="standard"
                  borderRadius="m"
                  padding="m"
                />
              ))}
            </div>
          </div>
        ))}
      </Main>
    </React.Fragment>
  );
};
