import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { useTranslations } from 'client/hooks/useTranslations';
import { useAppContext } from 'client/hooks/useAppContext';

const NotFoundPage: React.FC = () => {
  const { getTranslation } = useTranslations();
  const { language } = useAppContext();

  return (
    <PageContent
      title={{ text: getTranslation('page not found'), lang: language }}
    >
      <Typography variant="body1">Please enter the right URL</Typography>
    </PageContent>
  );
};

export default NotFoundPage;
