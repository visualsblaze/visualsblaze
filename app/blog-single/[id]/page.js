import { notFound } from 'next/navigation';
import BlogDetails from '@/main-component/BlogDetails';
import blogs from '@/api/blogs';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, articleLd, breadcrumbLd } from '@/lib/jsonld';

export function generateStaticParams() {
  return blogs.map((b) => ({ id: String(b.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogs.find((b) => b.id === id);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog-single/${post.id}`,
    images: [post.blogSingleImg || post.screens],
    type: 'article',
  });
}

export default async function Page({ params }) {
  const { id } = await params;
  const post = blogs.find((b) => b.id === id);
  if (!post) notFound();
  return (
    <>
      <JsonLd data={articleLd(post)} />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog-single/${post.id}` },
        ])}
      />
      <BlogDetails />
    </>
  );
}
