import { readdir } from "fs/promises"
import { join } from "path"

export interface Post {
  slug: string
  title: string
  description: string
  publishedAt: string
  lastUpdatedAt?: string
}

export const getPosts = async (): Promise<Post[]> => {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/blog/(posts)", {
      withFileTypes: true,
    })
  ).filter((dirent) => dirent.isDirectory())

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./(posts)/${name}/page.mdx`)
      return { slug: name, ...metadata } as Post
    }),
  )

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))

  return posts
}
