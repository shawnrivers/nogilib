import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 800px) minmax(
      max-content,
      1fr
    );
  grid-template-rows: auto;
  grid-template-areas:
    'navigation header settings'
    'main main main';
  grid-gap: 16px;
  margin-top: 64px;
`;

export const Navigation = styled.nav`
  grid-area: navigation;
  justify-self: end;
  padding-top: 2ex;
`;

export const Header = styled.header`
  grid-area: header;
`;

export const Settings = styled.div`
  grid-area: settings;
  justify-self: start;
  padding-top: 2ex;
`;

export const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
