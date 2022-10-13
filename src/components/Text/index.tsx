import { clsx } from "clsx";
import { createElement } from "react";

export type TextProps<TType extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TType] & {
    size?: "sm" | "md" | "lg";
    as?: TType;
  };

export function Text<TType extends keyof JSX.IntrinsicElements>({
  children,
  size = "md",
  as,
  className,
  ...props
}: TextProps<TType>) {
  const type = typeof as === "string" ? as : "p";
  return createElement(type, {
    children,
    className: clsx(
      "text-gray-100 font-sans",
      {
        "text-sm": size === "sm",
        "text-base": size === "md",
        "text-lg": size === "lg",
      },
      className
    ),
    ...props,
  });
}
