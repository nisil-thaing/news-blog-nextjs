export function mapArticleContentData (data) {
  if (!data) {
    return null;
  }

  const {
    id,
    type,
    title,
    status,
    slug,
    link,
    content,
    seo,
    read_time: timeToReadInMinutes,
    featured_image,
    categories,
    modified_gmt: updatedAt
  } = data;
  const author = mapAuthorContentData(data.author),
    featuredImage = mapImageContentData(featured_image);

  return {
    id,
    type,
    title,
    status,
    slug,
    link,
    content,
    description: seo?.description || '',
    author,
    timeToReadInMinutes,
    featuredImage,
    categories,
    updatedAt
  };
}

export function mapAuthorContentData (data) {
  if (!data) {
    return null;
  }

  const {
    id,
    avatar_url: avatarUrl,
    author_url: url,
    display_name: displayName
  } = data;
  const slug = url.replace('https://www.techinasia.com/profile/', '');

  return { id, avatarUrl, slug, displayName };
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
