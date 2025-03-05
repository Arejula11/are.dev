import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts');
    const filteredPosts = (posts.filter((post) => post.data.draft !== true)).sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));

    return rss({
    title: 'Are.dev',
    description: 'A blog dedicated to mastering software development — learn, build, and elevate your coding skills.',
    site: context.site,
    items: filteredPosts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishedDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
        categories: post.data.tags,
        author: post.data.author,
        customData: `<language>${post.data.language}</language>`,
    })),
    });
    }