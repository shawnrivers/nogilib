import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { Message } from 'client/components/atoms/Message';
import { Header, Main, MainContent } from 'client/components/templates/Page';

export default () => (
  <React.Fragment>
    <Header>
      <Typography variant="h2" element="h1">
        <Message text="page not found" />
      </Typography>
    </Header>
    <Main>
      <MainContent>
        <Typography variant="body1">Please enter the right URL</Typography>
      </MainContent>
    </Main>
  </React.Fragment>
);
