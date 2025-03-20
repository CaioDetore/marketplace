import { AlertCircleIcon, ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends ComponentProps<"div"> {
  error?: string;
  label?: string;
}

export function InputRoot({
  label,
  error,
  children,
  ...props
}: InputRootProps) {
  return (
    <div
      data-error={!!error}
      className="group flex-1"
      {...props}
    >
      <label
        className="text-label-md uppercase text-gray-200 group-focus-within:text-orange-base"
        htmlFor=""
      >
        {label}
      </label>
      <div className="relative flex">{children}</div>
      {!!error && (
        <span className="flex gap-1 mt-1 items-center text-body-xs text-danger">
          <HugeiconsIcon icon={AlertCircleIcon} />
          error
        </span>
      )}
    </div>
  );
}

export function InputIcon({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={twMerge(
        "size-6 text-gray-200 group-focus-within:text-orange-base absolute top-1/2 transform -translate-y-1/2 group-[&:not(:has(input:placeholder-shown))]:text-orange-base group-data-[error='true']:text-danger",
        className
      )}
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {
  password?: boolean
}


export function InputField({type, password, ...props }: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!password)

  return (
    <>
      <InputIcon onClick={() => setIsPasswordVisible(prevState => !prevState)} data-password={password} className="absolute hidden right-0 data-[password='true']:flex">
        <HugeiconsIcon icon={isPasswordVisible ? ViewOffIcon: ViewIcon} />
      </InputIcon>
      <input
        placeholder="Placeholder"
        type={isPasswordVisible ? "password" : type}
        className="flex-1 p-2 pl-8 border-b-2 caret-orange-base border-gray-100 outline-0 focus-within:border-gray-400"
        {...props}
      />
    </>
  );
}
