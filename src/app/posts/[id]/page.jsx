// params is an object with all the parameters from our routes inside
// if we visit /post/10 params is { id: 10 } because our this page.jsx is in folder name is [id]
export default async function SinglePost({ params }) {
  // console.log(params);
  // console.log("The terminal is where the server is running");
  // this won't show in the console log in browser because nextjs runs in the server
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return (
    <div>
      <h2>Single post page #{post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

// dynamic route segment
