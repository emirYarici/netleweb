import Antigravity from "@/components/Antigravity";
import LightRays from "@/components/Lights";
import {
  BookOpen,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Plus,
  User,
  Calendar,
  List,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

export default function LandingPage() {
  const brandBlue = "#3a6ff7";

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#3a6ff7]/10 selection:text-[#3a6ff7] overflow-x-hidden font-sans">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 blur-[120px] rounded-full opacity-40" />
        <LightRays
          raysOrigin="top-center"
          raysColor={brandBlue}
          raysSpeed={0.3}
          lightSpread={1.2}
          rayLength={2}
          className="opacity-15"
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center bg-[#3a6ff7] rounded-xl shadow-lg shadow-[#3a6ff7]/20 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/logo-square.svg"
                  alt="netle logo"
                  width={24}
                  height={24}
                  className="brightness-200"
                />
              </div>
              <span className="text-3xl font-black italic tracking-tighter text-[#3a6ff7] group-hover:opacity-80 transition-opacity">
                Netle
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm font-semibold text-gray-500 hover:text-[#3a6ff7] transition-colors"
              >
                Özellikler
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-semibold text-gray-500 hover:text-[#3a6ff7] transition-colors"
              >
                Nasıl Çalışır
              </a>
              <Link
                href="https://apps.apple.com/tr/app/netle-yks-asistan%C4%B1/id6751005976?l=tr"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/90 transition-all shadow-xl group border border-white/5"
              >
                <Zap className="w-4 h-4 text-[#3a6ff7]" />
                <div className="text-left font-black">
                  <p className="text-[8px] uppercase leading-none opacity-60 font-sans">
                    App Store
                  </p>
                  <p className="text-xs leading-none mt-0.5 italic tracking-tighter">
                    İNDİR
                  </p>
                </div>
              </Link>
            </nav>

            <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#3a6ff7] text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-4 h-4" />
              YKS Marotonunda Akıllı Dönem
            </div>

            <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.9] text-gray-900">
              Yanlışlarını <br />
              <span className="text-[#3a6ff7]">Nete Dönüştür</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Kapsamlı YKS takip sistemimizle organize ol, odaklan ve üniversite
              hayallerine bir adım daha yaklaş. İstatistiklerinle geliş,
              yanlışlarınla öğren.
            </p>

            <div className="flex justify-center pt-8">
              <Link
                href="https://apps.apple.com/tr/app/netle-yks-asistan%C4%B1/id6751005976?l=tr"
                className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-white transition-all duration-300 bg-[#3a6ff7] rounded-[2.5rem] shadow-2xl shadow-[#3a6ff7]/30 hover:scale-[1.02] active:scale-95 text-lg mr-6"
              >
                Şimdi Dene
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Interactive Mockup Layout */}
          <div className="mt-40 relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 cursor-default group">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900 leading-none uppercase tracking-tight italic">
                    Tebrikler!
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">
                    HEDEF TAMAMLANDI
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl font-black text-gray-900 leading-tight tracking-tighter">
                  Cebindeki <br />
                  <span className="text-[#3a6ff7]">Akıllı Koç</span>
                </h2>
                <p className="text-xl text-gray-400 font-medium max-w-md leading-relaxed">
                  YKS maratonunda ihtiyacın olan her şey tek bir uygulamada.
                  Verilerini gir, analizlerini incele ve rakiplerinin önüne geç.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 max-w-xl">
                <div className="p-8 rounded-[3rem] bg-gray-50 border border-gray-100 space-y-4 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-700 cursor-default group">
                  <div className="w-12 h-12 rounded-2xl bg-[#3a6ff7]/10 flex items-center justify-center border border-[#3a6ff7]/20 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-[#3a6ff7]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 tracking-tight">
                      Takvim Takibi
                    </h4>
                    <p className="text-sm text-gray-400 font-bold mt-2">
                      Günlük soru sayılarını modern takvimle izle.
                    </p>
                  </div>
                </div>
                <div className="p-8 rounded-[3rem] bg-gray-50 border border-gray-100 space-y-4 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-700 cursor-default group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 tracking-tight">
                      Hızlı Giriş
                    </h4>
                    <p className="text-sm text-gray-400 font-bold mt-2">
                      Soru sayılarını 2 saniyede kaydet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative z-10 transition-all duration-700 hover:rotate-1 hover:scale-[1.02]">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="py-32 relative overflow-hidden bg-gray-50/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
            <div className="space-y-4">
              <h2 className="text-6xl font-black text-gray-900 tracking-tighter">
                Her İhtiyaca <br /> Bir Özellik
              </h2>
              <p className="text-gray-400 text-xl max-w-md font-medium leading-relaxed">
                YKS sürecini en ince ayrıntısına kadar yönetmen için tasarlandı.
              </p>
            </div>
            <div className="hidden lg:block w-32 h-2 bg-[#3a6ff7] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-[#3a6ff7]" />,
                title: "Zor Sorular Bankası",
                desc: "Zorlandığın tüm soruları ders bazlı kategorile. Çözemediklerin bir daha yakandan ayrılmasın.",
                color: "blue",
              },
              {
                icon: <Calendar className="w-8 h-8 text-indigo-600" />,
                title: "Takvim Görünümü",
                desc: "Tüm çalışma sürecini modernize edilmiş bir takvim üzerinden şeffaf şekilde takip et.",
                color: "indigo",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
                title: "Haftalık Analiz",
                desc: "Haftalık gelişim grafiklerini incele. Hangi konuda eksik olduğunu verilerle gör.",
                color: "purple",
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-600" />,
                title: "Hızlı Kayıt",
                desc: "Soru sayılarını, çalışma sürelerini saniyeler içinde sisteme gir. Vaktini çalışmaya harca.",
                color: "amber",
              },
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "Veri Güvenliği",
                desc: "Tüm çalışma verilerin güvenle saklanır. Her cihazdan anında erişim sağlarsın.",
                color: "emerald",
              },
              {
                icon: <List className="w-8 h-8 text-rose-600" />,
                title: "Konu Takibi",
                desc: "Hangi derste hangi konuda olduğunu ve ne kadar yolun kaldığını anlık olarak izle.",
                color: "rose",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group p-10 rounded-[3rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:shadow-[#3a6ff7]/10 hover:border-blue-100 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 rounded-3xl bg-${f.color}-50 flex items-center justify-center mb-8 border border-${f.color}-100 group-hover:scale-110 transition-transform`}
                >
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how-it-works" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-[#3a6ff7] font-black uppercase tracking-[0.2em] text-[10px]">
              Yöntem
            </span>
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter">
              Sadece 3 Adımda Başla
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative px-4">
            {[
              {
                num: "1",
                title: "Profilini Oluştur",
                desc: "Hangi alanda (SAY, EA, SÖZ) hazırlık yaptığını ve hedeflerini seç.",
                icon: <User className="w-6 h-6" />,
                color: "blue",
              },
              {
                num: "2",
                title: "Verilerini Gir",
                desc: "Günlük çözdüğün soruları ve deneme sonuçlarını anında kaydet.",
                icon: <Plus className="w-6 h-6" />,
                color: "indigo",
              },
              {
                num: "3",
                title: "Sonucu Analiz Et",
                desc: "Verilere dayalı gelişim planınla netlerini yükseltmeye başla.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "purple",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center p-8 rounded-[3rem] bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 cursor-default"
              >
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl shadow-gray-200/50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-[#3a6ff7]">{s.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3a6ff7] text-white text-[10px] font-black flex items-center justify-center border-4 border-white shadow-lg">
                    {s.num}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight italic">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 font-bold text-sm leading-relaxed max-w-[240px]">
                    {s.desc}
                  </p>
                </div>

                {/* Connection Line (Desktop) */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-[60px] -right-[25%] w-1/2 h-px border-t-2 border-dashed border-gray-100 pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[4rem] bg-[#3a6ff7] px-8 py-24 lg:py-32 text-center shadow-[0_40px_100px_-20px_rgba(58,111,247,0.4)]">
            {/* CTA Background deco */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-black/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-12">
              <h2 className="text-5xl lg:text-[80px] font-black text-white leading-[0.9] tracking-tighter">
                Hayallerindeki <br /> Fakülteye Hazırlan
              </h2>
              <p className="text-xl text-blue-100 font-bold opacity-80 max-w-2xl mx-auto">
                YKS Takip ile çalışma disiplini kazanan ve başarılı olan
                binlerce öğrencinin arasına sen de katıl.
              </p>

              <div className="flex justify-center pt-8">
                <Link
                  href="https://apps.apple.com/tr/app/netle-yks-asistan%C4%B1/id6751005976?l=tr"
                  className="flex items-center gap-4 px-10 py-6 rounded-3xl bg-white text-[#3a6ff7] hover:bg-white/90 transition-all group shadow-2xl hover:scale-105 active:scale-95"
                >
                  <Zap className="w-8 h-8" />
                  <div className="text-left font-black">
                    <p className="text-[10px] uppercase leading-none opacity-60 font-sans">
                      HEMEN İNDİR
                    </p>
                    <p className="text-2xl leading-none mt-1 uppercase tracking-tighter italic">
                      App Store
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-16 items-start">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3a6ff7] rounded-2xl shadow-xl shadow-[#3a6ff7]/20">
                  <Image
                    src="/logo-square.svg"
                    alt="logo"
                    width={28}
                    height={28}
                    className="brightness-200"
                  />
                </div>
                <span className="text-4xl font-black italic tracking-tighter text-[#3a6ff7]">
                  Netle
                </span>
              </div>
              <p className="text-gray-400 max-w-sm font-bold leading-relaxed">
                YKS hazırlık sürecinde öğrencilerin en büyük yardımcısı.
                Yanlışlarını nete dönüştüren teknoloji.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                Bağlantılar
              </h4>
              <nav className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#3a6ff7] font-bold transition-colors"
                >
                  Özellikler
                </a>
                <a
                  href="/puan-hesaplama"
                  className="text-gray-500 hover:text-[#3a6ff7] font-bold transition-colors"
                >
                  Puan Hesapla
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#3a6ff7] font-bold transition-colors"
                >
                  Rehberlik
                </a>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                Ürün
              </h4>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-[#3a6ff7] font-bold transition-colors"
                >
                  Gizlilik
                </Link>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#3a6ff7] font-bold transition-colors"
                >
                  Şartlar
                </a>
                <Link
                  href="/account-deletion"
                  className="text-gray-500 hover:text-[#3a6ff7] font-bold transition-colors"
                >
                  Yardım
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
