import { HugeiconsIcon } from "@hugeicons/react";
import { InputField, InputIcon, InputRoot } from "../../components/input";
import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "../../components/button";
import { Link } from "react-router";

export function SignIn() {
  return (
    <form className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="font-sans text-2xl text-gray-500 font-medium">
            Acesse sua conta
          </h1>
          <span className="mt-2 font-poppins text-gray-300">
            Informe seu e-mail e senha para entrar
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <InputRoot label="E-mail">
            <InputIcon>
              <HugeiconsIcon icon={Mail02Icon} />
            </InputIcon>

            <InputField placeholder="Seu e-mail cadastrado" />
          </InputRoot>

          <InputRoot label="Senha">
            <InputIcon>
              <HugeiconsIcon icon={AccessIcon} />
            </InputIcon>

            <InputField password placeholder="Sua senha de acesso" />
          </InputRoot>
        </div>

        <Button>
          Acessar
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </Button>
      </div>

      <div>
        <span className="mb-5 block text-gray-300 text-body-md">Ainda não tem uma conta?</span>
        <Link to="/sign-up">
          <Button variant="outlined" type="button">
            Cadastrar
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button>
        </Link>
      </div>
    </form>
  );
}
