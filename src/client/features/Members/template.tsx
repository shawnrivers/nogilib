/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { TextSwitchLinkGroup } from 'client/components/molecules/TextSwitchLinkGroup';
import { PageContent } from 'client/components/templates/Page';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { commonStyles } from 'client/styles/tokens';
import { getMembersUrl, getMemberUrl } from 'client/utils/urls';
import { useTranslations } from 'client/hooks/useTranslations';
import { useIntl } from 'client/hooks/useIntl';
import { MembersPageProps } from 'pages/members';

export const MembersPage: React.FC<MembersPageProps> = props => {
  const { currentFilter, memberGroupsByJoin } = props;
  const { getTranslation } = useTranslations();
  const { formatMemberName } = useIntl();

  return (
    <PageContent title="members">
      <React.Fragment>
        <TextSwitchLinkGroup
          variant="h4"
          textOn="onBackground"
          capitalize
          links={[
            {
              text: getTranslation('current'),
              isSwitchedOn: currentFilter === 'current',
              to: getMembersUrl('current'),
            },
            {
              text: getTranslation('graduated'),
              isSwitchedOn: currentFilter === 'graduated',
              to: getMembersUrl('graduated'),
            },
            {
              text: getTranslation('all'),
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
          <section key={member.join}>
            <TextDivider
              text={getTranslation(`join: ${member.join}` as any)}
              element="h2"
            />
            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: auto;
              `}
            >
              {member.members.map(member => (
                <li key={member.name}>
                  <MemberCard
                    profileImage={member.profileImage}
                    name={formatMemberName(member.nameNotations).name}
                    lang={formatMemberName(member.nameNotations).lang}
                    nameElement="h3"
                    to={getMemberUrl(member.name)}
                    textSize="body2"
                    borderRadius="s"
                    padding="xs"
                    css={css`
                      width: 130px;
                      margin: ${commonStyles.spacing.xs};
                    `}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </React.Fragment>
    </PageContent>
  );
};
