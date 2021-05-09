export function mapArticleContentData (data) {
  if (!data) {
    return null;
  }

  const { id, type, title, status, slug, link, content, featured_image } = data;
  const featuredImage = mapImageContentData(featured_image);

  return {
    id,
    type,
    title,
    status,
    slug,
    link,
    content,
    featuredImage
  };
}

export function mapImageContentData (data) {
  if (!data) {
    return null;
  }

  const { source: original, attachment_meta } = data;

  return {
    original,
    thumbnail: attachment_meta?.sizes?.thumbnail?.url || '',
    medium: attachment_meta?.sizes?.medium?.url || '',
    large: attachment_meta?.sizes?.large?.url || ''
  };
}