import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "w-full text-action-md rounded-xl flex items-center justify-between p-5 active:opacity-80",
  variants: {
    variant: {
      primary: "bg-orange-base text-white",
      secondary: "bg-orange-dark text-white",
      outlined: "bg-transparent border-orange-base border-1 text-orange-base",
      "outlined-secondary": "bg-transparent border-orange-dark text-orange-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outlined" | "outlined-secondary";
}

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button className={button({ variant })} {...props}>
      {children}
    </button>
  );
}
