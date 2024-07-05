import Link from "next/link"

import { Button } from "~/components/button"

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <Button asChild variant={"link"} className="mt-8 lg:mt-12">
        <Link href={"/blog"}>← back to index</Link>
      </Button>
    </div>
  )
}
