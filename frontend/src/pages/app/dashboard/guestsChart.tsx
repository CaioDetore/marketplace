import { Calendar04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import colors from "tailwindcss/colors";

export function GuestsChart() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
  ];

  return (
    <div className="bg-white flex flex-col gap-7 flex-1 rounded-2xl p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-title-sm text-gray-500 font-bold">Visitantes</h1>

        <div className="flex items-center gap-2">
          <HugeiconsIcon className="size-4  text-blue-dark" icon={Calendar04Icon} />

          <span className="text-label-sm text-gray-300">26 de junho - 25 de julho</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={266}>
        <LineChart data={data} style={{ fontSize: 12 }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} dy={16} />
          <YAxis
            width={30}
            stroke="#888"
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid vertical={false} strokeDasharray="5 5" />
          <Line
            stroke={colors.blue[400]}
            type="linear"
            strokeWidth={2}
            dataKey="uv"
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
