import { forwardRef } from "react"

export const HamburgerIcon = forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 10.8936H27M12 19.1064H27" stroke="black" strokeWidth="2" />
  </svg>
))

HamburgerIcon.displayName = "HamburgerIcon"
