import { SITE_URL } from '@/lib/seo';
import Services from '@/api/service';
import Portfolio from '@/api/portfolio';
import blogs from '@/api/blogs';

export default function sitemap() {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/service', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/portfolio-grid-s2', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceRoutes = Services.map((s) => ({
    url: `${SITE_URL}/service-single/${s.Id}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const portfolioRoutes = Portfolio.map((p) => ({
    url: `${SITE_URL}/portfolio-single/${p.Id}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${SITE_URL}/blog-single/${b.id}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes];
}
