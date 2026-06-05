import { notFound } from 'next/navigation';
import PortfolioSinglePage from '@/main-component/PortfolioSinglePage';
import Portfolio from '@/api/portfolio';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbLd } from '@/lib/jsonld';

export function generateStaticParams() {
  return Portfolio.map((p) => ({ id: String(p.Id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = Portfolio.find((p) => p.Id === id);
  if (!item) return {};
  return buildMetadata({
    title: item.cTitle,
    description: `${item.cTitle} — a creative project by VisualsBlaze. See the design, branding and visual details in our portfolio.`,
    path: `/portfolio-single/${item.Id}`,
    images: [item.pImg],
    type: 'article',
  });
}

export default async function Page({ params }) {
  const { id } = await params;
  const item = Portfolio.find((p) => p.Id === id);
  if (!item) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: item.cTitle, path: `/portfolio-single/${item.Id}` },
        ])}
      />
      <PortfolioSinglePage />
    </>
  );
}
