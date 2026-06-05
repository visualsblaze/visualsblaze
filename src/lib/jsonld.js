// JSON-LD structured-data helpers. Server-rendered into <script> tags so search
// engines see Organization / WebSite / Service / Article / Breadcrumb markup.
import React from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, absoluteUrl } from './seo';

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/images/logo-3.png'),
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    'https://www.facebook.com/people/Visuals-Blaze/61557573718174/',
    'https://www.instagram.com/visualsblaze/',
    'https://www.linkedin.com/in/husnain-manzoor-910581120',
  ],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function serviceLd(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.sTitle,
    description: service.description,
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    url: absoluteUrl(`/service-single/${service.Id}`),
    image: absoluteUrl(service.sImg),
  };
}

export function articleLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.blogSingleImg || post.screens),
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/images/logo-3.png') },
    },
    mainEntityOfPage: absoluteUrl(`/blog-single/${post.id}`),
  };
}
