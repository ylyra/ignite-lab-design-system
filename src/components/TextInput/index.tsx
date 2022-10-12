import { InputHTMLAttributes } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <div className="border-none outline-none focus:ring-2 ring-offset-2 ring-offset-gray-800 focus:ring-cyan-500 py-4 px-3 rounded  text-gray-100 text-sm placeholder:text-gray-400 w-full bg-gray-800">
      <input
        className="bg-[transparent] w-full border-none outline-none"
        {...props}
      />
    </div>
  );
}
