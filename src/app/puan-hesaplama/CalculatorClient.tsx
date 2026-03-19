"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  Info,
  Zap,
  Plus,
  ArrowRight,
  History,
  Languages,
  Calendar,
  CheckCircle,
  GraduationCap,
  Target,
} from "lucide-react";
import { YKS_DATA, YksYear } from "@/constants/yks-data";
import Link from "next/link";
import Image from "next/image";

type PuanType = "tyt" | "say" | "ea" | "soz" | "dil";

interface TestInput {
  correct: number;
  incorrect: number;
}

// --- Helper Functions ---
const calculateNet = (input: TestInput) => {
  return input.correct - (input.incorrect || 0) * 0.25;
};

const calculateScore = (type: PuanType, year: YksYear, tyt: any, ayt: any, obp: number, isCanceledObp: boolean) => {
  const data = YKS_DATA[year];
  const tytNets = {
    tur: calculateNet(tyt.turkce),
    sos: calculateNet(tyt.sosyal),
    mat: calculateNet(tyt.matematik),
    fen: calculateNet(tyt.fen),
  };

  const aytNets = {
    mat: calculateNet(ayt.matematik),
    fiz: calculateNet(ayt.fizik),
    kim: calculateNet(ayt.kimya),
    biy: calculateNet(ayt.biyoloji),
    edb: calculateNet(ayt.edebiyat),
    tar1: calculateNet(ayt.tarih1),
    cog1: calculateNet(ayt.cografya1),
    tar2: calculateNet(ayt.tarih2),
    cog2: calculateNet(ayt.cografya2),
    fel: calculateNet(ayt.felsefe),
    din: calculateNet(ayt.din),
    ydt: calculateNet(ayt.dil),
  };

  let ham = 0;

  if (type === "tyt") {
    ham = data.tyt.base + 
      (tytNets.tur * data.tyt.turkce) + 
      (tytNets.sos * data.tyt.sosyal) + 
      (tytNets.mat * data.tyt.matematik) + 
      (tytNets.fen * data.tyt.fen);
  } else if (type === "say") {
    ham = data.say.base +
      (tytNets.tur * data.say.tyt_tur) +
      (tytNets.sos * data.say.tyt_sos) +
      (tytNets.mat * data.say.tyt_mat) +
      (tytNets.fen * data.say.tyt_fen) +
      (aytNets.mat * data.say.ayt_mat) +
      (aytNets.fiz * data.say.ayt_fiz) +
      (aytNets.kim * data.say.ayt_kim) +
      (aytNets.biy * data.say.ayt_biy);
  } else if (type === "ea") {
    ham = data.ea.base +
      (tytNets.tur * data.ea.tyt_tur) +
      (tytNets.sos * data.ea.tyt_sos) +
      (tytNets.mat * data.ea.tyt_mat) +
      (tytNets.fen * data.ea.tyt_fen) +
      (aytNets.mat * data.ea.ayt_mat) +
      (aytNets.edb * data.ea.ayt_edb) +
      (aytNets.tar1 * data.ea.ayt_tar1) +
      (aytNets.cog1 * data.ea.ayt_cog1);
  } else if (type === "soz") {
    const sozData = data.soz as any;
    ham = data.soz.base +
      (tytNets.tur * sozData.tyt_tur) +
      (tytNets.sos * sozData.tyt_sos) +
      (tytNets.mat * sozData.tyt_mat) +
      (tytNets.fen * sozData.tyt_fen) +
      (aytNets.edb * sozData.ayt_edb) +
      (aytNets.tar1 * sozData.ayt_tar1) +
      (aytNets.cog1 * sozData.ayt_cog1) +
      (aytNets.tar2 * sozData.ayt_tar2) +
      (aytNets.cog2 * (sozData.ayt_cog2 || sozData.cog2)) +
      (aytNets.fel * sozData.ayt_fel) +
      (aytNets.din * sozData.ayt_din);
  } else if (type === "dil") {
    ham = data.dil.base +
      (tytNets.tur * data.dil.tyt_tur) +
      (tytNets.sos * data.dil.tyt_sos) +
      (tytNets.mat * data.dil.tyt_mat) +
      (tytNets.fen * data.dil.tyt_fen) +
      (aytNets.ydt * data.dil.ydt);
  }

  const clampedHam = Math.min(500, ham);
  const yer = clampedHam + (obp * 0.6 * (isCanceledObp ? 0.5 : 1));
  return { ham: clampedHam, yer };
};

// --- Custom Hook ---
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

// --- Components ---
const InputRow = React.memo(({ 
  label, subject, correct, incorrect, oturumu, max, onInputChange 
}: { 
  label: string, 
  subject: string, 
  correct: number, 
  incorrect: number, 
  oturumu: 'tyt' | 'ayt', 
  max: number,
  onInputChange: (oturumu: 'tyt' | 'ayt', subject: string, field: 'correct' | 'incorrect', value: string) => void
}) => {
  const net = calculateNet({ correct, incorrect });
  
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white hover:bg-blue-50/50 border-b border-gray-100 transition-colors last:border-0">
      <div className="flex items-center gap-3 mb-3 sm:mb-0">
        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
          <BookOpen className="w-4 h-4" />
        </div>
        <div>
          <span className="text-sm font-bold text-gray-700 block">{label}</span>
          <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{max} Soru</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <input 
            type="number" 
            placeholder="D"
            value={correct || ""}
            onChange={(e) => onInputChange(oturumu, subject, 'correct', e.target.value)}
            className="w-16 h-10 bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl text-center font-bold text-gray-900 outline-none transition-all"
          />
          <input 
            type="number" 
            placeholder="Y"
            value={incorrect || ""}
            onChange={(e) => onInputChange(oturumu, subject, 'incorrect', e.target.value)}
            className="w-16 h-10 bg-gray-100 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-xl text-center font-bold text-gray-900 outline-none transition-all"
          />
        </div>
        <div className="w-16 text-right">
          <span className="text-sm font-black text-[#3a6ff7]">
            {net.toFixed(2)}
          </span>
          <span className="text-[10px] text-gray-400 block font-bold">NET</span>
        </div>
      </div>
    </div>
  );
});

InputRow.displayName = "InputRow";

// --- Main Page Component ---
export default function YksCalculator() {
  const [selectedYear, setSelectedYear] = useState<YksYear>("2024");
  const [activeTab, setActiveTab] = useState<"tyt" | "ayt" | "ydt">("tyt");
  const [obp, setObp] = useState<number>(80);
  const [isCanceledObp, setIsCanceledObp] = useState(false);

  const [targetPoints, setTargetPoints] = useState<number>(420);
  const [targetName, setTargetName] = useState<string>("Bilgisayar Mühendisliği");

  // Instant State for Inputs
  const [tyt, setTyt] = useState({
    turkce: { correct: 0, incorrect: 0 },
    sosyal: { correct: 0, incorrect: 0 },
    matematik: { correct: 0, incorrect: 0 },
    fen: { correct: 0, incorrect: 0 },
  });

  const [ayt, setAyt] = useState({
    matematik: { correct: 0, incorrect: 0 },
    fizik: { correct: 0, incorrect: 0 },
    kimya: { correct: 0, incorrect: 0 },
    biyoloji: { correct: 0, incorrect: 0 },
    edebiyat: { correct: 0, incorrect: 0 },
    tarih1: { correct: 0, incorrect: 0 },
    cografya1: { correct: 0, incorrect: 0 },
    tarih2: { correct: 0, incorrect: 0 },
    cografya2: { correct: 0, incorrect: 0 },
    felsefe: { correct: 0, incorrect: 0 },
    din: { correct: 0, incorrect: 0 },
    dil: { correct: 0, incorrect: 0 },
  });

  // Debounced Values for Heavy Calculations
  const debouncedTyt = useDebounce(tyt, 600);
  const debouncedAyt = useDebounce(ayt, 600);
  const debouncedObp = useDebounce(obp, 600);
  const debouncedSelectedYear = useDebounce(selectedYear, 600);

  const results = useMemo(() => {
    return {
      tyt: calculateScore("tyt", debouncedSelectedYear, debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp),
      say: calculateScore("say", debouncedSelectedYear, debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp),
      ea: calculateScore("ea", debouncedSelectedYear, debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp),
      soz: calculateScore("soz", debouncedSelectedYear, debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp),
      dil: calculateScore("dil", debouncedSelectedYear, debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp),
    };
  }, [debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp, debouncedSelectedYear]);

  const comparison = useMemo(() => {
    return (Object.keys(YKS_DATA) as YksYear[]).map(year => ({
      year,
      score: calculateScore("say", year, debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp)
    })).sort((a,b) => b.year.localeCompare(a.year));
  }, [debouncedTyt, debouncedAyt, debouncedObp, isCanceledObp]);

  const handleInputChange = useCallback((oturumu: 'tyt' | 'ayt', subject: string, field: 'correct' | 'incorrect', value: string) => {
    const num = parseInt(value) || 0;
    if (oturumu === 'tyt') {
      setTyt(prev => ({ ...prev, [subject]: { ...prev[subject as keyof typeof tyt], [field]: num } }));
    } else {
      setAyt(prev => ({ ...prev, [subject]: { ...prev[subject as keyof typeof ayt], [field]: num } }));
    }
  }, [tyt, ayt]);

  return (
    <div className="bg-white font-sans text-gray-900">


      <main className="max-w-7xl mx-auto px-6 pt-32 pb-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12 xl:col-span-8 space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#3a6ff7] text-[10px] font-black tracking-widest uppercase">
              <Calculator className="w-4 h-4" />
              YKS Puan Sihirbazı
            </div>
            <h1 className="text-5xl font-black tracking-tight leading-none text-gray-900">
              Puanını <span className="text-[#3a6ff7]">Hesapla</span>
            </h1>
            <p className="text-gray-400 text-lg font-bold max-w-xl">
              2019-2025 yılları arasındaki katsayılarla gerçek sınav verilerine dayalı puanını öğren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[#3a6ff7]" />
                     </div>
                     <span className="text-sm font-black text-gray-900">Sınav Yılı</span>
                  </div>
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value as YksYear)}
                    className="bg-white border-none rounded-xl px-4 py-2 text-sm font-black text-[#3a6ff7] shadow-sm outline-none cursor-pointer focus:ring-2 focus:ring-[#3a6ff7]/20"
                  >
                    {Object.keys(YKS_DATA).sort((a,b) => b.localeCompare(a)).map(year => (
                      <option key={year} value={year}>{year} Yılı</option>
                    ))}
                  </select>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Diploma Puanı (OBP)</span>
                    <span className="text-2xl font-black text-[#3a6ff7] leading-none">{obp}</span>
                  </div>
                  <input 
                    type="range" min="50" max="100" step="0.5" value={obp} 
                    onChange={(e) => setObp(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3a6ff7]"
                  />
               </div>
               <button 
                onClick={() => setIsCanceledObp(!isCanceledObp)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${isCanceledObp ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-white border-gray-100 text-gray-400'}`}
              >
                <div className="flex items-center gap-3">
                   <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isCanceledObp ? 'bg-orange-600 text-white' : 'bg-gray-100'}`}>
                    {isCanceledObp ? <CheckCircle className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                   </div>
                   <span className="text-xs font-bold text-left">Önceki sene bir bölüme yerleştim (Kırık OBP)</span>
                </div>
              </button>
            </div>
            <div className="bg-[#3a6ff7] p-8 rounded-[2.5rem] text-white shadow-2xl shadow-[#3a6ff7]/30 flex flex-col justify-between">
               <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center border border-white/20">
                     <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tighter leading-none">İpucu</h3>
                  <p className="text-sm font-bold text-blue-100 opacity-80 leading-relaxed mt-4">
                    Ham puanınızın üzerine OBP katkısı eklenerek "Yerleştirme Puanı" hesaplanır. 
                    Netlerinizi girdikten sonra sağ panelden sonuçları takip edebilirsiniz.
                  </p>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex p-1.5 bg-gray-50 rounded-[2rem] w-fit border border-gray-100">
                {[
                  { id: 'tyt', label: 'TYT', icon: <Zap className="w-4 h-4" /> },
                  { id: 'ayt', label: 'AYT', icon: <BookOpen className="w-4 h-4" /> },
                  { id: 'ydt', label: 'YDT', icon: <Languages className="w-4 h-4" /> },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2.5 px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === tab.id ? 'bg-white text-[#3a6ff7] shadow-xl shadow-gray-200/50' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
            </div>
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
                {activeTab === 'tyt' && (
                  <div className="divide-y divide-gray-100">
                    <InputRow label="Türkçe" subject="turkce" oturumu="tyt" max={40} correct={tyt.turkce.correct} incorrect={tyt.turkce.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Sosyal Bilimler" subject="sosyal" oturumu="tyt" max={20} correct={tyt.sosyal.correct} incorrect={tyt.sosyal.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Temel Matematik" subject="matematik" oturumu="tyt" max={40} correct={tyt.matematik.correct} incorrect={tyt.matematik.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Fen Bilimleri" subject="fen" oturumu="tyt" max={20} correct={tyt.fen.correct} incorrect={tyt.fen.incorrect} onInputChange={handleInputChange} />
                    <div className="p-8 bg-blue-50/20 flex justify-between items-center">
                      <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Toplam TYT Net</span>
                      <span className="text-4xl font-black text-[#3a6ff7]">
                        {(calculateNet(tyt.turkce) + calculateNet(tyt.sosyal) + calculateNet(tyt.matematik) + calculateNet(tyt.fen)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}
                {activeTab === 'ayt' && (
                  <div className="divide-y divide-gray-100">
                    <div className="px-8 py-5 bg-gray-50/50 italic"><span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sayısal Testleri</span></div>
                    <InputRow label="Matematik" subject="matematik" oturumu="ayt" max={40} correct={ayt.matematik.correct} incorrect={ayt.matematik.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Fizik" subject="fizik" oturumu="ayt" max={14} correct={ayt.fizik.correct} incorrect={ayt.fizik.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Kimya" subject="kimya" oturumu="ayt" max={13} correct={ayt.kimya.correct} incorrect={ayt.kimya.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Biyoloji" subject="biyoloji" oturumu="ayt" max={13} correct={ayt.biyoloji.correct} incorrect={ayt.biyoloji.incorrect} onInputChange={handleInputChange} />
                    <div className="px-8 py-5 bg-gray-50/50 border-t border-gray-100 italic"><span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sözel & EA Testleri</span></div>
                    <InputRow label="T. Dili ve Edebiyatı" subject="edebiyat" oturumu="ayt" max={24} correct={ayt.edebiyat.correct} incorrect={ayt.edebiyat.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Tarih-1" subject="tarih1" oturumu="ayt" max={10} correct={ayt.tarih1.correct} incorrect={ayt.tarih1.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Coğrafya-1" subject="cografya1" oturumu="ayt" max={6} correct={ayt.cografya1.correct} incorrect={ayt.cografya1.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Tarih-2" subject="tarih2" oturumu="ayt" max={11} correct={ayt.tarih2.correct} incorrect={ayt.tarih2.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Coğrafya-2" subject="cografya2" oturumu="ayt" max={11} correct={ayt.cografya2.correct} incorrect={ayt.cografya2.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Felsefe Grubu" subject="felsefe" oturumu="ayt" max={12} correct={ayt.felsefe.correct} incorrect={ayt.felsefe.incorrect} onInputChange={handleInputChange} />
                    <InputRow label="Din Kültürü" subject="din" oturumu="ayt" max={6} correct={ayt.din.correct} incorrect={ayt.din.incorrect} onInputChange={handleInputChange} />
                  </div>
                )}
                {activeTab === 'ydt' && (
                  <div className="divide-y divide-gray-100">
                    <InputRow label="Yabancı Dil (YDT)" subject="dil" oturumu="ayt" max={80} correct={ayt.dil.correct} incorrect={ayt.dil.incorrect} onInputChange={handleInputChange} />
                  </div>
                )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-12 xl:col-span-4">
           <div className="sticky top-28 space-y-8">
              <div className="bg-gray-900 rounded-[3rem] p-8 text-white shadow-2xl shadow-blue-200 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><TrendingUp className="w-24 h-24" /></div>
                <header className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 rounded-2xl bg-[#3a6ff7] flex items-center justify-center text-white shadow-xl shadow-[#3a6ff7]/20"><Calculator className="w-6 h-6" /></div>
                   <div>
                      <h3 className="text-xl font-black italic tracking-tighter leading-none">Puan Özeti</h3>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5 text-left">{selectedYear} KATSAYILARIYLA</p>
                   </div>
                </header>
                <div className="space-y-10 relative z-10">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-2">
                     <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block text-left">TYT YERLEŞTİRME PUANI</span>
                     <p className="text-5xl font-black italic tracking-tighter text-left">{results.tyt.yer.toFixed(4)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-left">
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block">SAYISAL</span>
                      <p className="text-2xl font-black italic">{results.say.yer.toFixed(2)}</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">EA</span>
                      <p className="text-2xl font-black italic">{results.ea.yer.toFixed(2)}</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest block">SÖZEL</span>
                      <p className="text-2xl font-black italic">{results.soz.yer.toFixed(2)}</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 space-y-1">
                      <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">DİL</span>
                      <p className="text-2xl font-black italic">{results.dil.yer.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="w-full py-5 bg-[#3a6ff7] hover:bg-blue-500 rounded-3xl text-sm font-black transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-[#3a6ff7]/20 uppercase">
                    Detaylı Analiz Gör<ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-8 space-y-6 relative overflow-hidden group">
                <header className="flex items-center gap-3 relative z-10 text-left">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#3a6ff7]"><Target className="w-5 h-5" /></div>
                   <div>
                      <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight italic">Hedef Bölüm Takibi</h4>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">BU YIL GİREBİLİR MİYİM?</p>
                   </div>
                </header>
                <div className="space-y-6 relative z-10">
                   <div className="space-y-3">
                      <input type="text" value={targetName} onChange={(e) => setTargetName(e.target.value)} placeholder="Örn: Hukuk Fakültesi" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-gray-900 placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-blue-100 transition-all text-left" />
                      <div className="flex-1 space-y-1 text-left">
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">HEDEF PUAN (GEÇEN YIL)</span>
                        <input type="number" value={targetPoints} onChange={(e) => setTargetPoints(Number(e.target.value))} className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm font-black text-[#3a6ff7] outline-none text-left" />
                      </div>
                   </div>
                   {(() => {
                      const currentScore = results.say.yer; 
                      const diff = currentScore - targetPoints;
                      const progress = Math.min(100, Math.max(0, (currentScore / targetPoints) * 100));
                      const isSuccess = diff >= 0;
                      return (
                        <div className="space-y-5">
                           <div className="flex items-end justify-between px-1">
                              <div className="text-left"><p className="text-2xl font-black italic tracking-tighter text-gray-900">%{progress.toFixed(1)}</p><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HEDEFE ULAŞMA ORANI</p></div>
                              <div className="text-right">{isSuccess ? (<div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black italic border border-green-100">GİREBİLEBİLİRSİN!</div>) : (<div className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black italic border border-red-100">{Math.abs(diff).toFixed(2)} PUAN KALDI</div>)}</div>
                           </div>
                           <div className="h-4 w-full bg-gray-50 rounded-full overflow-hidden p-1 border border-gray-100 flex items-center"><div className={`h-full rounded-full transition-all duration-1000 ${isSuccess ? 'bg-green-500 shadow-lg shadow-green-200' : progress > 80 ? 'bg-amber-400' : 'bg-[#3a6ff7]'}`} style={{ width: `${progress}%` }} /></div>
                        </div>
                      );
                   })()}
                </div>
              </div>

              <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-8 space-y-6">
                 <div className="flex items-center gap-3 mb-2"><History className="w-5 h-5 text-gray-400" /><h4 className="text-sm font-black text-gray-900 uppercase tracking-tight italic text-left">Yıllara Göre Kıyas (SAY)</h4></div>
                 <div className="space-y-3">
                    {comparison.map(comp => (
                      <div key={comp.year} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${comp.year === selectedYear ? 'bg-blue-50 border-[#3a6ff7]/30' : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-blue-100 group'}`}>
                         <div className="text-left"><span className={`text-sm font-black ${comp.year === selectedYear ? 'text-[#3a6ff7]' : 'text-gray-900'}`}>{comp.year} Yılı</span><p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Katsayıları</p></div>
                         <div className="text-right"><span className={`text-lg font-black italic ${comp.year === selectedYear ? 'text-[#3a6ff7]' : 'text-gray-900 opacity-60'}`}>{comp.score.yer.toFixed(2)}</span><p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Puan</p></div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
