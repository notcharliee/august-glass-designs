"use client"

import { forwardRef } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { Slot } from "@radix-ui/react-slot"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 gap-2 font-display duration-150",
  {
    variants: {
      variant: {
        default: "border rounded-md hover:bg-foreground/5 tracking-none",
        link: "underline-animated px-0",
      },
      size: {
        default: "text-lg md:text-xl px-6 py-2",
        sm: "text-sm md:text-base px-4 py-1.5",
        xs: "text-xs md:text-sm px-3 py-1.5",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        className: "px-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = "Button"
