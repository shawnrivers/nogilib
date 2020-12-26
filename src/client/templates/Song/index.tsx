/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { PageContent } from 'client/components/templates/Page';
import { Hashtag } from 'client/components/atoms/Hashtag';
import { commonStyles, useAppTheme } from 'client/styles/tokens';
import { GridArtworkImage } from 'client/components/atoms/images/GirdArtworkImage';
import { TextDivider } from 'client/components/molecules/TextDivider';
import {
  MemberCard,
  MemberCardProps,
} from 'client/components/molecules/cards/MemberCard';
import { getMemberUrl } from 'client/utils/urls';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { NameNotationsForIntl, useIntl } from 'client/i18n/hooks/useIntl';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { PageHelmet } from 'client/layouts/PageHelmet';
import { SongPageProps } from 'pages/songs/{SongJson.key}';
import { toCdNumber } from 'utils/strings';

const RowContainer: React.FC = props => (
  <ul
    css={css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 0.5em;

      & > * {
        width: 110px;
        margin: ${commonStyles.spacing.xs};
      }
    `}
  >
    {props.children}
  </ul>
);

type PerformerCardProps = Pick<
  MemberCardProps,
  'profileImageFluid' | 'to' | 'position'
> & {
  nameNotations: NameNotationsForIntl;
};

const PerformerCard: React.FC<PerformerCardProps> = props => {
  const { formatMemberName } = useIntl();

  return (
    <MemberCard
      name={formatMemberName(props.nameNotations).name}
      lang={formatMemberName(props.nameNotations).lang}
      profileImageFluid={props.profileImageFluid}
      to={props.to}
      position={props.position}
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

export const SongPage: React.FC<SongPageProps> = props => {
  useScrollRestoration();

  const {
    title,
    type,
    single,
    albums,
    otherCds,
    artworkFluid,
    performersTag,
    performers,
    creators,
  } = props;
  const theme = useAppTheme();
  const { Translation, getTranslation } = useTranslations();
  const { formatWords, formatNth, formatWordsWithCommas } = useIntl();

  const songTags = React.useMemo(
    () => [
      ...[single]
        .filter(({ number }) => number !== '')
        .map(({ number }) => `${toCdNumber(number)} single`),
      ...albums.map(({ number }) => `${toCdNumber(number)} album`),
      ...otherCds.map(({ number }) => `${toCdNumber(number)} digital`),
    ],
    [single, albums, otherCds]
  );

  return (
    <>
      <PageHelmet title={title} options={{ textTransform: 'none' }} />
      <PageContent
        title={{ text: title, lang: 'ja' }}
        showBackButton
        titleTextTransform="initial"
      >
        <>
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
                fluid={artworkFluid}
                alt={formatWords([title, getTranslation('artwork')])}
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
                    <>
                      <InfoItemLabel>
                        <Translation text="lyrics" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.lyrics)}
                      </InfoItemValue>
                    </>
                  )}
                  {creators.compose.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="compose" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.compose)}
                      </InfoItemValue>
                    </>
                  )}
                  {creators.arrange.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="arrange" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.arrange)}
                      </InfoItemValue>
                    </>
                  )}
                  {creators.direct.length > 0 && (
                    <>
                      <InfoItemLabel>
                        <Translation text="direct" />
                      </InfoItemLabel>
                      <InfoItemValue lang="ja">
                        {formatWordsWithCommas(creators.direct)}
                      </InfoItemValue>
                    </>
                  )}
                </div>
              )}
            </div>
          </section>
          {performers.length > 0 && (
            <section>
              <TextDivider
                text={<Translation text="performers" />}
                element="h2"
              />
              <div>
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
                    {performers.map((row, index) => (
                      <section key={index}>
                        {performers.length > 1 && (
                          <SectionSubtitle
                            element="h3"
                            css={css`
                              margin-top: 0.5em;
                            `}
                          >
                            {formatNth({ num: index + 1, unit: 'row' })}
                          </SectionSubtitle>
                        )}
                        <RowContainer>
                          {row.map(member => (
                            <li key={member.name}>
                              <PerformerCard
                                nameNotations={member.nameNotations}
                                profileImageFluid={member.profileImageFluid}
                                position={member.position ?? undefined}
                                to={
                                  member.isMember
                                    ? getMemberUrl(member.name)
                                    : undefined
                                }
                              />
                            </li>
                          ))}
                        </RowContainer>
                      </section>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          )}
        </>
      </PageContent>
    </>
  );
};
