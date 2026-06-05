import BlogPage from '@/main-component/BlogPage';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbLd } from '@/lib/jsonld';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Insights, tips and stories on design, branding and creativity from the VisualsBlaze team.',
  path: '/blog',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <BlogPage />
    </>
  );
}
