import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import { Info, HelpCircle, GraduationCap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "YKS Puan Hesaplama 2025 | Netle TYT-AYT Katsayı ve Sıralama Sihirbazı",
  description: "En güncel 2025 YKS katsayıları ile puanını hesapla. TYT, SAY, EA, SÖZ ve DİL puan türlerinde 4 yanlış 1 doğru kuralı ve OBP desteği ile en doğru sonuçlar Netle'de.",
  keywords: ["YKS puan hesaplama", "TYT puan hesaplama", "AYT puan hesaplama", "2025 YKS katsayılar", "Netle YKS", "sıralama hesaplama", "YKS asistanı"],
  openGraph: {
    title: "YKS Puan Hesaplama 2025 | Netle",
    description: "Netlerini gir, en güncel katsayılarla sonucunu hemen öğren. Üniversite hedefine ne kadar yakınsın?",
    images: ["/og-image.png"], // Suggestion for user to add an image later
    type: "website",
  },
};

export default function PuanHesaplamaPage() {
  return (
    <div className="bg-white min-h-screen">
      <CalculatorClient />

      {/* SEO Content Section - Statically Rendered for Bots */}
      <section className="bg-gray-50/50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <h2 className="text-4xl font-black text-gray-900 tracking-tighter italic">
                 YKS Puanı Nasıl <br/> <span className="text-[#3a6ff7]">Doğru Hesaplanır?</span>
               </h2>
               <div className="prose prose-blue text-gray-400 font-medium leading-relaxed max-w-xl">
                  <p>
                    YKS (Yükseköğretim Kurumları Sınavı) puanı hesaplanırken her yıl ÖSYM tarafından yayımlanan 
                    <strong> standart katsayılar</strong> kullanılır. Netle YKS Asistanı, her yılın gerçek verilerini 
                    kullanarak (2019-2025) size en yakın sonucu sunar.
                  </p>
                  <p>
                    Özellikle <strong>4 yanlış 1 doğruyu götürür</strong> kuralı, ham puanınızın belirlenmesinde 
                    kritik bir role sahiptir. Bu nedenle her dersin netini tek tek hesaplamak, hata payını minimize eder.
                  </p>
               </div>

               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { 
                      icon: <Info className="w-5 h-5 text-blue-600" />,
                      title: "Katsayılar", 
                      desc: "2025 TYT/AYT standart katsayıları ile güncel hesaplama." 
                    },
                    { 
                      icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
                      title: "OBP Katkısı", 
                      desc: "Diploma notunuz 0.6 katsayısı ile yerleştirme puanına eklenir." 
                    },
                    { 
                      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
                      title: "Net Kuralları", 
                      desc: "Yanlış cevaplar, doğrularınızı 0.25 oranında azaltarak ham neti belirler." 
                    },
                    { 
                      icon: <HelpCircle className="w-5 h-5 text-amber-600" />,
                      title: "Base Puanlar", 
                      desc: "Her yıl için değişen 100-145 arası taban puanlar otomatik eklenir." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
                       <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">{item.icon}</div>
                       <h4 className="text-sm font-black text-gray-900">{item.title}</h4>
                       <p className="text-[11px] text-gray-400 font-bold leading-tight">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-8 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/50">
               <h3 className="text-2xl font-black text-gray-900 tracking-tight italic">Sıkça Sorulan Sorular</h3>
               <div className="divide-y divide-gray-100">
                  {[
                    { 
                      q: "2025 YKS katsayıları ne zaman belli olur?", 
                      a: "ÖSYM katsayıları sınav sonrası verilerin yığınsal dağılımına göre resmi olarak açıklar. Netle olarak biz, bir önceki yılın katsayılarını ve hedef verileri kullanarak en yakın tahmini sunuyoruz." 
                    },
                    { 
                      q: "OBP katsayısı nedir?", 
                      a: "Diploma notunuzun 0,6 ile çarpılmasıyla elde edilen puandır. Eğer geçen yıl bir üniversiteye yerleştiyseniz bu katsayı yarı yarıya düşer (Kırık OBP)." 
                    },
                    { 
                      q: "Net hesaplamada küsuratlar neden önemli?", 
                      a: "Bir net bile binlerce öğrencinin önüne geçmenizi sağlayabilir. 4 yanlışın 1 doğruyu götürmesi sonucu oluşan virgüllü netler puanınızı doğrudan etkiler." 
                    }
                  ].map((faq, i) => (
                    <div key={i} className="py-6 space-y-3">
                       <p className="text-sm font-black text-gray-900 uppercase tracking-tighter">{faq.q}</p>
                       <p className="text-xs text-gray-400 font-bold leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 bg-white text-center">
         <p className="text-sm font-bold text-gray-300">© 2025 Netle YKS Asistanı. SEO Destekli Puan Hesaplama Modülü.</p>
      </footer>
    </div>
  );
}
