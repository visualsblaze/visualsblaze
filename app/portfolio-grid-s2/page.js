import PortfolioGridS2 from '@/main-component/PortfolioGridS2';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbLd } from '@/lib/jsonld';

export const metadata = buildMetadata({
  title: 'Portfolio',
  description:
    'Browse the VisualsBlaze portfolio — branding, graphic design, print and digital projects delivered for clients across industries.',
  path: '/portfolio-grid-s2',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio-grid-s2' },
        ])}
      />
      <PortfolioGridS2 />
    </>
  );
}
