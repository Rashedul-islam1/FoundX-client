import { Button } from "@heroui/button";
import Link from "next/link";

import Container from "../../ui/Container";

import { getRecentPost } from "@/src/services/RecentPost";
import Card from "../../ui/Card";
import { IPost } from "@/src/types";

export default async function RecentPosts() {
  const { data: post } = await getRecentPost();

  console.log(post);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {/* {post.map((item: any) => (
          <p key={item._id}>{item.title}</p>
        ))} */}
        {post.map((item: IPost) => (
          <Card key={item._id} post={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
