"use client"

import { useEffect, useRef, useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { HamburgerIcon } from "./icons"
import { Button } from "./button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet"
import { cn } from "~/lib/utils"

const links = {
  site: [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/faq", label: "faq" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "contact" },
  ],
  shop: [
    { href: "/blog/shop-policies", label: "policies" },
    { href: "/redirect/reviews", label: "reviews" },
    { href: "/redirect/shop", label: "go to shop" },
  ],
}

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navRef.current) {
      const nav = navRef.current
      const selectedNavItem = nav.querySelector(
        `a[href="${pathname}"]`,
      ) as HTMLAnchorElement

      if (selectedNavItem) {
        const navItemWidth = selectedNavItem.offsetWidth + 8
        const navItemLeft = selectedNavItem.offsetLeft - 4

        nav.style.setProperty("--nav-item-width", `${navItemWidth}px`)
        nav.style.setProperty("--nav-item-left", `${navItemLeft}px`)
      } else {
        nav.style.setProperty("--nav-item-width", "0px")
        setTimeout(() => nav.style.setProperty("--nav-item-left", "0px"), 150)
      }
    }
  }, [pathname])

  const SidebarLink = ({
    onClick,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Link>) => (
    <Link
      onClick={(e) => {
        setSidebarOpen(false)
        if (onClick) onClick(e)
      }}
      {...props}
    ></Link>
  )

  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-background px-6 text-base lg:grid lg:grid-cols-[1fr_auto_1fr] xl:px-24">
      <nav
        ref={navRef}
        className="relative hidden gap-6 before:absolute before:-bottom-5 before:left-[var(--nav-item-left,0px)] before:h-px before:w-[var(--nav-item-width,0px)] before:bg-foreground before:duration-150 lg:flex"
      >
        {links.site.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href={"/"} className="flex flex-col lg:items-center">
        <span className="font-display text-xl leading-none">
          August Glass Designs
        </span>
        <span className="text-xs leading-none text-accent">
          ARTISAN GLASSWORK
        </span>
      </Link>
      <nav className="hidden items-center gap-6 lg:flex lg:justify-end">
        <Link
          href={links.shop[0].href}
          className="relative before:absolute before:-bottom-5 before:-left-1 before:h-px before:w-0 before:bg-foreground before:duration-150 aria-selected:before:w-[calc(100%+8px)]"
          aria-selected={pathname === "/blog/shop-policies"}
        >
          {links.shop[0].label}
        </Link>
        <Link href={links.shop[1].href}>{links.shop[1].label}</Link>
        <Button asChild size={"sm"}>
          <Link href={links.shop[2].href}>{links.shop[2].label}</Link>
        </Button>
      </nav>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger className="lg:hidden">
          <HamburgerIcon className="h-7 w-7" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6">
          <div className="flex flex-col lg:items-center">
            <span className="font-display text-xl leading-none">
              August Glass Designs
            </span>
            <span className="text-xs leading-none text-accent">
              ARTISAN GLASSWORK
            </span>
          </div>
          <nav className="flex flex-col">
            {links.site.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                className="border-b border-foreground/15 px-2 py-3 hover:border-foreground"
              >
                {link.label}
              </SidebarLink>
            ))}
          </nav>
          <nav className="flex flex-col">
            {links.shop.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                className="border-b border-foreground/15 px-2 py-3 hover:border-foreground"
              >
                {link.label}
              </SidebarLink>
            ))}
          </nav>
          <SheetClose className="mt-auto" asChild>
            <Button>close</Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </header>
  )
}
