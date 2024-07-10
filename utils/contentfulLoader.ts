export default function contentfulLoader({ src, width, quality }: any) {
  if (!src) {
    throw new Error('Source URL is undefined');
  }
  if (!width) {
    throw new Error('Width property is missing');
  }

  const url = new URL(src);
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', (quality || 75).toString());
  return url.href;
}