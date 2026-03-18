"use client";

import React, { useState, useMemo, useEffect } from "react";
import { 
  Calculator, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Award, 
  Info,
  ChevronRight,
  LayoutGrid,
  Zap,
  Globe,
  Settings,
  X,
  Plus,
  ArrowRight,
  Trophy,
  History,
  Languages
} from "lucide-react";
import { YKS_DATA } from "@/constants/yks-data";
import Image from "next/image";
import Link from "next/link";

type Year = keyof typeof YKS_DATA;
type PuanType = "tyt" | "say" | "ea" | "soz" | "dil";

interface TestInput {
  correct: number;
  incorrect: number;
}

// Ranking interpolation helper
const getEstimatedRank = (score: number, year: Year, type: PuanType) => {
  const data = YKS_DATA[year].ranks[type];
  const points = Object.keys(data).map(Number).sort((a, b) => b - a); // [500, 400, 300, 200]
  
  if (score >= 500) return data[500 as keyof typeof data];
  if (score <= 100) return type === 'tyt' ? 3000000 : 1500000;

  for (let i = 0; i < points.length - 1; i++) {
    const highS = points[i];
    const lowS = points[i+1];
    
    if (score >= lowS && score <= highS) {
      const highR = data[highS as keyof typeof data];
      const lowR = data[lowS as keyof typeof data];
      
      // Linear interpolation
      const ratio = (highS - score) / (highS - lowS);
      const rank = highR + (lowR - highR) * ratio;
      return Math.round(rank);
    }
  }

  // Extrapolate below 200
  const lastPoint = points[points.length - 1];
  const lastRank = data[lastPoint as keyof typeof data];
  return Math.round(lastRank * (lastPoint / Math.max(1, score)));
};

export default function PremiumYksCalculator() {
  const [activeTab, setActiveTab] = useState<"tyt" | "ayt" | "ydt">("tyt");
  const [obp, setObp] = useState<number>(80);
  const [isCanceledObp, setIsCanceledObp] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Inputs
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

  const calculateNet = (input: TestInput) => {
    const net = input.correct - input.incorrect * 0.25;
    return Math.max(0, net);
  };

  const allResults = useMemo(() => {
    const years = Object.keys(YKS_DATA) as Year[];
    
    return years.map(year => {
      const data = YKS_DATA[year];
      const tytNets = {
        turkce: calculateNet(tyt.turkce),
        sosyal: calculateNet(tyt.sosyal),
        matematik: calculateNet(tyt.matematik),
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
        dil: calculateNet(ayt.dil),
      };

      // TYT Score Contribution logic depends on year
      // Simplified: (Net * Coeff) + Base
      const tytScore = data.tyt_base + 
        (tytNets.turkce * data.tyt.turkce) + 
        (tytNets.sosyal * data.tyt.sosyal) + 
        (tytNets.matematik * data.tyt.matematik) + 
        (tytNets.fen * data.tyt.fen);

      const calculateAytScore = (type: PuanType) => {
        let score = 0;
        let base = 100;

        // TYT Contribution (40%)
        const tytContrib = (tytScore - data.tyt_base) * 0.4;
        
        if (type === 'say') {
          base = data.say_base;
          score = (aytNets.mat * data.ayt_say.mat) + 
                  (aytNets.fiz * data.ayt_say.fiz) + 
                  (aytNets.kim * data.ayt_say.kim) + 
                  (aytNets.biy * data.ayt_say.biy);
        } else if (type === 'ea') {
          base = data.ea_base;
          score = (aytNets.mat * data.ayt_ea.mat) + 
                  (aytNets.edb * data.ayt_ea.edb) + 
                  (aytNets.tar1 * data.ayt_ea.tar1) + 
                  (aytNets.cog1 * data.ayt_ea.cog1);
        } else if (type === 'soz') {
          base = data.soz_base;
          score = (aytNets.edb * data.ayt_soz.edb) + 
                  (aytNets.tar1 * data.ayt_soz.tar1) + 
                  (aytNets.cog1 * data.ayt_soz.cog1) + 
                  (aytNets.tar2 * data.ayt_soz.tar2) + 
                  (aytNets.cog2 * data.ayt_soz.cog2) + 
                  (aytNets.fel * data.ayt_soz.fel) + 
                  (aytNets.din * data.ayt_soz.din);
        } else if (type === 'dil') {
          base = data.dil_base;
          score = (aytNets.dil * data.ayt_dil.dil);
        }

        const totalHam = base + tytContrib + score;
        return Math.min(500, totalHam);
      };

      const sayScore = calculateAytScore('say');
      const eaScore = calculateAytScore('ea');
      const sozScore = calculateAytScore('soz');
      const dilScore = calculateAytScore('dil');

      const obpContrib = obp * 0.6 * (isCanceledObp ? 0.5 : 1);

      return {
        year,
        tyt: { ham: tytScore, yer: tytScore + obpContrib, rank: getEstimatedRank(tytScore + obpContrib, year, 'tyt') },
        say: { ham: sayScore, yer: sayScore + obpContrib, rank: getEstimatedRank(sayScore + obpContrib, year, 'say') },
        ea: { ham: eaScore, yer: eaScore + obpContrib, rank: getEstimatedRank(eaScore + obpContrib, year, 'ea') },
        soz: { ham: sozScore, yer: sozScore + obpContrib, rank: getEstimatedRank(sozScore + obpContrib, year, 'soz') },
        dil: { ham: dilScore, yer: dilScore + obpContrib, rank: getEstimatedRank(dilScore + obpContrib, year, 'dil') },
      };
    });
  }, [tyt, ayt, obp, isCanceledObp]);

  const handleInputChange = (oturumu: 'tyt' | 'ayt', subject: string, field: 'correct' | 'incorrect', value: string) => {
    const num = parseInt(value) || 0;
    if (oturumu === 'tyt') {
      setTyt(prev => ({ ...prev, [subject]: { ...prev[subject as keyof typeof tyt], [field]: num } }));
    } else {
      setAyt(prev => ({ ...prev, [subject]: { ...prev[subject as keyof typeof ayt], [field]: num } }));
    }
  };

  const InputRow = ({ label, subject, data, oturumu, max }: { label: string, subject: string, data: TestInput, oturumu: 'tyt' | 'ayt', max: number }) => (
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
            value={data.correct || ""}
            onChange={(e) => handleInputChange(oturumu, subject, 'correct', e.target.value)}
            className="w-16 h-10 bg-gray-50 border-2 border-transparent focus:border-green-500 focus:bg-white rounded-xl text-center font-bold text-gray-900 outline-none transition-all"
          />
          <input 
            type="number" 
            placeholder="Y"
            value={data.incorrect || ""}
            onChange={(e) => handleInputChange(oturumu, subject, 'incorrect', e.target.value)}
            className="w-16 h-10 bg-gray-100 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-xl text-center font-bold text-gray-900 outline-none transition-all"
          />
        </div>
        <div className="w-16 text-right">
          <span className="text-sm font-black text-blue-600">
            {calculateNet(data).toFixed(2)}
          </span>
          <span className="text-[10px] text-gray-400 block font-bold">NET</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="h-16 border-b border-gray-100 px-4 sm:px-8 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform">Y</div>
          <span className="font-black text-xl tracking-tight text-gray-900">YKS Takip</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/puan-hesaplama" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Hesaplama</Link>
          <button className="hidden sm:block text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">Rehberlik</button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-xs font-black shadow-lg shadow-gray-200 hover:bg-black transition-all">GİRİŞ YAP</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-10">
            <header className="space-y-2">
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Puan Hesaplama</h1>
              <p className="text-gray-500 font-medium">Netlerini gir, başarı sıralamanı ve puanını keşfet.</p>
            </header>

            {/* OBP Card */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Diploma Notu (OBP)</label>
                  <span className="text-2xl font-black text-blue-600">{obp}</span>
                </div>
                <input 
                  type="range" min="50" max="100" step="0.5" value={obp} 
                  onChange={(e) => setObp(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
              <div className="md:w-px h-12 bg-gray-200 hidden md:block" />
              <button 
                onClick={() => setIsCanceledObp(!isCanceledObp)}
                className={`flex items-center gap-3 p-3 px-5 rounded-2xl border-2 transition-all ${isCanceledObp ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-white border-gray-100 text-gray-400'}`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${isCanceledObp ? 'bg-orange-600 text-white' : 'bg-gray-100'}`}>
                  {isCanceledObp && <CheckCircleIcon />}
                </div>
                <span className="text-xs font-bold leading-tight text-left">Önceki Sene Yerleştim <br/> <span className="opacity-60">(Kırık OBP)</span></span>
              </button>
            </div>

            {/* Test Tabs */}
            <div className="space-y-6">
              <div className="flex p-1 bg-gray-50 rounded-2xl w-fit">
                {[
                  { id: 'tyt', label: 'TYT', icon: <Zap className="w-3.5 h-3.5" /> },
                  { id: 'ayt', label: 'AYT', icon: <BookOpen className="w-3.5 h-3.5" /> },
                  { id: 'ydt', label: 'YDT', icon: <Languages className="w-3.5 h-3.5" /> },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden min-h-[400px]">
                {activeTab === 'tyt' && (
                  <div className="divide-y divide-gray-100">
                    <InputRow label="Türkçe" subject="turkce" oturumu="tyt" max={40} data={tyt.turkce} />
                    <InputRow label="Sosyal Bilimler" subject="sosyal" oturumu="tyt" max={20} data={tyt.sosyal} />
                    <InputRow label="Temel Matematik" subject="matematik" oturumu="tyt" max={40} data={tyt.matematik} />
                    <InputRow label="Fen Bilimleri" subject="fen" oturumu="tyt" max={20} data={tyt.fen} />
                    <div className="p-8 bg-blue-50/30 flex justify-between items-center">
                      <span className="text-sm font-black text-blue-900/60 uppercase tracking-widest">Toplam TYT Net</span>
                      <span className="text-3xl font-black text-blue-600">{(calculateNet(tyt.turkce) + calculateNet(tyt.sosyal) + calculateNet(tyt.matematik) + calculateNet(tyt.fen)).toFixed(2)}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'ayt' && (
                  <div className="divide-y divide-gray-100">
                    <div className="px-6 py-4 bg-gray-50/50">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Matematik & Fen</span>
                    </div>
                    <InputRow label="Matematik" subject="matematik" oturumu="ayt" max={40} data={ayt.matematik} />
                    <InputRow label="Fizik" subject="fizik" oturumu="ayt" max={14} data={ayt.fizik} />
                    <InputRow label="Kimya" subject="kimya" oturumu="ayt" max={13} data={ayt.kimya} />
                    <InputRow label="Biyoloji" subject="biyoloji" oturumu="ayt" max={13} data={ayt.biyoloji} />
                    
                    <div className="px-6 py-4 bg-gray-50/50">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Edebiyat & Sosyal</span>
                    </div>
                    <InputRow label="T. Dili ve Edebiyatı" subject="edebiyat" oturumu="ayt" max={24} data={ayt.edebiyat} />
                    <InputRow label="Tarih-1" subject="tarih1" oturumu="ayt" max={10} data={ayt.tarih1} />
                    <InputRow label="Coğrafya-1" subject="cografya1" oturumu="ayt" max={6} data={ayt.cografya1} />
                    <InputRow label="Tarih-2" subject="tarih2" oturumu="ayt" max={11} data={ayt.tarih2} />
                    <InputRow label="Coğrafya-2" subject="cografya2" oturumu="ayt" max={11} data={ayt.cografya2} />
                    <InputRow label="Felsefe Grubu" subject="felsefe" oturumu="ayt" max={12} data={ayt.felsefe} />
                    <InputRow label="Din Kültürü" subject="din" oturumu="ayt" max={6} data={ayt.din} />
                  </div>
                )}

                {activeTab === 'ydt' && (
                  <div className="divide-y divide-gray-100">
                    <InputRow label="Yabancı Dil" subject="dil" oturumu="ayt" max={80} data={ayt.dil} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-900 rounded-[32px] p-8 text-white shadow-2xl shadow-blue-200 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                  <Trophy className="w-32 h-32" />
                </div>
                
                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-white" /></div>
                  Puan Özeti
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">TYT YERLEŞTİRME</span>
                      <p className="text-4xl font-black">{allResults[0].tyt.rank.toLocaleString()} <span className="text-xs text-blue-400 bg-blue-900/50 px-2 py-1 rounded-md ml-2">Sıra</span></p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">PUAN</span>
                      <p className="text-xl font-bold">{allResults[0].tyt.yer.toFixed(4)}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block mb-1">SAYISAL</span>
                      <p className="text-2xl font-black">{allResults[0].say.rank.toLocaleString()} <span className="text-[10px] opacity-40">.</span></p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-1">EŞİT AĞIRLIK</span>
                      <p className="text-2xl font-black">{allResults[0].ea.rank.toLocaleString()} <span className="text-[10px] opacity-40">.</span></p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest block mb-1">SÖZEL</span>
                      <p className="text-2xl font-black">{allResults[0].soz.rank.toLocaleString()} <span className="text-[10px] opacity-40">.</span></p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">DİL</span>
                      <p className="text-2xl font-black">{allResults[0].dil.rank.toLocaleString()} <span className="text-[10px] opacity-40">.</span></p>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-black transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-blue-900/50">
                    DETAYLI ANALİZ GÖSTER
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Comparative Table Card */}
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-6 overflow-hidden">
                <h4 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-6">
                  <History className="w-4 h-4 text-gray-400" />
                  YILLARA GÖRE KIYAS (SAYISAL)
                </h4>
                <div className="space-y-3">
                  {allResults.map(res => (
                    <div key={res.year} className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white transition-all">
                      <span className="text-sm font-black text-gray-900">{res.year} Yılında</span>
                      <div className="text-right">
                        <span className="text-sm font-black text-blue-600 block">{res.say.rank.toLocaleString()} <span className="text-[10px] text-gray-400 font-medium">Sıra</span></span>
                        <span className="text-[10px] font-bold text-gray-400">{res.say.yer.toFixed(2)} Puan</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-center text-gray-400 mt-6 font-medium leading-relaxed">
                  * Başarı sıralamaları yığınsal dağılım verileri kullanılarak <br/> tahmin edilmiştir. Gerçek sonuçlar değişebilir.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse"
        >
          <TrendingUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  );
}
