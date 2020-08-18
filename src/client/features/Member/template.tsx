/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { LocalizedList } from 'client/components/atoms/locales/LocalizedList';
import { PositionBadge } from 'client/features/Member/components/PositionBadge';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { PositionType } from 'server/actors/Members/constants/position';
import { PageContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { useAppContext } from 'client/hooks/useAppContext';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { useAppTheme, commonStyles } from 'client/styles/tokens';
import { GridMemberImage } from 'client/components/atoms/images/GridMemberImage';
import { useTranslations } from 'client/hooks/useTranslations';
import { MemberPageProps } from 'client/features/Member/container';
import { useIntl } from 'client/hooks/useIntl';
import { PositionCounter } from 'client/features/Member/components/PositionCounter';
import { TextLink } from 'client/components/molecules/links/TextLink';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { GlowStickBadge } from 'client/features/Member/components/GlowStickBadge';
import { InfoItemLabel } from 'client/components/molecules/typography/info/InfoItemLabel';
import { InfoItemValue } from 'client/components/molecules/typography/info/InfoItemValue';
import { SectionSubtitle } from 'client/components/molecules/typography/SectionSubtitle';
import { GridImage } from 'client/components/atoms/images/GirdImage';
import { Card } from 'client/components/atoms/Card';

export const MemberPage: React.FC<MemberPageProps> = props => {
  const {
    name,
    names,
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
    shouldShowPositionCounter,
    positionsHistory,
    positionsCounter,
    glowStickColor,
    gallery,
  } = props;
  const { language } = useAppContext();
  const { Translation } = useTranslations();
  const theme = useAppTheme();
  const { formatDate } = useIntl();

  useScrollRestoration();

  return (
    <PageContent
      title={language !== 'en' ? names.ja : names.en}
      titleTextTransform="capitalize"
      showBackButton
    >
      <React.Fragment>
        <Typography
          variant="body1"
          textColor={{
            on: 'onBackground',
            variant: 'variant0',
          }}
          css={css`
            vertical-align: center;
            text-transform: capitalize;
            text-align: center;
            margin-top: 0.3em;
          `}
        >
          {language === 'ja'
            ? names.furigana
            : language === 'zh'
            ? names.en
            : names.ja}
        </Typography>
        <TextDivider text={<Translation text="profile" />} element="h2" />
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
          <GridMemberImage
            src={profileImage}
            alt={name}
            fixedSize
            shadow
            css={css`
              width: 200px;
              height: 240px;
            `}
          />
          <div
            css={css`
              display: grid;
              grid-template-columns: max-content auto;
              grid-template-rows: auto;
              grid-gap: ${theme.spacing.s};
              margin-top: 0.5em;
              align-items: center;
            `}
          >
            <InfoItemLabel>
              <Translation text="join" />
            </InfoItemLabel>
            <InfoItemValue>
              <Translation text={('join: ' + join) as any} />{' '}
              {graduation.isGraduated ? <Translation text="graduate" /> : null}
            </InfoItemValue>
            <InfoItemLabel>
              <Translation text="birthday" />
            </InfoItemLabel>
            <InfoItemValue>{formatDate(birthday)}</InfoItemValue>
            <InfoItemLabel>
              <Translation text="height" />
            </InfoItemLabel>
            <InfoItemValue>{height}cm</InfoItemValue>
            <InfoItemLabel>
              <Translation text="blood type" />
            </InfoItemLabel>
            <InfoItemValue
              css={css`
                text-transform: uppercase;
              `}
            >
              <Translation text={bloodType} />
            </InfoItemValue>
            <InfoItemLabel>
              <Translation text="birthplace" />
            </InfoItemLabel>
            <InfoItemValue>
              <Translation text={origin as any} />
            </InfoItemValue>
            {units.length > 0 && (
              <React.Fragment>
                <InfoItemLabel>
                  <Translation text="units" />
                </InfoItemLabel>
                <InfoItemValue>
                  <LocalizedList list={units} />
                </InfoItemValue>
              </React.Fragment>
            )}
            {corps.length > 0 && (
              <React.Fragment>
                <InfoItemLabel>
                  <Translation text="corps" />
                </InfoItemLabel>
                <InfoItemValue>
                  <LocalizedList list={corps} />
                </InfoItemValue>
              </React.Fragment>
            )}
            {glowStickColor.left !== GlowStickColorType.None && (
              <React.Fragment>
                <InfoItemLabel>
                  <Translation text="glow stick" />
                </InfoItemLabel>
                <div
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
                      margin-right: ${commonStyles.spacing.xxs};
                    `}
                  />
                  <GlowStickBadge color={glowStickColor.right} size={14} />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        {sites.length > 0 ? (
          <React.Fragment>
            <SectionSubtitle
              css={css`
                margin-top: 0.6em;
              `}
            >
              <Translation text="websites" />
            </SectionSubtitle>
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: baseline;
                flex-wrap: wrap;
                margin-top: 0.5em;
              `}
            >
              {sites.map(site => (
                <TextLink
                  key={site.title}
                  element="a"
                  to={site.url}
                  typographyVariant="body2"
                  textColor={{
                    on: 'onBackground',
                    variant: 'variant0',
                  }}
                  capitalize
                >
                  <Translation text={site.title as any} />
                </TextLink>
              ))}
            </div>
          </React.Fragment>
        ) : null}
        {photoAlbums.length > 0 ? (
          <React.Fragment>
            <SectionSubtitle
              css={css`
                margin-top: 0.6em;
              `}
            >
              <Translation text="photo books" />
            </SectionSubtitle>
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: baseline;
                flex-wrap: wrap;
                margin-top: 0.5em;
              `}
            >
              {photoAlbums.map(photoAlbum => (
                <Card
                  key={photoAlbum.title}
                  borderRadius="s"
                  padding="xs"
                  to={photoAlbum.sites[0].url}
                  css={css`
                    width: 180px;
                    margin: ${commonStyles.spacing.xs};
                  `}
                >
                  <GridImage
                    ratio={1.1}
                    src={photoAlbum.cover}
                    alt={photoAlbum.title}
                  />
                  <Typography
                    variant="body2"
                    element="p"
                    css={css`
                      margin-top: 0.8em;
                      text-align: center;
                      line-height: 1.4;
                    `}
                  >
                    {photoAlbum.title}
                  </Typography>
                </Card>
              ))}
            </div>
          </React.Fragment>
        ) : null}
        {positionsHistory.length > 0 ? (
          <React.Fragment>
            <TextDivider
              text={<Translation text="position history" />}
              element="h2"
            />
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {positionsHistory.map(position => (
                <div
                  key={position.singleNumber}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: ${theme.spacing.xxs};
                  `}
                >
                  <Typography
                    variant="body2"
                    element="span"
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
                </div>
              ))}
            </div>
            {shouldShowPositionCounter ? (
              <React.Fragment>
                <div
                  css={css`
                    margin-top: 1em;

                    & > * {
                      margin: auto;
                    }
                  `}
                >
                  <PositionCounter {...positionsCounter} />
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 1em;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Center} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                        line-height: 1;
                      `}
                    >
                      <Translation text="center" />
                    </Typography>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Fukujin} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                        line-height: 1;
                      `}
                    >
                      <Translation text="fukujin" />
                    </Typography>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Selected} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                        line-height: 1;
                      `}
                    >
                      <Translation text="selected" />
                    </Typography>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      margin: 0.3em;
                    `}
                  >
                    <PositionBadge position={PositionType.Under} />
                    <Typography
                      variant="body3"
                      element="span"
                      textColor={{
                        on: 'onBackground',
                        variant: 'variant0',
                      }}
                      css={css`
                        text-transform: capitalize;
                        margin-top: 0.3em;
                        line-height: 1;
                      `}
                    >
                      <Translation text="under" />
                    </Typography>
                  </div>
                </div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}
        {gallery.length > 0 ? (
          <React.Fragment>
            <TextDivider text={<Translation text="gallery" />} element="h2" />
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {gallery.map((profileImage, index) => (
                <GridMemberImage
                  src={profileImage}
                  key={index}
                  alt={name}
                  shadow
                  fixedSize
                  css={css`
                    width: ${110}px;
                    height: ${132}px;
                    margin: ${commonStyles.spacing.xs};
                  `}
                />
              ))}
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    </PageContent>
  );
};
