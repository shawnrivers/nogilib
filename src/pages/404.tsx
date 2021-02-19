import { useRouter } from 'next/router';
import { useTranslations } from 'client/i18n/hooks/useTranslations';
import { PageContent } from 'client/components/layout/PageContent';

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
