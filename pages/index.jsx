import { getAllPosts } from "./api/contentful";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Posts from "../components/Posts";

export default function Home({ posts }) {
  return (
    <Layout title="Meg Blog">
      <Seo />
      <Hero />
      <Posts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const postData = await getAllPosts();

  return {
    props: { posts: postData.items },
  };
}
