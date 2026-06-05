import AboutPage from '@/main-component/AboutPage';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbLd } from '@/lib/jsonld';

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about VisualsBlaze — a creative design and branding studio crafting standout visual identities, graphics and print for ambitious brands.',
  path: '/about',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <AboutPage />
    </>
  );
}
