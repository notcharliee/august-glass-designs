import Image from "next/image"
import type { Metadata } from "next"

import aboutMe from "~/assets/about-me.webp"

import { Pager } from "~/components/pager"

export const metadata: Metadata = {
  title: "About Me",
  description: "About me.",
}

export default function About() {
  return (
    <div className="flex flex-col-reverse justify-center md:flex-row">
      <div className="w-full space-y-6 px-6 pb-8 md:py-12 lg:py-16 xl:px-24">
        <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl">
          about me
        </h1>
        <div className="space-y-6">
          <p>
            The glass seed for August Glass Designs was planted many years ago
            in Brighton, where I learnt how to make glass terrariums under the
            expert tuition of a master glass worker. Over the years those
            precious skills learnt, evolved further and August Glass Designs
            came into being.
          </p>
          <p>
            From design to creation, each piece is carefully made by me using
            traditional skills and traditional materials from my workshop in
            Lewes, set inside a hundreds of years old Tythe barn amongst a
            community of artisans.
          </p>
          <p>
            I take great pride in my work and set my own high quality standards.
            Its easy to see the conscientious care that goes into each creation
            and the love for my work is evident in the finished piece.
          </p>
          <p>
            When I'm not working away with glass, you will find me obsessing
            over history, trudging about with my dogs, reading and daydreaming.
          </p>
          <p>
            I live on the Sussex Coast with my family and those roguish dogs of
            mine.
          </p>
        </div>
        <Pager currentPage={"about me"} />
      </div>
      <div className="relative w-full p-0 before:absolute before:bottom-0 before:block before:h-[150px] before:w-full before:bg-gradient-to-b before:from-transparent before:to-background md:sticky md:top-16 md:h-screen-minus-header md:px-6 md:py-12 md:before:hidden lg:py-16 xl:px-24">
        <Image
          src={aboutMe}
          alt="A close-up view of a group of small, decorative glass terrariums containing various plants and flowers. The terrariums are made of metal and glass, with geometric shapes. Inside, there are red and white flowers, green leaves, and moss. Some terrariums also feature small string lights, adding a soft, warm glow to the arrangement. The overall aesthetic is modern and elegant."
          className="h-[50vh] object-cover md:h-full md:rounded-md md:border"
          placeholder="blur"
        />
      </div>
    </div>
  )
}
