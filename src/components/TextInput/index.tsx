import { cloneElement, InputHTMLAttributes, ReactNode } from "react";

export type TextInputRootProps = {
  children: ReactNode;
};

export function TextInput({ children }: TextInputRootProps) {
  return (
    <div className="border-none h-12 outline-none focus:ring-2 ring-offset-2 ring-offset-gray-800 focus:ring-cyan-500 py-4 px-3 rounded w-full bg-gray-800 flex itens-center gap-3">
      {children}
    </div>
  );
}

export type TextInputIconProps = {
  children: JSX.Element;
};

function TextInputIcon({ children }: TextInputIconProps) {
  return cloneElement(children, {
    className: "w-6 h-6 text-gray-400",
  });
}
TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {};
function TextInputInput({ className, ...props }: TextInputInputProps) {
  return (
    <input
      className="bg-[transparent] flex-1 border-none outline-none text-gray-100 text-sm placeholder:text-gray-400"
      {...props}
    />
  );
}
TextInputInput.displayName = "TextInput.Input";

TextInput.Input = TextInputInput;
TextInput.Icon = TextInputIcon;
