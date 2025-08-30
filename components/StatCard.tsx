import Image from "next/image";
import Card from "./Card";

type StatCardProps = {
  icon: string;
  title: string;
  value: string | number;
  intent?: "success" | "danger" | "default";
};

const intentRing = {
  success: "ring-emerald-100",
  danger: "ring-red-100",
  default: "ring-slate-100",
};

export default function StatCard({ icon, title, value, intent = "default" }: StatCardProps) {
  return (
    <Card className="flex items-center gap-4 p-6">
      <div className={`rounded-xl bg-white p-3 ring-2 ${intentRing[intent]} shadow-soft`}>
        <Image src={icon} alt="" width={24} height={24} />
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-3xl font-semibold">{value}</p>
      </div>
    </Card>
  );
}
