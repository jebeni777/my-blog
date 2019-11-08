// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "dm6dssdx", // from sanity.json
    dataset: "production",
    useCdn: true // `false` if you want to ensure fresh data
});