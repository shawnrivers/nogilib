/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getMembersData } from 'api/members';
import { useFilter } from 'client/hooks/useFilter';
import { MemberResult } from 'server/actors/Members/models';
import { MembersPageData } from 'server/pages/members';
import { sortByGraduation, sortByJoin, sortByMemberName } from 'utils/sorting';
import { MemberCard } from 'client/components/molecules/cards/MemberCard';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { TextSwitchLinkGroup } from 'client/components/molecules/TextSwitchLinkGroup';
import { PageContent } from 'client/components/templates/Page';
import { PageHelmet } from 'client/layouts/PageHelmet';
import { commonStyles } from 'client/styles/tokens';
import { getMembersUrl, getMemberUrl } from 'client/utils/urls';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useIntl } from 'client/i18n/hooks/useIntl';

// export const query = graphql`
//   {
//     allMembersJson {
//       nodes {
//         name
//         nameNotations {
//           lastName
//           firstName
//           lastNameEn
//           firstNameEn
//         }
//         join
//         graduation {
//           isGraduated
//           graduatedDate
//         }
//         profileImage {
//           childImageSharp {
//             gatsbyImageData(width: 200, layout: CONSTRAINED)
//           }
//         }
//       }
//     }
//   }
// `;

// type MembersPageDataNode = {
//   name: MembersPageData[0]['name'];
//   nameNotations: {
//     lastName: MembersPageData[0]['nameNotations']['lastName'];
//     firstName: MembersPageData[0]['nameNotations']['firstName'];
//     lastNameEn: MembersPageData[0]['nameNotations']['lastNameEn'];
//     firstNameEn: MembersPageData[0]['nameNotations']['firstNameEn'];
//   };
//   join: MembersPageData[0]['join'];
//   graduation: {
//     isGraduated: MembersPageData[0]['graduation']['isGraduated'];
//     graduatedDate: MembersPageData[0]['graduation']['graduatedDate'];
//   };
//   profileImage: {
//     childImageSharp: {
//       gatsbyImageData: IGatsbyImageData;
//     };
//   };
// };

// type MemberCard = Omit<MembersPageDataNode, 'profileImage'> & {
//   profileImageFluid: MembersPageDataNode['profileImage']['childImageSharp']['gatsbyImageData'];
// };

type MemberGroupByYear = {
  join: MemberResult['join'];
  members: MembersPageData;
};

// function getMemberCards(membersData: MembersPageDataNode[]): MemberCard[] {
//   return membersData.map(({ profileImage, ...restFields }) => ({
//     ...restFields,
//     profileImageFluid: profileImage.childImageSharp.gatsbyImageData,
//   }));
// }

function groupMembersByJoin(members: MembersPageData): MemberGroupByYear[] {
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

type MembersPageProps = {
  allMemberGroupsByJoin: MemberGroupByYear[];
  currentMemberGroupsByJoin: MemberGroupByYear[];
  graduateMemberGroupsByJoin: MemberGroupByYear[];
};

export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const membersData = sortByMemberName(await getMembersData());

  const currentMembersData = membersData.filter(
    member => !member.graduation.isGraduated
  );
  const graduatedMembersData = sortByGraduation(
    membersData.filter(member => member.graduation.isGraduated)
  );
  const allMemberGroupsByJoin = groupMembersByJoin([
    ...currentMembersData,
    ...graduatedMembersData,
  ]);
  const currentMemberGroupsByJoin = groupMembersByJoin(currentMembersData);
  const graduateMemberGroupsByJoin = groupMembersByJoin(graduatedMembersData);

  return {
    props: {
      allMemberGroupsByJoin,
      currentMemberGroupsByJoin,
      graduateMemberGroupsByJoin,
    },
  };
};

const MembersPage: React.FC<MembersPageProps> = props => {
  const {
    allMemberGroupsByJoin,
    currentMemberGroupsByJoin,
    graduateMemberGroupsByJoin,
  } = props;

  const filter = useFilter();
  const { getTranslation } = useTranslations();
  const { formatMemberName } = useIntl();
  const { locale } = useRouter();

  const currentFilter = React.useMemo(() => {
    switch (filter) {
      case 'current':
      case 'graduated':
      case 'all':
        return filter;
      default:
        return 'current';
    }
  }, [filter]);

  const memberGroupsByJoin = React.useMemo(() => {
    switch (filter) {
      case 'current':
        return currentMemberGroupsByJoin;
      case 'graduated':
        return graduateMemberGroupsByJoin;
      case 'all':
        return allMemberGroupsByJoin;
      default:
        return currentMemberGroupsByJoin;
    }
  }, [
    filter,
    currentMemberGroupsByJoin,
    graduateMemberGroupsByJoin,
    allMemberGroupsByJoin,
  ]);

  return (
    <>
      <PageHelmet title={getTranslation('members')} />
      <PageContent title={{ text: getTranslation('members'), lang: locale }}>
        <>
          <TextSwitchLinkGroup
            variant="h4"
            textOn="onBackground"
            capitalize
            links={[
              {
                text: getTranslation('current'),
                isSwitchedOn: currentFilter === 'current',
                href: getMembersUrl('current'),
              },
              {
                text: getTranslation('graduated'),
                isSwitchedOn: currentFilter === 'graduated',
                href: getMembersUrl('graduated'),
              },
              {
                text: getTranslation('all'),
                isSwitchedOn: currentFilter === 'all',
                href: getMembersUrl('all'),
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
                      href={getMemberUrl(member.name)}
                      textSize="body2"
                      borderRadius="s"
                      padding="xs"
                      width={130}
                      css={css`
                        margin: ${commonStyles.spacing.xs};
                      `}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      </PageContent>
    </>
  );
};

export default MembersPage;
