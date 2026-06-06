import * as React from "react"

import { cn } from "@/lib/utils"

type ShinyButtonProps = React.ComponentProps<"a">

function ShinyButton({ className, children, ...props }: ShinyButtonProps) {
  return (
    <a className={cn("shiny-cta", className)} {...props}>
      <span>{children}</span>
    </a>
  )
}

export { ShinyButton }
