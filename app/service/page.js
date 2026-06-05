import ServicePage from '@/main-component/ServicePage';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbLd } from '@/lib/jsonld';

export const metadata = buildMetadata({
  title: 'Our Services',
  description:
    'Explore VisualsBlaze services: graphic design, branding & identity, print design, social media creatives and more — tailored to grow your brand.',
  path: '/service',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/service' },
        ])}
      />
      <ServicePage />
    </>
  );
}
