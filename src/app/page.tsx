import Antigravity from "@/components/Antigravity";
import LightPillar from "@/components/LightPillart";
import LightRays from "@/components/Lights";
import {
  BookOpen,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">NETLE</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {/* <a
                href="#features"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Özellikler
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Nasıl Çalışır
              </a>
              <button className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all">
                Başla
              </button> */}
            </nav>
            <button className="md:hidden inline-flex items-center justify-center h-9 px-4 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all">
              Giriş Yap
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-1 relative">
        <div className="flex w-full absolute  h-full">
          <LightPillar />
        </div>
        <section className="py-20 lg:py-32 flex">
          <div className="container mx-auto px-4 lg:px-8 pointer-none:">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  <Target className="w-4 h-4" />
                  YKS Öğrencileri İçin
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white text-balance">
                  Başarıya Giden Yolculuğunu Takip Et
                </h1>
                <p className="text-lg text-white leading-relaxed">
                  Kapsamlı YKS sınav hazırlık takip sistemimizle organize,
                  odaklanmış ve motive kal. İlerlemenizi izleyin, zor soruları
                  çözün ve üniversite hayallerinize ulaşın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-all">
                    Ücretsiz Başla
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-gray-300 bg-white text-gray-900 text-base font-medium hover:bg-gray-50 transition-all">
                    Demo İzle
                  </button>
                </div>
                {/* <div className="flex items-center gap-6 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">Aktif Öğrenci</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50K+</div>
                    <div className="text-sm text-gray-600">
                      Takip Edilen Soru
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="relative">
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div>
                        <div className="text-sm text-gray-600">
                          Bugünün İlerlemesi
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          12/15 Soru
                        </div>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Matematik
                            </div>
                            <div className="text-sm text-gray-600">
                              30 soru çözüldü
                            </div>
                          </div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Target className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Günlük Hedef
                            </div>
                            <div className="text-sm text-gray-600">
                              %80 tamamlandı
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-purple-600">
                          12/15
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Award className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              10 Günlük Seri
                            </div>
                            <div className="text-sm text-gray-600">
                              Böyle devam!
                            </div>
                          </div>
                        </div>
                        <div className="text-lg">🔥</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-balance">
              Başarılı Olmak İçin İhtiyacın Olan Her Şey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              YKS öğrencileri için özel olarak tasarlanmış, sınav hazırlık
              süreciniz boyunca organize ve motive kalmanızı sağlayan güçlü
              özellikler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Zor Sorular Bankası
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Zorlandığınız soruları kaydedin ve düzenleyin. Tekrar çalışmanız
                gereken sorular asla kaybolmasın.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Günlük Hedefler
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Günlük çalışma hedefleri belirleyin ve takip edin. Akıllı hedef
                belirleme ile tutarlılık oluşturun.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Soru Analitiği
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Günlük, haftalık ve aylık çözdüğünüz soru sayısını izleyin.
                Gelişiminizi zaman içinde görün.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sınav Sonuçları
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deneme sınav puanlarınızı ve performans trendlerinizi takip
                edin. Güçlü ve geliştirilmesi gereken yönlerinizi belirleyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-balance">
              Basit. Etkili. Kanıtlanmış.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              YKS hazırlığınızı üç kolay adımda takip etmeye başlayın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Hesabını Oluştur
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ücretsiz kaydol ve kişiselleştirilmiş çalışma profilini
                saniyeler içinde oluştur.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Hedeflerini Belirle
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Günlük hedeflerini tanımla ve sorularını ile çalışma seanslarını
                takip etmeye başla.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Takip Et & Geliş
              </h3>
              <p className="text-gray-600 leading-relaxed">
                İlerlemeni izle, analitiği incele ve her gün kendini
                geliştirdiğini gör.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              YKS Sınavında Başarıya Hazır Mısın?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Çalışma yolculuklarını organize etmek ve hedeflerine ulaşmak için
              YKS Takip kullanan binlerce öğrenciye katıl.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-blue-600 text-base font-medium hover:bg-gray-50 transition-all">
                Ücretsiz Başla
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Netle</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2025 YKS Takip. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
