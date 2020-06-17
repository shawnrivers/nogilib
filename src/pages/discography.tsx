/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { Image } from 'client/components/atoms/Image';

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto 140px;
  grid-template-rows: auto;
  grid-template-areas:
    'navigation header settings'
    'main main main';
  margin-top: 64px;
`;

const Navigation = styled.nav`
  grid-area: navigation;
`;

const Header = styled.header`
  grid-area: header;
`;

const Settings = styled.div`
  grid-area: settings;
`;

const Main = styled.main`
  grid-area: main;
  margin: auto;
`;

const ArtworkImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
}> = props => (
  <Image
    src={props.src}
    alt={props.alt}
    objectFit="cover"
    objectPosition="top"
    css={css`
      width: ${props.width ?? 200}px;
      height: ${props.height ?? 200}px;
    `}
  />
);

const Discography: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <ul>
          <Typography variant="h6" element="li">
            DISCOGRAPHY
          </Typography>
          <Typography variant="h6" element="li">
            MEMBERS
          </Typography>
          <Typography variant="h6" element="li">
            SEARCH
          </Typography>
        </ul>
      </Navigation>
      <Settings>
        <Typography variant="h7" element="div">
          Light / Dark
        </Typography>
        <Typography variant="h7" element="div">
          EN / 日 / 中
        </Typography>
      </Settings>
      <Header>
        <Typography variant="h1">DISCOGRAPHY</Typography>
        <Typography variant="h2">Singles / Albums</Typography>
      </Header>
      <Main>
        <Typography
          variant="h3"
          css={css`
            text-align: center;
          `}
        >
          2020
        </Typography>
        <div
          css={css`
            display: flex;
          `}
        >
          <ArtworkImage
            src="artworks/singles/25/A.jpg"
            alt="25"
            width={300}
            height={300}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <Typography variant="h1" element="h4">
              25th. <br /> Single
            </Typography>
            <div>
              <Typography variant="h5">しあわせの保護色</Typography>
              <Typography variant="body1">Center: 白石麻衣</Typography>
              <Typography variant="body1">発売日：2020.3.25</Typography>
            </div>
          </div>
        </div>
        <Typography
          variant="h3"
          css={css`
            text-align: center;
          `}
        >
          2019
        </Typography>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, 200px);
            grid-gap: 24px;
          `}
        >
          <div>
            <ArtworkImage src="artworks/singles/24/A.jpg" alt="24" />
            <Typography variant="h4">24th.</Typography>
            <Typography variant="body1">
              夜明けまで強がらなくてもいい
            </Typography>
            <Typography variant="body2">Center: 遠藤さくら</Typography>
          </div>
          <div>
            <ArtworkImage src="artworks/singles/23/A.jpg" alt="23" />
            <Typography variant="h4">23rd.</Typography>
            <Typography variant="body1">Sing Out!</Typography>
            <Typography variant="body2">Center: 齋藤飛鳥</Typography>
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default Discography;
