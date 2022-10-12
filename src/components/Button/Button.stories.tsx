import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
    fluid: false,
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
export const Fluid: StoryObj<ButtonProps> = {
  args: {
    fluid: true,
  },
};
