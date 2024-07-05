import Link from "next/link"
import type { Metadata } from "next"

import { Pager } from "~/components/pager"

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "My contact details for inquiries and custom orders, as well as my social media accounts special offers, discount codes and giveaways.",
}

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 py-8 md:space-y-12 md:py-12 lg:py-16 xl:px-24">
      <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl">
        contact me
      </h1>
      <div className="space-y-6">
        <p>
          For inquiries and custom orders, please reach out to me at{" "}
          <Link
            href={"mailto:jacquois@hotmail.co.uk"}
            className="font-medium underline underline-offset-4"
          >
            jacquois@hotmail.co.uk
          </Link>
          .
        </p>
        <p>
          Follow me on social media for special offers, discount codes and
          giveaways!
        </p>
        <div className="space-y-1.5">
          <p>
            <Link
              href={"/redirect/twitter"}
              className="font-medium underline underline-offset-4"
            >
              Twitter - @mostlymayhem
            </Link>
          </p>
          <p>
            <Link
              href={"/redirect/instagram"}
              className="font-medium underline underline-offset-4"
            >
              Instagram - @augustglassdesigns
            </Link>
          </p>
          <p>
            <Link
              href={"/redirect/facebook"}
              className="font-medium underline underline-offset-4"
            >
              Facebook - AugustGlassDesigns
            </Link>
          </p>
        </div>
      </div>
      <Pager currentPage={"contact me"} />
    </div>
  )
}
