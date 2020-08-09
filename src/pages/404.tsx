import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';

export default () => (
  <PageContent title="page not found">
    <Typography variant="body1">Please enter the right URL</Typography>
  </PageContent>
);
