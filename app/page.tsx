import { gql } from "@apollo/client";
import { client } from "../lib/apollo-client";
import { footerQuery } from "@/lib/queries/footer";
import { Footer } from "@/src/components/footer/Footer";
import { mapFooter } from "@/lib/utils/mappers/mapFooter";

const GET_FOOTER = gql(footerQuery);

export default async function Page() {
  const { data } = await client.query({ query: GET_FOOTER });

  const footerProps = mapFooter(data);

  console.log(footerProps.socialItems);

  return (
    <div className="container mx-auto px-5">
      <Footer {...footerProps} />
    </div>
  );
}
