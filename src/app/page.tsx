/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image"
import type { Metadata } from "next"

import * as assets from "~/assets/_carousel"

import { ImageCarousel } from "~/components/image-carousel"
import { Pager } from "~/components/pager"

import { useMediaQuery } from "~/hooks/use-media-query"

import { splitArray } from "~/lib/utils"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  const isTabletLayout = useMediaQuery("(max-width: 1024px)")

  const assetsArray = Object.values(assets)

  const carouselSrcs = isTabletLayout
    ? splitArray(assetsArray, 2)
    : splitArray(assetsArray, 3)

  return (
    <div className="flex h-full flex-col md:flex-row">
      <div className="relative h-[30vh] before:absolute before:bottom-0 before:block before:h-[150px] before:w-full before:bg-gradient-to-b before:from-transparent before:to-background md:hidden">
        <Image
          src={assets.ringBox}
          alt="A small rectangular glass ring box with metal edges and a simple latch on the front, placed on a light surface. The box is empty and has a clear, minimalist design. Surrounding the box are delicate white baby's breath flowers and a single yellow billy button flower, adding a natural, delicate touch to the scene. The background is soft and slightly blurred, highlighting the ring box and the flowers."
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="h-full w-full flex-col space-y-8 overflow-auto px-6 pb-8 pt-0 md:py-12 lg:space-y-12 lg:py-16 xl:px-24">
        <h1 className="text-balance font-display text-4xl lg:text-5xl xl:text-6xl">
          handmade glass boxes and unique glass structures
        </h1>
        <div className="space-y-6">
          <p>
            August Glass Designs offers handmade glass boxes and glass
            structures for the discerning buyer, looking for high quality
            artisan made products that will last.
          </p>
          <p>
            I offer a unique selection of glass structures ranging from small
            home accents to statement wedding decor. Traditional vintage style
            to modern minimalist.
          </p>
          <p>
            Geometric glass terrariums continue to be a firm favourite and keen
            cacti and succulent fans can find the perfect handmade glass
            structure for their small green friends.
          </p>
          <p>
            Glass display boxes come in all shapes and sizes for so many uses
            from taxidermy projects to memory boxes and everything in between.
            Custom designs are welcome. The possibilities are endless when
            finding that right design.
          </p>
          <p>
            All of my products at August Glass Designs are made by hand using
            traditional techniques learned many years ago.
          </p>
          <p>Each piece is carefully created on the south coast of England.</p>
        </div>
        <Pager currentPage={"home"} />
      </div>
      <div className="sticky top-16 hidden h-screen-minus-header w-full items-stretch justify-center gap-6 p-8 px-6 md:flex xl:p-12">
        {isTabletLayout ? (
          <>
            <ImageCarousel srcs={carouselSrcs[0]} speed="fast" />
            <ImageCarousel srcs={carouselSrcs[1]} speed="normal" />
          </>
        ) : (
          <>
            <ImageCarousel srcs={carouselSrcs[0]} speed="fast" />
            <ImageCarousel srcs={carouselSrcs[1]} speed="normal" />
            <ImageCarousel srcs={carouselSrcs[2]} speed="normal" />
          </>
        )}
      </div>
    </div>
  )
}
