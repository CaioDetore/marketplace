import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: string;
}

export function InputRoot({ error, children, ...props }: InputRootProps) {
  return (
    <div data-error={!!error} className="group" {...props}>
      <label
        className="text-label-md uppercase text-gray-200 group-focus-within:text-orange-base"
        htmlFor=""
      >
        label
      </label>
      <div className="relative">{children}</div>
      {!!error && (
        <span className="flex gap-1 mt-1 items-center text-body-xs text-danger">
          <HugeiconsIcon icon={AlertCircleIcon} />
          error
        </span>
      )}
    </div>
  );
}

export function InputIcon(props: ComponentProps<"span">) {
  return (
    <span
      className="size-6 text-gray-200 group-focus-within:text-orange-base absolute top-1/2 transform -translate-y-1/2 group-[&:not(:has(input:placeholder-shown))]:text-orange-base group-data-[error='true']:text-danger"
      {...props}
    />
  );
}

export function InputField(props: ComponentProps<"input">) {
  return (
    <input
      placeholder="Placeholder"
      className="p-2 pl-8 border-b-2 caret-orange-base border-gray-100 outline-0 focus-within:border-gray-400"
      {...props}
    />
  );
}
