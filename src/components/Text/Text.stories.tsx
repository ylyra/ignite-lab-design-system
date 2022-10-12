import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello world",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<TextProps<keyof JSX.IntrinsicElements>>;

export const Default: StoryObj<TextProps<keyof JSX.IntrinsicElements>> = {};
export const Small: StoryObj<TextProps<keyof JSX.IntrinsicElements>> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<TextProps<keyof JSX.IntrinsicElements>> = {
  args: {
    size: "lg",
  },
};
export const CustomComponent: StoryObj<TextProps<keyof JSX.IntrinsicElements>> =
  {
    args: {
      as: "p",
    },
  };
