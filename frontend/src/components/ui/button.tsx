import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ciberista-green text-white shadow hover:bg-ciberista-green-hover",
        destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline: "border border-ciberista-gray-medium bg-white shadow-sm hover:bg-ciberista-gray-light hover:text-ciberista-text-primary",
        secondary: "bg-ciberista-gray-light text-ciberista-text-primary shadow-sm hover:bg-ciberista-gray-medium",
        ghost: "hover:bg-ciberista-gray-light hover:text-ciberista-text-primary",
        link: "text-ciberista-purple underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-ciberista-green to-ciberista-green-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
        purple: "bg-ciberista-purple text-white shadow hover:bg-ciberista-purple-dark",
        blue: "bg-ciberista-blue text-white shadow hover:bg-ciberista-blue-alt",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
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
