import { css } from '@emotion/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { getMemberData } from 'client/api/member';
import { Card } from 'client/components/atoms/Card';
import { Divider } from 'client/components/atoms/Divider';
import { AspectRatioImage } from 'client/components/atoms/image/AspectRatioImage';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/layout/PageContent';
import { PageHelmet } from 'client/components/layout/PageHelmet';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { GlowStickBadge } from 'client/components/pages/member/GlowStickBadge';
import {
  PositionBadge,
  PositionBadgeProps,
} from 'client/components/pages/member/PositionBadge';
import { useIntl } from 'client/i18n/hooks/useIntl';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';
import { Position } from 'db/src/actors/Members/types';
import { MemberPageData } from 'db/src/pages/member';
import { filterDuplicate } from 'utils/array';

const NON_ABSENT_POSITIONS = ['center', 'fukujin', 'selected', 'under'];

const PositionBadgeIndicator: React.FC<{
  position: PositionBadgeProps['position'];
}> = props => {
  const { position } = props;
  const { getTranslation } = useTranslations();
  const caption = NON_ABSENT_POSITIONS.includes(position) ? position : 'absent';

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <PositionBadge position={position} />
      <Typography
        variant="body3"
        as="span"
        textColor={{
          on: 'onBackground',
          variant: 'variant0',
        }}
        css={css`
          text-transform: capitalize;
          margin-top: 0.5em;
          line-height: 1;
        `}
      >
        {getTranslation(caption as any)}
      </Typography>
    </div>
  );
};

function getPositionOrder(position: Position): number {
  switch (position) {
    case 'center':
      return 4;
    case 'fukujin':
      return 3;
    case 'selected':
      return 2;
    case 'under':
      return 1;
    default:
      return 0;
  }
}

const PositionBadgeIndicatorsGroup: React.FC<{
  positionTypes: Position[];
}> = props => {
  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 1.5em;
      `}
    >
      {props.positionTypes.map(position => (
        <li
          key={position}
          css={css`
            margin: 0.3em;
            width: 60px;
          `}
        >
          <PositionBadgeIndicator position={position} />
        </li>
      ))}
    </ul>
  );
};

type PathParams = { name: string };

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const memberData = await getMemberData();

  return {
    paths: ['ja', 'en', 'zh']
      .map(locale =>
        memberData.map(member => ({
          params: {
            name: member.name,
          },
          locale,
        }))
      )
      .flat(),
    fallback: false,
  };
};

type PageProps = MemberPageData;

export const getStaticProps: GetStaticProps<PageProps, PathParams> = async ({
  params,
}) => {
  const memberData = await getMemberData();

  if (params) {
    const member = memberData.find(member => member.name === params.name);

    if (member) {
      const { positionsHistory, ...rest } = member;

      return {
        props: {
          positionsHistory: positionsHistory
            .slice()
            .reverse()
            .filter(history => history.position !== 'none'),
          ...rest,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};

const MemberPage: React.FC<PageProps> = props => {
  const {
    nameNotations,
    profileImage,
    sites,
    join,
    graduation,
    birthday,
    height,
    bloodType,
    origin,
    units,
    corps,
    photoAlbums,
    positionsHistory,
    glowStickColor,
    gallery,
  } = props;

  const { locale } = useRouter();
  const { Translation, getTranslation } = useTranslations();
  const { formatWords, formatDate, formatWordsWithCommas } = useIntl();

  const kanjiName = [nameNotations.lastName, nameNotations.firstName].join(' ');
  const enName = [nameNotations.lastNameEn, nameNotations.firstNameEn].join(
    ' '
  );
  const furiganaName = [
    nameNotations.lastNameFurigana,
    nameNotations.firstNameFurigana,
  ].join(' ');
  const primaryName = {
    text: locale !== 'en' ? kanjiName : enName,
    lang: locale !== 'en' ? 'ja' : 'en',
  };
  const secondaryName = {
    text: locale === 'ja' ? furiganaName : locale === 'zh' ? enName : kanjiName,
    lang: locale === 'ja' ? 'ja-Hira' : locale === 'zh' ? 'en' : 'ja',
  };

  const positionTypes = React.useMemo(
    () =>
      filterDuplicate(
        positionsHistory
          .map(record => record.position)
          .sort(
            (positionA, positionB) =>
              getPositionOrder(positionB) - getPositionOrder(positionA)
          )
          .map(position =>
            NON_ABSENT_POSITIONS.includes(position) ? position : 'none'
          )
      ),
    [positionsHistory]
  );

  return (
    <>
      <PageHelmet
        title={primaryName.text}
        options={{ textTransform: 'capitalize' }}
      />
      <PageContent
        title={{ ...primaryName, textTransform: 'capitalize' }}
        titleCaption={secondaryName}
        subtitle={{
          text: getTranslation('member'),
          lang: locale,
        }}
      >
        <section>
          <TextDivider text={<Translation text="profile" />} element="h2" />
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;

              & > * {
                margin: ${commonStyles.spacing.s};
              }
            `}
          >
            <div
              css={css`
                border-radius: ${commonStyles.borderRadius.m};
                border: 3px solid
                  var(${getColorVarName('onBackground', 'standard')});
                overflow: hidden;
                width: 200px;
                max-height: 240px;
              `}
            >
              <AspectRatioImage
                src={profileImage.lg}
                srcSet={`${profileImage.sm}, ${profileImage.md} 2x, ${profileImage.lg} 3x`}
                alt={formatWords([
                  locale !== 'en'
                    ? nameNotations.lastName + nameNotations.firstName
                    : enName,
                  getTranslation('profile image'),
                ])}
                aspectRatio={5 / 6}
              />
            </div>
            <dl
              css={css`
                display: grid;
                grid-template-columns: max-content auto;
                grid-template-rows: auto;
                row-gap: ${commonStyles.spacing.xs};
                column-gap: ${commonStyles.spacing.s};
                margin-top: 0.5em;
                align-items: center;
              `}
            >
              <InfoItemLabel as="dt">
                <Translation text="join" />
              </InfoItemLabel>
              <InfoItemValue as="dd">
                <Translation text={('join: ' + join) as any} />{' '}
                {graduation.isGraduated
                  ? `(${getTranslation('graduate')})`
                  : null}
              </InfoItemValue>
              <InfoItemLabel as="dt">
                <Translation text="birthday" />
              </InfoItemLabel>
              <InfoItemValue as="dd">
                <time dateTime={birthday}>{formatDate(birthday)}</time>
              </InfoItemValue>
              <InfoItemLabel as="dt">
                <Translation text="height" />
              </InfoItemLabel>
              <InfoItemValue as="dd">{height}cm</InfoItemValue>
              <InfoItemLabel as="dt">
                <Translation text="blood type" />
              </InfoItemLabel>
              <InfoItemValue
                css={css`
                  text-transform: uppercase;
                `}
              >
                <Translation text={bloodType} />
              </InfoItemValue>
              <InfoItemLabel as="dt">
                <Translation text="birthplace" />
              </InfoItemLabel>
              <InfoItemValue as="dd">
                <Translation text={origin as any} />
              </InfoItemValue>
              {units.length > 0 && (
                <>
                  <InfoItemLabel as="dt">
                    <Translation text="units" />
                  </InfoItemLabel>
                  <InfoItemValue as="dd" lang="ja">
                    {formatWordsWithCommas(units)}
                  </InfoItemValue>
                </>
              )}
              {corps.length > 0 && (
                <>
                  <InfoItemLabel as="dt">
                    <Translation text="corps" />
                  </InfoItemLabel>
                  <InfoItemValue as="dd" lang="ja">
                    {formatWordsWithCommas(corps)}
                  </InfoItemValue>
                </>
              )}
              {glowStickColor.left !== 'none' && (
                <>
                  <InfoItemLabel as="dt">
                    <Translation text="glow stick" />
                  </InfoItemLabel>
                  <dd
                    css={css`
                      display: flex;
                      flex-wrap: wrap;
                      align-items: center;
                    `}
                  >
                    <GlowStickBadge
                      color={glowStickColor.left}
                      size={14}
                      css={css`
                        margin-right: ${commonStyles.spacing.s};
                      `}
                    />
                    <GlowStickBadge color={glowStickColor.right} size={14} />
                  </dd>
                </>
              )}
            </dl>
          </div>
          {sites.length > 0 ? (
            <section>
              <SectionSubtitle
                as="h3"
                css={css`
                  margin-top: 0.6em;
                `}
              >
                <Translation text="websites" />
              </SectionSubtitle>
              <ul
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: baseline;
                  flex-wrap: wrap;
                  margin-top: 0.5em;
                `}
              >
                {sites.map(site => (
                  <li key={site.title}>
                    <TextLink
                      href={site.url}
                      typographyVariant="body2"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      capitalize
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Translation text={site.title as any} />
                    </TextLink>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {photoAlbums.length > 0 ? (
            <section>
              <SectionSubtitle
                as="h3"
                css={css`
                  margin-top: 0.6em;
                `}
              >
                <Translation text="photo books" />
              </SectionSubtitle>
              <ul
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: baseline;
                  flex-wrap: wrap;
                  margin-top: 0.5em;
                `}
              >
                {photoAlbums.map(photoAlbum => (
                  <li key={photoAlbum.title}>
                    <Card
                      borderRadius="s"
                      padding="xs"
                      href={photoAlbum.sites[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      css={css`
                        width: 180px;
                        margin: ${commonStyles.spacing.xs};
                      `}
                    >
                      <article>
                        <AspectRatioImage
                          src={photoAlbum.cover.lg}
                          srcSet={`${photoAlbum.cover.sm}, ${photoAlbum.cover.md} 2x, ${photoAlbum.cover.lg} 3x`}
                          alt=""
                          role="presentation"
                          aspectRatio={0.9}
                          loading="lazy"
                          css={css`
                            border-radius: ${commonStyles.borderRadius.s};
                          `}
                        />
                        <Typography
                          variant="body2"
                          as="p"
                          css={css`
                            margin-top: 0.8em;
                            text-align: center;
                            line-height: 1.4;
                          `}
                          lang="ja"
                        >
                          {photoAlbum.title}
                        </Typography>
                      </article>
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </section>
        {positionsHistory.length > 0 ? (
          <section>
            <TextDivider
              text={<Translation text="position history" />}
              element="h2"
            />
            <ol
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {positionsHistory.map(position => (
                <li
                  key={position.singleNumber}
                  value={position.singleNumber}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: ${commonStyles.spacing.xxs};
                  `}
                >
                  <Typography
                    variant="body2"
                    as="span"
                    textColor={{
                      on: 'onBackground',
                      variant: 'variant0',
                    }}
                    css={css`
                      margin-bottom: 0.3em;
                    `}
                  >
                    {position.singleNumber}
                  </Typography>
                  <PositionBadge position={position.position} />
                </li>
              ))}
            </ol>
            {positionTypes.length > 0 ? (
              <section>
                <Divider
                  lineColor={{ on: 'onBackground', variant: 'variant1' }}
                  css={css`
                    margin-top: 1.5em;
                    width: 80px;
                  `}
                />
                <PositionBadgeIndicatorsGroup positionTypes={positionTypes} />
              </section>
            ) : null}
          </section>
        ) : null}
        {gallery.length > 0 ? (
          <section>
            <TextDivider text={<Translation text="gallery" />} element="h2" />
            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {gallery.map((profileImage, index) => (
                <li
                  key={index}
                  css={css`
                    margin: ${commonStyles.spacing.xs};
                    border-radius: ${commonStyles.borderRadius.xs};
                    box-sizing: border-box;
                    border: 3px solid
                      var(${getColorVarName('onBackground', 'standard')});
                    width: 110px;
                    max-height: 132px;
                    overflow: hidden;
                  `}
                >
                  <AspectRatioImage
                    src={profileImage.lg}
                    srcSet={`${profileImage.sm}, ${profileImage.md} 2x, ${profileImage.lg} 3x`}
                    alt={[getTranslation('profile image'), index + 1].join(
                      locale === 'en' ? ' ' : ''
                    )}
                    aspectRatio={5 / 6}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </PageContent>
    </>
  );
};

export default MemberPage;
