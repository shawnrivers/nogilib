/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { FormattedDate } from 'react-intl';
import { LocalizedList } from 'client/components/atoms/locales/LocalizedList';
import { Message } from 'client/components/atoms/Message';
import { PositionBadge } from 'client/components/atoms/PositionBadge';
import { PositionCounter } from 'client/components/atoms/PositionCounter';
import { useScrollRestoration } from 'client/hooks/useScrollRestoration';
import { GlowStickColorType } from 'server/actors/Members/constants/glowStickColor';
import { PositionType } from 'server/actors/Members/constants/position';
import { Header, Main, MainContent } from 'client/components/templates/Page';
import { Typography } from 'client/components/atoms/Typography';
import { useAppContext } from 'client/hooks/useAppContext';
import { TextDivider } from 'client/components/atoms/TextDivider';
import { useAppTheme } from 'client/styles/tokens';
import { GridMemberImage } from 'client/components/atoms/image/GridMemberImage';

interface MemberPageProps {
  name: string;
  names: {
    ja: string;
    en: string;
    furigana: string;
  };
  profileImage: string;
  sites: {
    title: string;
    url: string;
  }[];
  join: string;
  graduation: {
    isGraduated: boolean;
  };
  birthday: string;
  height: number;
  bloodType: string;
  origin: string;
  units: string[];
  corps: string[];
  glowStickColor: {
    left: GlowStickColorType;
    right: GlowStickColorType;
  };
  photoAlbums: {
    title: string;
  }[];
  positionsHistory: {
    position: PositionType;
    singleNumber: string;
  }[];
  shouldShowPositionCounter: boolean;
  positionsCounter: {
    center: number;
    fukujin: number;
    selected: number;
    under: number;
  };
  gallery: string[];
}

export const MemberPage = ({
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
  gallery,
}: MemberPageProps) => {
  useScrollRestoration();
  const { language } = useAppContext();
  const theme = useAppTheme();

  return (
    <React.Fragment>
      <Header
        css={css`
          text-transform: capitalize;
        `}
      >
        <Typography variant="h2" element="h1">
          {language !== 'en' ? names.ja : names.en}
        </Typography>
        <Typography
          variant="body1"
          css={css`
            vertical-align: center;
          `}
        >
          {language === 'ja'
            ? names.furigana
            : language === 'zh'
            ? names.en
            : names.ja}
        </Typography>
      </Header>
      <Main>
        <MainContent>
          <TextDivider text={<Message text="profile" />} />
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
              css={css`
                width: 180px;
                height: 220px;
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
                text-transform: capitalize;
              `}
            >
              <Typography variant="h7" element="span">
                <Message text="join" />
              </Typography>
              <Typography variant="h7" element="span">
                <Message text={'join: ' + join} />{' '}
                {graduation.isGraduated ? <Message text="graduate" /> : null}
              </Typography>
              <Typography variant="h7" element="span">
                <Message text="birthday" />
              </Typography>
              <Typography variant="h7" element="span">
                <FormattedDate
                  value={birthday}
                  year="numeric"
                  month="short"
                  day="numeric"
                />
              </Typography>
              <Typography variant="h7" element="span">
                <Message text="height" />
              </Typography>
              <Typography
                variant="h7"
                element="span"
                css={css`
                  text-transform: lowercase;
                `}
              >
                {height}cm
              </Typography>
              <Typography variant="h7" element="span">
                <Message text="blood type" />
              </Typography>
              <Typography variant="h7" element="span">
                <Message text={bloodType} />
              </Typography>
              <Typography variant="h7" element="span">
                <Message text="birthplace" />
              </Typography>
              <Typography variant="h7" element="span">
                <Message text={origin} />
              </Typography>
              {units.length > 0 ? (
                <React.Fragment>
                  <Typography variant="h7" element="span">
                    <Message text="units" />
                  </Typography>
                  <Typography variant="h7" element="span">
                    <LocalizedList list={units} />
                  </Typography>
                </React.Fragment>
              ) : null}
              {corps.length > 0 ? (
                <React.Fragment>
                  <Typography variant="h7" element="span">
                    <Message text="corps" />
                  </Typography>
                  <Typography variant="h7" element="span">
                    <LocalizedList list={corps} />
                  </Typography>
                </React.Fragment>
              ) : null}
            </div>
          </div>
          {sites.length > 0 ? (
            <React.Fragment>
              <Typography
                variant="h4"
                element="h3"
                css={css`
                  margin: 0.5em 0;
                  text-align: center;
                `}
              >
                <Message text="websites" />
              </Typography>
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: baseline;
                `}
              >
                {sites.map(site => (
                  <Typography
                    key={site.title}
                    element="span"
                    variant="body2"
                    css={css`
                      &:not(:first-child) {
                        margin-left: 1em;
                      }
                    `}
                  >
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Message text={site.title} />
                    </a>
                  </Typography>
                ))}
              </div>
            </React.Fragment>
          ) : null}
          {photoAlbums.length > 0 ? (
            <React.Fragment>
              <Typography
                variant="h4"
                element="h3"
                css={css`
                  margin: 0.5em 0;
                  text-align: center;
                `}
              >
                <Message text="photo albums" />
              </Typography>
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                {photoAlbums.map(photoAlbum => (
                  <Typography
                    key={photoAlbum.title}
                    variant="body2"
                    element="span"
                  >
                    『{photoAlbum.title}』
                  </Typography>
                ))}
              </div>
            </React.Fragment>
          ) : null}
          {positionsHistory.length > 0 ? (
            <React.Fragment>
              <TextDivider text={<Message text="position history" />} />
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
                        `}
                      >
                        <Message text="center" />
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
                        `}
                      >
                        <Message text="fukujin" />
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
                        `}
                      >
                        <Message text="selected" />
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
                        `}
                      >
                        <Message text="under" />
                      </Typography>
                    </div>
                  </div>
                </React.Fragment>
              ) : null}
            </React.Fragment>
          ) : null}
          {gallery.length > 0 ? (
            <React.Fragment>
              <TextDivider text={<Message text="gallery" />} />
              <div
                css={css`
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
                  grid-template-rows: auto;
                  grid-gap: ${theme.spacing.m};
                  justify-content: center;
                `}
              >
                {gallery.map((profileImage, index) => (
                  <GridMemberImage src={profileImage} key={index} alt={name} />
                ))}
              </div>
            </React.Fragment>
          ) : null}
        </MainContent>
      </Main>
    </React.Fragment>
  );
};
