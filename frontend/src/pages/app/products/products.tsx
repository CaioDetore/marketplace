import { HugeiconsIcon } from "@hugeicons/react";
import { InputField, InputIcon, InputRoot } from "../../../components/input";
import { Search01Icon } from "@hugeicons/core-free-icons";
import {
  SelectIcon,
  SelectInput,
  SelectRoot,
} from "../../../components/select";
import { Button } from "../../../components/button";

export function Products() {
  return (
    <div>
      <h1 className="text-title-md font-bold">Seus produtos</h1>
      <h2 className="text-body-md text-gray-300">
        Acesse gerencie a sua lista de produtos à venda
      </h2>

      <div className="flex gap-6 w-full mt-10">
        <div className="flex flex-col gap-7 w-60 bg-white p-6 rounded-2xl">
          <h2 className="text-sm text-gray-300">Filtrar</h2>

          <div className="flex flex-col gap-5">
            <InputRoot>
              <InputIcon>
                <HugeiconsIcon icon={Search01Icon} />
              </InputIcon>

              <InputField />
            </InputRoot>

            <SelectRoot>
              <SelectIcon>
                <HugeiconsIcon icon={Search01Icon} />
              </SelectIcon>

              <SelectInput>
                <option selected>Escolha</option>
                <option>Anunciado</option>
                <option>Cancelado</option>
              </SelectInput>
            </SelectRoot>
          </div>

          <Button className="h-14 justify-center">Aplicar filtro</Button>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="w-full bg-white rounded-3xl p-1">
            <img
              src=""
              className="w-full object-cover h-36 rounded-3xl"
              alt=""
            />

            <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h1 className="text-subtitle font-semibold">Sofá</h1>
                
                <span className="text-title-sm font-bold">
                  <small className="text-label-md text-gray-500">
                    R$
                  </small>
                  {(1200.90).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).replace('R$', '')}
                </span>
              </div>

              <p className="line-clamp- text-body-sm text-gray-300">
                Sofá revestido em couro legítimo, com estrutura em madeira
                maciça e pés em metal cromado.
              </p>
            </div>
          </div>

          <div className="w-full bg-white rounded-3xl">a</div>
        </div>
      </div>
    </div>
  );
}
