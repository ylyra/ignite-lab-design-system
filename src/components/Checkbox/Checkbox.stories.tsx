import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from ".";
import { Text } from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {
    onCheckedChange: {
      action: "onCheckedChange",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-2">
        {Story({
          args: {
            id: "remeber-me",
          },
        })}
        <Text as="label" size="sm" htmlFor="remeber-me">
          Lembrar de mim por 30 dias
        </Text>
      </div>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
