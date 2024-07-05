import Link from "next/link"
import type { Metadata } from "next"

import { Pager } from "~/components/pager"

import { getPosts } from "./posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog posts.",
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <>
      <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl">my blog</h1>
      <div>
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="relative block w-full space-y-2 border-b border-foreground/15 py-8 before:absolute before:-left-4 before:-top-[1px] before:h-[calc(100%+2px)] before:w-[calc(100%+2rem)] before:rounded-md before:border-background before:transition-[background] before:duration-150 last:border-0 hover:before:border-2 hover:before:bg-foreground/5"
          >
            <h3 className="font-display text-xl font-bold leading-none">
              {post.title}
            </h3>
            <p>{post.description}</p>
            <p className="text-xs leading-none text-accent saturate-0 lg:text-sm">
              {"✏️ "}
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post.lastUpdatedAt && (
                <>
                  {" • "}
                  {"🔄 "}
                  <span>
                    {new Date(post.lastUpdatedAt).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </>
              )}
            </p>
          </Link>
        ))}
      </div>
      <Pager currentPage={"my blog"} />
    </>
  )
}
