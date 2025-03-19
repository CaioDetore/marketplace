import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({...props}: InputRootProps) {
  return (
    <div {...props} />
  )
}

export function InputIcon(props: ComponentProps<"span">) {
  return <span {...props} />
}

export function InputField(props: ComponentProps<"input">) {
  return <input {...props} />
}