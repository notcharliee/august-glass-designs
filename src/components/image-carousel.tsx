"use client"

import { forwardRef } from "react"

import Image, { type StaticImageData } from "next/image"

import { cn } from "~/lib/utils"

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  srcs: StaticImageData[]
  speed?: "slow" | "normal" | "fast"
}

export const ImageCarousel = forwardRef<HTMLDivElement, ImageCarouselProps>(
  ({ srcs, speed, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden [-webkit-mask:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)] [mask:linear-gradient(180deg,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      {...props}
    >
      <div
        style={
          {
            "--carousel-animation-speed":
              speed === "slow" ? "20s" : speed === "fast" ? "10s" : "15s",
          } as React.CSSProperties
        }
        className="flex animate-[carousel-scroll_var(--carousel-animation-speed)_forwards_linear_infinite] flex-col items-stretch gap-6"
      >
        {srcs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt=""
            className="min-h-full w-full rounded-md border object-cover"
            placeholder="blur"
          />
        ))}
        {srcs.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt=""
            aria-hidden="true"
            className="min-h-full w-full rounded-md border object-cover"
            placeholder="blur"
          />
        ))}
      </div>
    </div>
  ),
)

ImageCarousel.displayName = "ImageCarousel"
