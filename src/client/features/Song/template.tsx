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
import { Typography } from 'client/components/atoms/Typography';
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

type StyledComponentWithThemeProps = {
  theme: Theme;
};

const RowContainer = styled.div<StyledComponentWithThemeProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;

  & > * {
    width: 140px;
    margin: ${commonStyles.spacing.xs};
  }
`;

const memberCardCommonProps: Pick<
  MemberCardProps,
  'textSize' | 'borderRadius' | 'padding'
> = {
  textSize: 'body2',
  borderRadius: 's',
  padding: 's',
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
    <PageContent title={title} showBackButton>
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
        <TextDivider text={<Translation text="info" />} />
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
          0 ? (
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
              {creators.lyrics.length > 0 ? (
                <React.Fragment>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'standard' }}
                    css={css`
                      text-transform: capitalize;
                    `}
                  >
                    <Translation text="lyrics" />
                  </Typography>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'variant0' }}
                  >
                    <LocalizedList list={creators.lyrics} />
                  </Typography>
                </React.Fragment>
              ) : null}
              {creators.compose.length > 0 ? (
                <React.Fragment>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'standard' }}
                    css={css`
                      text-transform: capitalize;
                    `}
                  >
                    <Translation text="compose" />
                  </Typography>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'variant0' }}
                  >
                    <LocalizedList list={creators.compose} />
                  </Typography>
                </React.Fragment>
              ) : null}
              {creators.arrange.length > 0 ? (
                <React.Fragment>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'standard' }}
                    css={css`
                      text-transform: capitalize;
                    `}
                  >
                    <Translation text="arrange" />
                  </Typography>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'variant0' }}
                  >
                    <LocalizedList list={creators.arrange} />
                  </Typography>
                </React.Fragment>
              ) : null}
              {creators.direct.length > 0 ? (
                <React.Fragment>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'standard' }}
                    css={css`
                      text-transform: capitalize;
                    `}
                  >
                    <Translation text="direct" />
                  </Typography>
                  <Typography
                    variant="body2"
                    element="span"
                    textColor={{ on: 'onBackground', variant: 'variant0' }}
                  >
                    <LocalizedList list={creators.direct} />
                  </Typography>
                </React.Fragment>
              ) : null}
            </div>
          ) : null}
        </div>
        <TextDivider text={<Translation text="performers" />} />
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
              <div>
                {formation.length > 1 ? (
                  formation.map((row, index) => (
                    <div key={index}>
                      <Typography
                        variant="h5"
                        element="h4"
                        css={css`
                          margin-top: 1em;
                          text-align: center;
                        `}
                      >
                        <LocalizedNumber num={index + 1} type="row" />
                      </Typography>
                      <RowContainer>
                        {row.map(memberName => {
                          if (memberName !== MemberNameKey.KojimaHaruna) {
                            const member = members[memberName];

                            return (
                              <MemberCard
                                key={member.name}
                                name={
                                  member.nameNotations.lastName +
                                  member.nameNotations.firstName
                                }
                                profileImage={member.profileImage}
                                to={getMemberUrl(member.name)}
                                {...memberCardCommonProps}
                              />
                            );
                          } else {
                            return (
                              <MemberCard
                                key={'小嶋陽菜'}
                                name={'小嶋陽菜'}
                                profileImage={KOJIHARU_IMAGE_SRC}
                                {...memberCardCommonProps}
                              />
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
                          <MemberCard
                            key={member.name}
                            name={
                              member.nameNotations.lastName +
                              member.nameNotations.firstName
                            }
                            profileImage={member.profileImage}
                            to={getMemberUrl(member.name)}
                            {...memberCardCommonProps}
                          />
                        );
                      } else {
                        return (
                          <MemberCard
                            key={'小嶋陽菜'}
                            name={'小嶋陽菜'}
                            profileImage={KOJIHARU_IMAGE_SRC}
                            {...memberCardCommonProps}
                          />
                        );
                      }
                    })}
                  </RowContainer>
                )}
              </div>
            </section>
          ) : null}
        </div>
      </React.Fragment>
    </PageContent>
  );
};
