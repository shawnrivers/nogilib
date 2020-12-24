import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MembersPageData } from 'server/pages/members';

export type MembersPageDataNode = {
  name: MembersPageData[0]['name'];
  nameNotations: {
    lastName: MembersPageData[0]['nameNotations']['lastName'];
    firstName: MembersPageData[0]['nameNotations']['firstName'];
    lastNameEn: MembersPageData[0]['nameNotations']['lastNameEn'];
    firstNameEn: MembersPageData[0]['nameNotations']['firstNameEn'];
  };
  join: MembersPageData[0]['join'];
  graduation: {
    isGraduated: MembersPageData[0]['graduation']['isGraduated'];
    graduatedDate: MembersPageData[0]['graduation']['graduatedDate'];
  };
  profileImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

export function useMembersPageQuery() {
  return useStaticQuery<{
    allMembersJson: {
      nodes: MembersPageDataNode[];
    };
  }>(graphql`
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
          profileImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
}
