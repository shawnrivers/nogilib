import { useRouter } from 'next/router';
import { PageContent } from 'client/components/templates/Page';
import { useTranslations } from 'client/i18n/hooks/useTranslations';

const NotFoundPage: React.FC = () => {
  const { getTranslation } = useTranslations();
  const { locale } = useRouter();

  return (
    <PageContent
      title={{ text: getTranslation('page not found'), lang: locale }}
    ></PageContent>
  );
};

export default NotFoundPage;
