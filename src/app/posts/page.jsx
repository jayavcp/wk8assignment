import Link from "next/link";

export default async function Posts({ searchParams }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  if (searchParams.sort === "desc") {
    posts.reverse();
  }
  return (
    <div>
      <Link href="/posts/categories">Categories</Link>
      <div className="sort">
        <Link href="/posts">Sort Ascending</Link>
        <Link href="/posts?sort=desc">Sort Descending</Link>
      </div>
      <h2>
        Posts - can sort by adding ?sort=asc or ?sort=desc to route or by
        clicking links
      </h2>
      <div className="postlist">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
