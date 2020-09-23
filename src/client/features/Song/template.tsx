/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
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
import { NameNotationsForIntl, useIntl } from 'client/hooks/useIntl';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { SongPageProps } from 'client/features/Song/container';

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
      name={formatMemberName(props.nameNotations).name}
      lang={formatMemberName(props.nameNotations).lang}
      profileImage={props.profileImage}
      to={props.to}
      textSize="body3"
      borderRadius="s"
      padding="xs"
    />
  );
};

const PerformersTag: React.FC<SongPageProps['performersTag']> = props => {
  const { name, album } = props;
  const { getTranslation } = useTranslations();
  const { formatNth, formatWords } = useIntl();

  if (name === '') {
    return null;
  }

  if (name.includes('generation')) {
    return <Hashtag>{getTranslation(name as any)}</Hashtag>;
  }

  if (name === 'selected' || name === 'under') {
    if (album.number !== null) {
      const number = formatNth({ num: album.number, unit: 'cd' });

      const words = [
        number ?? getTranslation(album.number as any),
        getTranslation(album.type as any),
        getTranslation(name as any),
        getTranslation('members'),
      ];

      return <Hashtag>{formatWords(words)}</Hashtag>;
    }
  }

  return <Hashtag lang="ja">{name}</Hashtag>;
};

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
  const { formatNth, formatWordsWithCommas } = useIntl();

  return (
    <PageContent
      title={{ text: title, lang: 'ja' }}
      showBackButton
      titleTextTransform="initial"
    >
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
                    <InfoItemValue lang="ja">
                      {formatWordsWithCommas(creators.lyrics)}
                    </InfoItemValue>
                  </React.Fragment>
                )}
                {creators.compose.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="compose" />
                    </InfoItemLabel>
                    <InfoItemValue lang="ja">
                      {formatWordsWithCommas(creators.compose)}
                    </InfoItemValue>
                  </React.Fragment>
                )}
                {creators.arrange.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="arrange" />
                    </InfoItemLabel>
                    <InfoItemValue lang="ja">
                      {formatWordsWithCommas(creators.arrange)}
                    </InfoItemValue>
                  </React.Fragment>
                )}
                {creators.direct.length > 0 && (
                  <React.Fragment>
                    <InfoItemLabel>
                      <Translation text="direct" />
                    </InfoItemLabel>
                    <InfoItemValue lang="ja">
                      {formatWordsWithCommas(creators.direct)}
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
                  {performersTag.name !== '' ? (
                    <PerformersTag {...performersTag} />
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
                          {formatNth({ num: index + 1, unit: 'row' })}
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
