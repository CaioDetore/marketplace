import { HugeiconsIcon } from "@hugeicons/react";
import { InputField, InputIcon, InputRoot } from "../../components/input";
import {
  ArrowRight02Icon,
  CallIcon,
  Mail02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "../../components/button";
import { Link } from "react-router";

import { FileInput } from "../../components/file-input";

export function SignUp() {
  return (
    <form className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="font-sans text-2xl text-gray-500 font-medium">
            Crie sua conta
          </h1>
          <span className="mt-2 font-poppins text-gray-300">
            Informe os seus dados pessoais e de acesso
          </span>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h3 className="text-title-sm">Perfil</h3>
            <FileInput />

            <InputRoot label="Nome">
              <InputIcon>
                <HugeiconsIcon icon={UserIcon} />
              </InputIcon>

              <InputField placeholder="Seu nome completo" />
            </InputRoot>

            <InputRoot label="Telefone">
              <InputIcon>
                <HugeiconsIcon icon={CallIcon} />
              </InputIcon>

              <InputField password placeholder="Sua senha de acesso" />
            </InputRoot>
          </div>

          <div>
            <h3>Acesso</h3>
            <InputRoot label="E-mail">
              <InputIcon>
                <HugeiconsIcon icon={Mail02Icon} />
              </InputIcon>

              <InputField placeholder="Seu e-mail cadastrado" />
            </InputRoot>
          </div>
        </div>

        <Button>
          Cadastrar
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </Button>
      </div>

      <div>
        <span className="mb-5 block text-gray-300 text-body-md">
          Já tem uma conta?
        </span>

        <Link to="/sign-in">
          <Button variant="outlined" type="button">
            Acessar
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button>
        </Link>
      </div>
    </form>
  );
}
