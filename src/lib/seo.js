// Shared SEO config + per-page metadata builder for the App Router.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://visualsblaze.com'
).replace(/\/$/, '');

export const SITE_NAME = 'VisualsBlaze';

export const DEFAULT_TITLE =
  'VisualsBlaze — Creative Design & Branding Agency';

export const DEFAULT_DESCRIPTION =
  'VisualsBlaze is a creative design and branding agency delivering graphic design, branding & identity, print and digital design that helps brands stand out.';

export const KEYWORDS = [
  'graphic design',
  'branding agency',
  'logo design',
  'brand identity',
  'print design',
  'creative agency',
  'VisualsBlaze',
];

// Turn a relative asset path (e.g. "/images/blog/img-4.jpg") into an absolute URL.
export function absoluteUrl(path = '/') {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

/**
 * Build a Next.js Metadata object for a page.
 * @param {{title?:string, description?:string, path?:string, images?:string[], type?:string, noindex?:boolean}} opts
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  images,
  type = 'website',
  noindex = false,
} = {}) {
  const url = absoluteUrl(path);
  const desc = description || DEFAULT_DESCRIPTION;
  const ogImages = (images && images.length ? images : ['/images/logo-3.png']).map(
    absoluteUrl
  );

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE,
      description: desc,
      url,
      siteName: SITE_NAME,
      type,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE,
      description: desc,
      images: ogImages,
    },
  };
}
