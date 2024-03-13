const TEST_GRAPHQL_FIELDS = `
  textBlock(id: "ot02ckZKw1N89xUrkw35h") {
    title
    description
  }
`;

async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getTest(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query{
          ${TEST_GRAPHQL_FIELDS}   
    }`
  );
  return entries;
}
