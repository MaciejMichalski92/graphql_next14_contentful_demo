import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const httpLink = createHttpLink({
  fetch,
  uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
  headers: {
    authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
