import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

interface Props {
  description: string;
  icon: IconSvgElement;
  value: string | number;
}
export default function MetricCard({ icon, description, value }: Props) {
  return (
    <div className="flex h-28 gap-4 bg-white p-3 rounded-2xl">
      <div className="w-20 bg-blue-light items-center justify-center flex rounded-xl">
        <HugeiconsIcon className="text-blue-dark size-10" icon={icon} />
      </div>

      <div className="max-w-20 gap-2 flex flex-col">
        <h1 className="text-title-lg font-bold">{value}</h1>
        <span className="text-body-xs text-gray-300">{description}</span>
      </div>
    </div>
  );
}
