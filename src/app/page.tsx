import Antigravity from "@/components/Antigravity";
import LightPillar from "@/components/LightPillart";
import LightRays from "@/components/Lights";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 min-w-screen flex min-h-screen items-center justify-center bg-black font-sans ">
      <LightPillar />
      <div>
        <div className="text-2xl font-bold text-[#3a6ff7] ">NETLE</div>
        <div className="text-2xl font-bold ">
          Hataların, en büyük öğretmenindir; onları cebinde taşı.
        </div>
      </div>
    </div>
  );
}
