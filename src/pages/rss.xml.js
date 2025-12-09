import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blogs');

  return rss({
    title: 'ゆるーりサモンズボード攻略ブログ',
    description: 'スマホゲーム「サモンズボード」の攻略ブログです。',
    site: 'https://mugbee2025.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.data.slug}/`,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.description ?? '',
    })),
  });
}
