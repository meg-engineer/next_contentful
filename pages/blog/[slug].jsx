import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllPostsWithSlug, getPostBySlug } from "../api/contentful";
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import CodeBlock from "../../components/CodeBlock";
import Date from "../../components/Date";

export default function Blog({ post }) {
  return (
    <Layout title={post ? post.fields.title : "Blog"}>
      <div className="container mx-auto">
        {post && (
          <div>
            <div className="px-4 lg:px-0">
              <h1 className="text-3xl font-semibold text-gray-800 leading-tight mb-5">
                {post.fields.title}
                <span className="text-gray-500 text-sm ml-5">
                  <Date date={post.sys.createdAt} />
                </span>
              </h1>
              <Image
                src={`https:${post.fields.headerImage.fields.file.url}`}
                width={1920}
                height={500}
                className="object-cover lg:rounded"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="markdown px-4 pb-6 mt-12 text-gray-700 leading-relaxed w-full lg:w-3/4">
                <ReactMarkdown
                  children={post.fields.body}
                  components={{
                    code: CodeBlock,
                  }}
                />
                <div className="text-center mt-5">
                  <Link href="/">
                    <button className="btn btn-outline btn-secondary my-5">
                      HOMEにもどる
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                <Profile />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: { post: post ? post : null },
  };
}
