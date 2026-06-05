import ContactPage from '@/main-component/ContactPage';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbLd } from '@/lib/jsonld';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with VisualsBlaze to discuss your branding or design project. Request a quote or book a consultation today.',
  path: '/contact',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <ContactPage />
    </>
  );
}
