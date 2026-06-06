"use client"

import * as React from "react"
import { ArrowUpRight, GitFork } from "lucide-react"

import { cn } from "@/lib/utils"

type GitHubButtonProps = React.ComponentProps<"a">

function GitHubButton({
  className,
  children = "GitHub Repo",
  ...props
}: GitHubButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <a
      className={cn(
        "group relative inline-flex h-[3.65rem] min-w-[12.5rem] items-center justify-center overflow-hidden rounded-full border border-white/18 bg-[#242936]/86 px-7 text-[1.05rem] font-[600] text-white shadow-[0_16px_42px_rgba(0,0,0,0.32)] outline-offset-4 backdrop-blur-xl transition duration-300 hover:border-white/28 hover:bg-[#2a3040]/92 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#65e8ff]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.045))]" />
      <span className="absolute inset-px rounded-full border border-white/8" />
      <span className="relative z-10 inline-flex items-center justify-center gap-3 whitespace-nowrap">
        <GitFork className="size-5" />
        {children}
        <ArrowUpRight className="size-4 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  )
}

export { GitHubButton }

