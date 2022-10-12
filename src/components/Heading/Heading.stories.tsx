import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<
  HeadingProps<
    keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
  >
>;

export const Default: StoryObj<
  HeadingProps<
    keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
  >
> = {};
export const Small: StoryObj<
  HeadingProps<
    keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
  >
> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<
  HeadingProps<
    keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
  >
> = {
  args: {
    size: "lg",
  },
};
export const CustomComponent: StoryObj<
  HeadingProps<
    keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
  >
> = {
  args: {
    as: "h1",
  },
};
