import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        outline: "bg-background hover:bg-accent hover:text-accent-foreground active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        ghost: "hover:bg-accent hover:text-accent-foreground border-0 shadow-none active:translate-y-1 active:translate-x-1",
        link: "text-primary underline-offset-4 hover:underline border-0 shadow-none",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
