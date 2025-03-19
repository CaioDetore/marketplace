import { InputRoot } from "../../components/input";

export function SignIn() {
  return (
    <form action="">
      <div>
        <h1 className="font-sans text-2xl text-gray-500 font-medium">Acesse sua conta</h1>
        <span className="mt-2 font-poppins text-gray-300">Informe seu e-mail e senha para entrar</span>

        <div>
          <InputRoot />
        </div>
      </div>
    </form>
  )
}