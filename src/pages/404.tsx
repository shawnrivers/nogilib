import * as React from 'react';
import { Typography } from 'client/components/atoms/Typography';
import { PageContent } from 'client/components/templates/Page';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { useLanguageContext } from 'client/store/language/hooks/useLanguageContext';

const NotFoundPage: React.FC = () => {
  const { getTranslation } = useTranslations();
  const { language } = useLanguageContext();

  return (
    <PageContent
      title={{ text: getTranslation('page not found'), lang: language }}
    >
      <Typography variant="body1">Please enter the right URL</Typography>
    </PageContent>
  );
};

export default NotFoundPage;
