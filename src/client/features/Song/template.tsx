/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { LocalizedList } from 'client/components/atoms/locales/LocalizedList';
import { LocalizedNumber } from 'client/components/atoms/locales/LocalizedNumber';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { SongType } from 'server/actors/Songs/constants/songType';
import { KOJIHARU_IMAGE_SRC } from 'server/constants/paths';
import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { PageContent } from 'client/components/templates/Page';
import { Hashtag } from 'client/components/atoms/Hashtag';
import { commonStyles, Theme, useAppTheme } from 'client/styles/tokens';
import { GridArtworkImage } from 'client/components/atoms/images/GirdArtworkImage';
import { TextDivider } from 'client/components/molecules/TextDivider';
import {
  MemberCard,
  MemberCardProps,
} from 'client/components/molecules/cards/MemberCard';
import { getMemberUrl } from 'client/utils/urls';
import { useTranslations } from 'client/hooks/useTranslations';
import { useAppContext } from 'client/hooks/useAppContext';
import { NameNotationsForIntl, useIntl } from 'client/hooks/useIntl';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';

type StyledComponentWithThemeProps = {
  theme: Theme;
};

const RowContainer = styled.ul<StyledComponentWithThemeProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5em;

  & > * {
    width: 110px;
    margin: ${commonStyles.spacing.xs};
  }
`;

const KOJIHARU_NAME_NOTATIONS: NameNotationsForIntl = {
  lastName: '小嶋',
  firstName: '陽菜',
  lastNameEn: 'kojima',
  firstNameEn: 'haruna',
};

type PerformerCardProps = Pick<MemberCardProps, 'profileImage' | 'to'> & {
  nameNotations: NameNotationsForIntl;
};

const PerformerCard: React.FC<PerformerCardProps> = props => {
  const { formatMemberName } = useIntl();

  return (
    <MemberCard
      name={formatMemberName(props.nameNotations)}
      profileImage={props.profileImage}
      to={props.to}
      textSize="body3"
      borderRadius="s"
      padding="xs"
    />
  );
};

const PerformersTag: React.FC<{
  singleNumber: string;
  tagName: string;
}> = props => {
  const { singleNumber, tagName } = props;
  const { Translation } = useTranslations();
  const { language } = useAppContext();

  if (tagName === '') {
    return null;
  }

  if (tagName.includes('generation')) {
    return (
      <Hashtag>
        <Translation text={tagName as any} />
      </Hashtag>
    );
  }

  if (tagName === 'selected' || tagName === 'under') {
    return language === 'en' ? (
      <Hashtag>
        <LocalizedNumber num={singleNumber} type="cd" />{' '}
        <Translation text="single" /> <Translation text={tagName} />{' '}
        <Translation text="members" />
      </Hashtag>
    ) : (
      <Hashtag>
        <LocalizedNumber num={singleNumber} type="cd" />
        <Translation text="single" />
        <Translation text={tagName} />
        <Translation text="members" />
      </Hashtag>
    );
  }

  return <Hashtag>{tagName}</Hashtag>;
};

type SongPerformerType = {
  name: string;
  nameNotations: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
  };
  profileImage: string;
  singleImages: string[];
};

interface SongPageProps {
  title: string;
  songTags: string[];
  type: SongType;
  artwork: string;
  performersTag: {
    singleNumber: string;
    name: string;
  };
  formation: string[][];
  members: { [key: string]: SongPerformerType };
  centers: string[];
  creators: {
    arrange: string[];
    compose: string[];
    direct: string[];
    lyrics: string[];
  };
}

export const SongPage: React.FC<SongPageProps> = ({
  title,
  type,
  songTags,
  artwork,
  performersTag,
  formation,
  members,
  creators,
}) => {
  useScrollRestoration();
  const theme = useAppTheme();
  const { Translation } = useTranslations();

  return (
    <PageContent title={title} showBackButton titleTextTransform="initial">
      <React.Fragment>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 0.8em;
          `}
        >
          <Hashtag
            css={css`
              &:not(:first-of-type) {
                margin-left: 0.4em;
              }
            `}
          >
            <Translation text={type as any} />
          </Hashtag>
          {songTags.map((tag, index) => (
            <Hashtag
              key={index}
              css={css`
                &:not(:first-of-type) {
                  margin-left: 0.4em;
                }
              `}
            >
              {tag}
            </Hashtag>
          ))}
        </div>
        <section>
          <TextDivider text={<Translation text="info" />} element="h2" />
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;

              & > * {
                margin: ${theme.spacing.s};
              }
            `}
          >
            <GridArtworkImage
              src={artwork}
              alt={title}
              shadow
              fixedSize
              css={css`
                width: 200px;
                height: 200px;
              `}
            />
            {creators.lyrics.length +
              creators.compose.length +
              creators.arrange.length +
              creators.direct.length >
              0 && (
              <div
                css={css`
                  display: grid;
                  grid-template-columns: max-content auto;
                  grid-template-rows: auto;
                  grid-gap: ${theme.spacing.m};
                  margin-top: 0.5em;
                  align-items: center;
                `}
              >
                {creators.lyrics.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="lyrics" />
                    </InfoItemLabel>
                    <InfoItemValue>
                      <LocalizedList list={creators.lyrics} />
                    </InfoItemValue>
                  </React.Fragment>
                )}
                {creators.compose.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="compose" />
                    </InfoItemLabel>
                    <InfoItemValue>
                      <LocalizedList list={creators.compose} />
                    </InfoItemValue>
                  </React.Fragment>
                )}
                {creators.arrange.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="arrange" />
                    </InfoItemLabel>
                    <InfoItemValue>
                      <LocalizedList list={creators.arrange} />
                    </InfoItemValue>
                  </React.Fragment>
                )}
                {creators.direct.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="direct" />
                    </InfoItemLabel>
                    <InfoItemValue>
                      <LocalizedList list={creators.direct} />
                    </InfoItemValue>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
        </section>
        <section>
          <TextDivider text={<Translation text="performers" />} element="h2" />
          <div>
            {formation.length > 0 ? (
              <section>
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                  `}
                >
                  {performersTag.singleNumber !== '' &&
                  performersTag.name !== '' ? (
                    <PerformersTag
                      singleNumber={performersTag.singleNumber}
                      tagName={performersTag.name}
                    />
                  ) : null}
                </div>
                <div
                  css={css`
                    margin-top: 1em;
                  `}
                >
                  {formation.length > 1 ? (
                    formation.map((row, index) => (
                      <div key={index}>
                        <SectionSubtitle
                          element="h3"
                          css={css`
                            margin-top: 0.5em;
                          `}
                        >
                          <LocalizedNumber num={index + 1} type="row" />
                        </SectionSubtitle>
                        <RowContainer>
                          {row.map(memberName => {
                            if (memberName !== MemberNameKey.KojimaHaruna) {
                              const member = members[memberName];

                              return (
                                <li key={member.name}>
                                  <PerformerCard
                                    nameNotations={member.nameNotations}
                                    profileImage={member.profileImage}
                                    to={getMemberUrl(member.name)}
                                  />
                                </li>
                              );
                            } else {
                              return (
                                <li key={'小嶋陽菜'}>
                                  <PerformerCard
                                    nameNotations={KOJIHARU_NAME_NOTATIONS}
                                    profileImage={KOJIHARU_IMAGE_SRC}
                                  />
                                </li>
                              );
                            }
                          })}
                        </RowContainer>
                      </div>
                    ))
                  ) : (
                    <RowContainer>
                      {formation[0].map(memberName => {
                        if (memberName !== MemberNameKey.KojimaHaruna) {
                          const member = members[memberName];
                          return (
                            <li key={member.name}>
                              <PerformerCard
                                nameNotations={member.nameNotations}
                                profileImage={member.profileImage}
                                to={getMemberUrl(member.name)}
                              />
                            </li>
                          );
                        } else {
                          return (
                            <li key={'小嶋陽菜'}>
                              <PerformerCard
                                nameNotations={KOJIHARU_NAME_NOTATIONS}
                                profileImage={KOJIHARU_IMAGE_SRC}
                              />
                            </li>
                          );
                        }
                      })}
                    </RowContainer>
                  )}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </React.Fragment>
    </PageContent>
  );
};
