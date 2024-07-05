import Link from "next/link"
import type { Metadata } from "next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/accordion"
import { Pager } from "~/components/pager"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to frequently asked questions.",
}

export default function Faq() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 py-8 md:space-y-12 md:py-12 lg:py-16 xl:px-24">
      <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl">
        <span className="hidden md:block">common questions</span>
        <span className="md:hidden">faq</span>
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="01" className="border-t">
          <AccordionTrigger marker={"01"}>
            How do I care for my glasswork?
          </AccordionTrigger>
          <AccordionContent>
            Over time the lead soldered seams on your glasswork may need a
            freshen up to revive the shine. Simply add a little natural shoe
            polish to the seams and buff with a soft cloth. The glass can be
            polished with a clean soft cloth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="02">
          <AccordionTrigger marker="02">
            How long will my order take?
          </AccordionTrigger>
          <AccordionContent>
            All glasswork from august glass designs is completely handmade.
            Smaller items will generally take 5 to 7 days before dispatching.
            Larger items, multiple orders and custom orders will take up to 3
            weeks before dispatch. I will always try to accommodate a speedy
            order request, for something that is needed sooner!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="03">
          <AccordionTrigger marker="03">
            How can I request a custom order?
          </AccordionTrigger>
          <AccordionContent>
            Wholesale orders are welcome. Please contact me{" "}
            <Link
              href={"/contact"}
              className="font-medium underline underline-offset-4"
            >
              here
            </Link>{" "}
            for more information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="04">
          <AccordionTrigger marker="04">
            What's your return policy?
          </AccordionTrigger>
          <AccordionContent>
            You can see my policies page{" "}
            <Link
              href={"/policies"}
              className="font-medium underline underline-offset-4"
            >
              here
            </Link>
            .
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="md:max-w-lg md:text-balance">
        If you can’t find the answer you need, you can contact me directly{" "}
        <Link
          href={"/contact"}
          className="font-medium underline underline-offset-4"
        >
          here
        </Link>
        .
      </p>
      <Pager currentPage={"faq"} />
    </div>
  )
}
