import { SaleTag02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { GuestsChart } from "./guestsChart";

export function Dashboard() {
  return (
    <div>
      <h1 className="text-title-md font-bold">Últimos 30 dias</h1>
      <h2 className="text-body-md text-gray-300">
        Confira as estatísticas da sua loja no último mês
      </h2>

      <div className="flex gap-6 w-full mt-10">
        <div className="flex flex-col gap-4 w-60">
          <div className="flex h-28 gap-4 bg-white p-3 rounded-2xl">
            <div className="w-20 bg-blue-light items-center justify-center flex rounded-xl">
              <HugeiconsIcon
                className="text-blue-dark size-10"
                icon={SaleTag02Icon}
              />
            </div>

            <div className="max-w-20 gap-2 flex flex-col">
              <h1 className="text-title-lg font-bold">24</h1>
              <span className="text-body-xs text-gray-300">Produtos Vendidos</span>
            </div>
          </div>

          <div className="bg-white">a</div>
          <div className="bg-white">a</div>
        </div>

        <GuestsChart />
      </div>
    </div>
  );
}
