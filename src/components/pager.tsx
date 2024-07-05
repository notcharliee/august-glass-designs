import Link from "next/link"

import { Button } from "./button"

const pages = [
  { label: "my designs", href: "/redirect/shop" },
  { label: "home", href: "/" },
  { label: "about me", href: "/about" },
  { label: "faq", href: "/faq" },
  { label: "my blog", href: "/blog" },
  { label: "contact me", href: "/contact" },
] as const

interface PagerProps {
  currentPage: (typeof pages)[number]["label"]
}

export const Pager = (props: PagerProps) => {
  const currentPageIndex = pages.findIndex(
    (page) => page.label === props.currentPage,
  )

  const previousPage = pages[currentPageIndex - 1]

  const nextPage: (typeof pages)[number] | undefined =
    pages[currentPageIndex + 1]

  return (
    <div className="flex items-center justify-between gap-6 md:m-0">
      <Button asChild variant={"link"}>
        <Link href={previousPage.href}>← {previousPage.label}</Link>
      </Button>
      {nextPage && (
        <Button asChild variant={"link"} className="underline-animated-r">
          <Link href={nextPage.href}>{nextPage.label} →</Link>
        </Button>
      )}
    </div>
  )
}
