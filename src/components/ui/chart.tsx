"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

// This is a placeholder for the Chart component
// The original component requires recharts which is causing build issues
// If you need to use this component, please install recharts

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<"light" | "dark", string> }
  )
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ReactNode
  }
>(({ id, className, children, config, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex aspect-video justify-center", className)}
      {...props}
    >
      <div className="text-center p-4">
        <p>Chart Placeholder</p>
        <p className="text-sm text-muted-foreground">
          This is a placeholder for the Chart component.
        </p>
      </div>
    </div>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  return null
}

const ChartTooltip = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-2 bg-background border rounded-md", className)}
      {...props}
    >
      Chart Tooltip Placeholder
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>
}

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    hideIcon?: boolean
    nameKey?: string
    payload?: any[]
    verticalAlign?: "top" | "bottom"
  }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", className)}
      {...props}
    >
      Chart Legend Placeholder
    </div>
  )
})
ChartLegendContent.displayName = "ChartLegend"

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
