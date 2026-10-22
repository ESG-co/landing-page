import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ReactNode } from "react";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding font-mono text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 sm:h-11 md:h-12 gap-2 px-3.5 sm:px-4 md:px-4.5 text-xs sm:text-sm",
        xs: "h-6 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 sm:h-9 gap-1.5 px-2.5 sm:px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 sm:h-12 md:h-13 gap-2 px-4 sm:px-5 md:px-6 text-sm sm:text-base",
        icon: "size-10 sm:size-11 md:size-12",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 sm:size-9",
        "icon-lg": "size-12 md:size-13",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface CustomButtonProps {
  rightIcon?: ReactNode;
}

function Button({
  className,
  variant = "default",
  size = "default",
  rightIcon,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> &
  CustomButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        "cursor-pointer group",
        buttonVariants({ variant, size, className }),
      )}
      {...props}
    >
      <span className="uppercase">{children}</span>
      {rightIcon}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
