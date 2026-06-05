import HomePage from '@/main-component/HomePage';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE_URL } from '@/lib/seo';
import { JsonLd, organizationLd, websiteLd } from '@/lib/jsonld';

export const metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: SITE_URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <HomePage />
    </>
  );
}
