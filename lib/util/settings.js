import client from '../config/sanity';

const settingsFields = `
    'logo': logo.asset->url
`;

const contactPageFields = `
    headline,
    content[],
    'heroImage': heroImage.asset->url
`;

export async function getSettings() {
    const settings = await client.fetch(`*[_type == "siteSettings"] | order(title asc) {${settingsFields}}`);

    return settings[0];
}

export async function getContactPageSettings() {
    const page = await client.fetch(`*[_type == "contactPage"] | order(title asc) {${contactPageFields}}`);

    return page[0];
}