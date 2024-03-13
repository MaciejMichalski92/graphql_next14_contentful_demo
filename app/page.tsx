import { getTest } from "@/lib/api";

export default async function Page() {
  const allPosts = await getTest();
  console.log(allPosts);

  return (
    <div className="container mx-auto px-5">
      {JSON.stringify(allPosts, null, 2)}
      halo
    </div>
  );
}
