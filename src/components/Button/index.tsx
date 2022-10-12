import clsx from "clsx";
import { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  fluid?: boolean;
};

export function Button({
  children,
  className,
  fluid = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-base hover:bg-cyan-300 transition-colors outline-none focus:ring-2 ring-offset-2 ring-offset-[#0f172a] focus:ring-cyan-500",
        {
          "w-full": fluid,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}
