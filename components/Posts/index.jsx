import Card from "../Card";

export default function Posts({ posts }) {
  return (
    <div className="container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card post={post} index={index} key={post.sys.id} />
      ))}
    </div>
  );
}
