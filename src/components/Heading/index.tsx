import { clsx } from "clsx";
import { createElement } from "react";

export type HeadingProps<
  TType extends keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >
> = JSX.IntrinsicElements[TType] & {
  size?: "sm" | "md" | "lg";
  as?: TType;
};

export function Heading<
  TType extends keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >
>({ children, size = "md", as }: HeadingProps<TType>) {
  const type = typeof as === "string" ? as : "h2";
  return createElement(type, {
    children,
    className: clsx("text-gray-100 font-bold font-sans", {
      "text-xl": size === "sm",
      "text-2xl": size === "md",
      "text-3xl": size === "lg",
    }),
  });
}
