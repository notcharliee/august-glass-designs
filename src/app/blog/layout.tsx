export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 py-8 md:space-y-12 md:py-12 lg:py-16 xl:px-24">
      {children}
    </div>
  )
}
