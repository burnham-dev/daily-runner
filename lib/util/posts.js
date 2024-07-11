import imageUrlBuilder from '@sanity/image-url';
import client, { previewClient } from '../config/sanity';

const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    featuredImage,
    'author': author->{name, 'avatar': avatar.asset->url},
    date,
    excerpt,
    categories[]->{title, 'slug': slug.current}
`;

const slideFields = `
    title,
    'slug': slug.current,
    featuredImage,
    date,
    excerpt
`;

const categoryFields = `
    title,
    'slug': slug.current,
    description,
    'parent': parent->{title, 'slug': slug.current, description}
`;

const getClient = preview => preview ? previewClient : client;

export function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

export async function getAllPosts() {
    const posts = await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);

    return posts;
}

export async function getPaginatedPosts(offset = 0, postsPerPage = 6) {
    const posts = await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}[${offset}...${offset + postsPerPage}]`);
    return posts;
}

export async function getCategories() {
    const categories = await client.fetch(`*[_type == "category"] | order(title asc) {${categoryFields}}`);

    return categories;
}

export async function getPostWithSlug(slug, preview) {
    const currentClient = getClient(preview);
    const post = await currentClient.fetch(`*[_type == "blog" && slug.current == $slug]{${blogFields}, content[]{..., "asset": asset->}}`, {slug});

    return post[0];
}

export async function getAllSlugs() {
    const slugs = await client.fetch(`*[_type == "blog"]{slug}`);

    return slugs;
}

export async function getCategoryPosts({ slug = '' }) {
    const posts = await client.fetch(`*[_type == "blog" && $slug in categories[]->slug.current ][0...6]{${blogFields}}`, {slug});

    return { posts };
}

export async function getRecentPostsAllCategories() {
    const categories = await getCategories();
    const parentCategories = categories.filter(cat => !cat.parent);

   return Promise.all(parentCategories.map(category => getCategoryPosts(category)));
}

export async function getRecentPostsInCategories(categories) {
   return Promise.all(categories.map(category => getCategoryPosts(category)));
}

export async function getFeaturedPosts() {
    const posts = await client.fetch(`*[_type == "blog" && featured == true] | order(date desc) {${blogFields}}[0...6]`);

    return posts;
}

export async function searchPosts(query = '') {
    const posts = await client.fetch(`*[(_type == "blog" && !(_id in path("drafts.**"))
	&& (pt::text(body) match "${query}*" || title match "${query}*" || description match "${query}*")] 
	| score(pt::text(body) match "${query}*", boost(title match "${query}*", 3), boost(description match "${query}*", 2))
	{
		${blogFields},
		_score
    }`);

    return posts;
}