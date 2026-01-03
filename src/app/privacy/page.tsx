export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto p-6 md:p-12  bg-white shadow-xl rounded-lg border border-gray-100">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Gizlilik Politikası
          </h1>
          <p className="text-gray-500">
            Son Güncelleme Tarihi:{" "}
            <span className="font-medium text-gray-700">03.01.2026</span>
          </p>
        </header>

        <section className="mb-6">
          <p className="mb-4">
            <strong>Netle</strong> uygulaması, Emir Yarıcı tarafından
            Ücretsiz/Freemium bir uygulama olarak geliştirilmiştir. Bu HİZMET,
            Netle tarafından "olduğu gibi" sunulmaktadır ve bu şekilde
            kullanılması amaçlanmıştır.
          </p>
          <p className="mb-4">
            Bu sayfa, Hizmetimizi kullanmaya karar veren ziyaretçileri; Kişisel
            Bilgilerin toplanması, kullanılması ve ifşa edilmesine ilişkin
            politikalarımız hakkında bilgilendirmek için kullanılır.
          </p>
          <p className="mb-4">
            Hizmetimizi kullanmayı seçerseniz, bu politikayla ilgili bilgilerin
            toplanmasını ve kullanılmasını kabul etmiş olursunuz. Topladığımız
            Kişisel Bilgiler, Hizmeti sağlamak ve geliştirmek için kullanılır.
            Bilgilerinizi, bu Gizlilik Politikasında açıklanan durumlar dışında
            kimseyle kullanmayacağız veya paylaşmayacağız.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Bilgi Toplama ve Kullanım
          </h2>
          <p className="mb-4">
            Daha iyi bir deneyim için, Hizmetimizi kullanırken bize kişisel
            olarak tanımlanabilir bazı bilgileri sağlamanızı isteyebiliriz.
            İstediğimiz bilgiler cihazınızda saklanacak veya tarafımızca güvenli
            bir şekilde işlenecektir.
          </p>
          <p className="mb-4">
            Uygulama, sizi tanımlamak için kullanılan bilgileri toplayabilecek
            üçüncü taraf hizmetlerini kullanır. Uygulama tarafından kullanılan
            üçüncü taraf hizmet sağlayıcılarının gizlilik politikalarına
            bağlantılar:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-blue-600">
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                className="hover:underline"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/policies/analytics"
                target="_blank"
                className="hover:underline"
              >
                Google Analytics for Firebase
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/support/privacy/"
                target="_blank"
                className="hover:underline"
              >
                Firebase Crashlytics
              </a>
            </li>
            <li>
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                className="hover:underline"
              >
                Supabase
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Kamera ve Galeri Erişimi
          </h2>
          <p className="mb-4">
            Netle uygulaması, soru fotoğraflarını kaydetmek ve analiz etmek
            amacıyla cihazınızın kamerasına ve fotoğraf galerisine erişim izni
            talep edebilir. Bu görseller, yalnızca uygulamanın işlevselliğini
            sağlamak (soru havuzu oluşturmak vb.) amacıyla sunucularımızda
            güvenli bir şekilde saklanır ve üçüncü şahıslarla ticari amaçla
            paylaşılmaz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Günlük Verileri (Log Data)
          </h2>
          <p className="mb-4">
            Hizmetimizi her kullandığınızda, uygulamada bir hata olması
            durumunda telefonunuzda Günlük Verileri adı verilen veri ve
            bilgileri (üçüncü taraf ürünleri aracılığıyla) topladığımızı
            bildirmek isteriz. Bu Günlük Verileri; cihazınızın İnternet
            Protokolü (“IP”) adresi, cihaz adı, işletim sistemi sürümü,
            Hizmetimizi kullanırken uygulamanın yapılandırması, Hizmet
            kullanımınızın saati ve tarihi ve diğer istatistikler gibi bilgileri
            içerebilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Çerezler (Cookies)
          </h2>
          <p className="mb-4">
            Çerezler, genellikle anonim benzersiz tanımlayıcılar olarak
            kullanılan, az miktarda veri içeren dosyalardır. Bunlar, ziyaret
            ettiğiniz web sitelerinden tarayıcınıza gönderilir ve cihazınızın
            dahili hafızasında saklanır.
          </p>
          <p className="mb-4">
            Bu Servis bu "çerezleri" açıkça kullanmaz. Ancak uygulama, bilgi
            toplamak ve hizmetlerini geliştirmek için "çerezleri" kullanan
            üçüncü taraf kodları ve kütüphaneleri kullanabilir. Bu çerezleri
            kabul etme veya reddetme seçeneğine sahipsiniz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Güvenlik
          </h2>
          <p className="mb-4">
            Kişisel Bilgilerinizi bize sağlama konusundaki güveninize değer
            veriyoruz, bu nedenle ticari olarak kabul edilebilir koruma
            yöntemlerini kullanmaya çalışıyoruz. Ancak internet üzerinden hiçbir
            iletim yönteminin veya elektronik depolama yönteminin %100 güvenli
            ve güvenilir olmadığını ve mutlak güvenliğini garanti edemediğimizi
            unutmayın.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Diğer Sitelere Bağlantılar
          </h2>
          <p className="mb-4">
            Bu Hizmet diğer sitelere bağlantılar içerebilir. Üçüncü taraf bir
            bağlantıya tıklarsanız, o siteye yönlendirilirsiniz. Bu harici
            sitelerin tarafımızdan işletilmediğini unutmayın. Bu nedenle, bu web
            sitelerinin Gizlilik Politikasını incelemenizi şiddetle tavsiye
            ederiz. Üçüncü taraf sitelerin veya hizmetlerin içeriği, gizlilik
            politikaları veya uygulamaları üzerinde hiçbir kontrolümüz yoktur ve
            sorumluluk kabul etmeyiz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Çocukların Gizliliği
          </h2>
          <p className="mb-4">
            Bu Hizmetler 13 yaşın altındaki (veya ülkenizdeki geçerli yasal
            yaşın altındaki) çocuklara hitap etmez. 13 yaşın altındaki
            çocuklardan bilerek kişisel olarak tanımlanabilir bilgiler
            toplamıyoruz. 13 yaşın altındaki bir çocuğun bize kişisel bilgiler
            sağladığını fark edersek, bunu sunucularımızdan derhal sileriz. Eğer
            bir ebeveynseniz ve çocuğunuzun bize bilgi sağladığının
            farkındaysanız, gerekli işlemleri yapabilmemiz için lütfen bizimle
            iletişime geçin.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Bu Gizlilik Politikasındaki Değişiklikler
          </h2>
          <p className="mb-4">
            Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Bu nedenle,
            herhangi bir değişiklik için bu sayfayı periyodik olarak gözden
            geçirmeniz önerilir. Yeni Gizlilik Politikasını bu sayfada
            yayınlayarak sizi değişikliklerden haberdar edeceğiz.
          </p>
          <p className="mb-4 text-sm text-gray-600 italic">
            Bu politika 03.01.2026 tarihinden itibaren geçerlidir.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-gray-600 mb-2">
            Gizlilik Politikamız hakkında herhangi bir sorunuz veya öneriniz
            varsa, bizimle iletişime geçmekten çekinmeyin:
          </p>
          <a
            href="mailto:iletisim@yaricidev.com"
            className="text-indigo-600 font-medium hover:text-indigo-800 transition"
          >
            iletisim@yaricidev.com
          </a>
        </footer>
      </div>
    </div>
  );
}
