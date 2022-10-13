import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { SignIn, SignInProps } from "./sign-in";

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<SignInProps>;

export const Default: StoryObj<SignInProps> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByLabelText("Digite seu E-mail"),
      "yanlyra3@gmail.com"
    );
    userEvent.type(canvas.getByLabelText("******"), "123456");

    userEvent.click(
      canvas.getByRole("button", { name: "Entrar na plataforma" })
    );

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado")).toBeInTheDocument();
    });
  },
};
