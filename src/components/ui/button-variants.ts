import { cva } from "class-variance-authority";

// Kept apart from button.tsx so that file only exports components (keeps Fast Refresh working).
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        solid: "bg-orange text-white hover:bg-orange-600",
        outline: "border border-navy text-navy hover:bg-navy hover:text-white",
        ghost: "text-navy hover:bg-navy/5",
        link: "text-orange underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);
