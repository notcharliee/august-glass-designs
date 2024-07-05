"use client"

import { forwardRef } from "react"

import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "~/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("relative border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    marker: string
  }
>(({ className, children, marker = "•", ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group ml-4 flex flex-1 items-center p-4 text-left text-base font-medium transition-all md:ml-28 md:py-8",
        className,
      )}
      {...props}
    >
      <span className="absolute left-4 hidden md:block">{marker}</span>
      <span className="before:bg-secondary group-hover:underline-animated relative before:absolute before:-left-5 before:h-full before:w-1 before:duration-150 before:content-['↓'] group-[[data-state=open]]:before:rotate-180">
        {children}
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ml-4 overflow-hidden px-4 text-base md:ml-28"
    {...props}
  >
    <div className={cn("pb-4 pt-0 md:pb-8", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
