import { notFound } from 'next/navigation';
import ServiceSinglePage from '@/main-component/ServiceSinglePage';
import Services from '@/api/service';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, serviceLd, breadcrumbLd } from '@/lib/jsonld';

export function generateStaticParams() {
  return Services.map((s) => ({ id: String(s.Id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = Services.find((s) => s.Id === id);
  if (!service) return {};
  return buildMetadata({
    title: service.sTitle,
    description: service.description,
    path: `/service-single/${service.Id}`,
    images: [service.sImg],
    type: 'article',
  });
}

export default async function Page({ params }) {
  const { id } = await params;
  const service = Services.find((s) => s.Id === id);
  if (!service) notFound();
  return (
    <>
      <JsonLd data={serviceLd(service)} />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/service' },
          { name: service.sTitle, path: `/service-single/${service.Id}` },
        ])}
      />
      <ServiceSinglePage />
    </>
  );
}
