import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button, Checkbox, Heading, Text, TextInput } from "../components";
import { Logo } from "../Logo";

export type SignInProps = {};

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch mt-10 w-full max-w-sm"
      >
        {isUserSignedIn && <Text>Login realizado</Text>}
        <div className="flex flex-col gap-2">
          <Text as="label" className="font-semibold" htmlFor="email">
            Endereço de e-mail
          </Text>
          <TextInput>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu E-mail"
            />
          </TextInput>
        </div>

        <div className="flex flex-col gap-2">
          <Text as="label" className="font-semibold" htmlFor="password">
            Sua senha
          </Text>
          <TextInput>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="remember-me" />
          <Text
            as="label"
            size="sm"
            className="text-gray-200 cursor-pointer"
            htmlFor="remember-me"
          >
            Lembrar de mim por 30 dias
          </Text>
        </div>

        <Button className="mt-4" fluid>
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          as="a"
          href="#"
          size="sm"
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
        >
          Esqueceu sua senha?
        </Text>
        <Text
          as="a"
          href="#"
          size="sm"
          className="text-gray-400 underline hover:text-gray-200 transition-colors"
        >
          Não possui conta? Crie uma agora!
        </Text>
      </footer>
    </div>
  );
}
