import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { Message } from 'client/components/atoms/Message';
import { PageContent } from 'client/components/templates/Page';

export default () => (
  <PageContent
    header={
      <Typography variant="h2" element="h1">
        <Message text="page not found" />
      </Typography>
    }
  >
    <Typography variant="body1">Please enter the right URL</Typography>
  </PageContent>
);
