const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// 全ポスト取得
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
  });

  if (entries) return entries;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// URLごとにpostを取得
export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    limit: 1,
    "fields.slug[in]": slug,
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// 全てのpostのURLを取得
export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    select: "fields.slug",
  });

  return entries.items.map((item) => item.fields.slug);
}
