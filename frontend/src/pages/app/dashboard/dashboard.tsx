import { SaleTag02Icon, Store02Icon, UserMultiple02Icon } from "@hugeicons/core-free-icons";
import { GuestsChart } from "./guestsChart";
import MetricCard from "./metricCard";

export function Dashboard() {
  return (
    <div>
      <h1 className="text-title-md font-bold">Últimos 30 dias</h1>
      <h2 className="text-body-md text-gray-300">
        Confira as estatísticas da sua loja no último mês
      </h2>

      <div className="flex gap-6 w-full mt-10">
        <div className="flex flex-col gap-4 w-60">
          <MetricCard description="Produtos vendidos" icon={SaleTag02Icon} value={24} />
          <MetricCard description="Produtos anunciados" icon={Store02Icon} value={56} />
          <MetricCard description="Pessoas visitantes" icon={UserMultiple02Icon} value={1.238} />
        </div>

        <GuestsChart />
      </div>
    </div>
  );
}
