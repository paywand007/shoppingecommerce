import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'c2pyx2yn',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
// const builder = imageUrlBuilder(client)

// function urlFor(source) {
//   return builder.image(source)
// }
// export const sanityClient = createClient(client)

// export const urlFor = (source) => createImageUrlBuilder(client).image(source)
