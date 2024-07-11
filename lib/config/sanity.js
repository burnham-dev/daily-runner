import sanityClient from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANTIY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2021-08-31'
}

export const previewClient = sanityClient({
    ...options,
    useCdn: false,
    token: process.env.SANITY_STUDIO_PREVIEW_TOKEN
})

export const formClient = sanityClient({
    ...options,
    useCdn: false,
    token: process.env.SANITY_STUDIO_FORM_SUBMISSIONS_TOKEN
})


export default sanityClient(options);