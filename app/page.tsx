import { client } from "@/lib/apollo-client";
import { mainPageQuery } from "@/lib/queries/mainPage";
import {
  DynamicContent,
  DynamicContentUnion,
} from "@/src/components/dynamicContent/DynamicContent";
import { gql } from "@apollo/client";
import { Spinner } from "@radix-ui/themes";

const GET_PAGE = gql(mainPageQuery);

const Page = async () => {
  const {
    data: pageData,
    loading,
    error,
  } = await client.query({ query: GET_PAGE });

  if (loading) <Spinner />;
  // toDo error component
  if (error) console.error(error);
  return (
    <div className="container mx-auto px-5">
      {pageData.page.contentCollection.items.map(
        (item: DynamicContentUnion) => (
          <DynamicContent key={item.__typename} data={item} />
        )
      )}
    </div>
  );
};

export default Page;
