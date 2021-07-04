import Image from "next/image";
import Link from "next/link";
import Date from "../Date";

export default function Card({ post, index }) {
  return (
    <Link href="/blog/[slug]" as={`/blog/${post.fields.slug}`}>
      <a>
        <div className="card m-5 p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="text-white text-xs flex items-center absolute py-2 px-2 shadow-xl top-7 left-7 bg-pink-500 z-50">
            <p>{post.fields.tags[0].fields.title}</p>
          </div>
          <figure>
            <Image
              src={`https:${post.fields.headerImage.fields.file.url}`}
              width={640}
              height={360}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title pt-3">
              {post.fields.title}
              {index === 0 && (
                <div className="badge mx-2 badge-secondary">NEW</div>
              )}
            </h2>
            <Date date={post.sys.createdAt} />
          </div>
        </div>
      </a>
    </Link>
  );
}
