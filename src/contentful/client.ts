import { createClient, ContentfulClientApi } from 'contentful';
import LoaderFunction from "next/app";

let clientInstance: ContentfulClientApi<undefined>| null = null;

// Define a type for what the loader will return as props to the component
interface LoaderData {
    data: any; // Specify more specific type based on what fetchDataBasedOnPath returns
    pathname: string;
}

export function getContentfulClient(): ContentfulClientApi<undefined>  {
  if (!clientInstance) {
    if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
      throw new Error("Contentful space ID and access token must be provided.");
    }

    clientInstance = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
  }

  return clientInstance;
}

export const loader: () => any = async () => {
    // Fetch data here
    const client = getContentfulClient();
    
    
    // Assuming you know your Content Type ID, for example, 'blogPost'
    const entries = await client.getEntries<any>({
      content_type: 'siteConfiguration',
      'fields.siteId': 'valerie-portfolio',
      include: 10
    });

     // Getting the pathname from the request URL
    //  const url = new URL(request.url);
    //  const pathname = url.pathname;
  
    return {
      props: {
        entries,
        // pathname
      },
      revalidate: 1, // Enable Incremental Static Regeneration (ISR)
    };
  };