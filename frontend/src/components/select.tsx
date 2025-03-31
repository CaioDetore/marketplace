import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SelectRootProps extends ComponentProps<"div"> {
  label?: string;
}

export function SelectRoot({ label, children, ...props }: SelectRootProps) {
  return (
    <div className="group flex-1" {...props}>
      <label
        className="text-label-md uppercase text-gray-200 group-focus-within:text-orange-base"
        htmlFor=""
      >
        {label}
      </label>
      <div className="relative flex">{children}</div>
    </div>
  );
}

export function SelectIcon({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={twMerge(
        "size-6 text-gray-200 group-focus-within:text-orange-base absolute top-1/2 transform -translate-y-1/2 group-data-[open='true']:text-orange-base",
        className
      )}
      {...props}
    />
  );
}

export function SelectInput({ children, ...props }: ComponentProps<"select">) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)

  return (
    <>
      <select
        data-open={isOpen}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="flex-1 text-body-sm text-gray-200 p-2 pl-8 border-b-2 caret-orange-base border-gray-100 outline-0 focus-within:border-gray-400 data-[open='true']:border-gray-400 group-data-[error='true']:text-gray-500"
        {...props}
      >
        {children}
      </select>
      <SelectIcon className="absolute hidden right-0">
        <HugeiconsIcon icon={isOpen ? ArrowUp01Icon : ArrowDown01Icon} />
      </SelectIcon>
    </>
  );
}
