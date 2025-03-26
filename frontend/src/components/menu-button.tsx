import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "py-2.5 px-4 flex gap-2 rounded-xl",
  variants: {
    variant: {
      selected: "text-action-sm text-orange-base bg-shape",
      default: "text-body-sm cursor-pointer active:opacity-80 hover:text-orange-base transition-color duration-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props {
  variant?: "default" | "selected";
  pageTitle: string;
  icon: IconSvgElement;
}

export function MenuButton({ variant, pageTitle, icon }: Props) {
  return (
    <div className={button({ variant })}>
      <HugeiconsIcon icon={icon} className="size-5" />
      {pageTitle}
    </div>
  );
}
