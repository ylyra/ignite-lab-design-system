import * as RadixCheckbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { Check } from "phosphor-react";

export type CheckboxProps = RadixCheckbox.CheckboxProps & {};

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className={clsx("w-6 h-6 p-[2px] bg-gray-800 rounded", {
        className: className,
      })}
      {...props}
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
