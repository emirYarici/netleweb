export default function AccountDeletionPage() {
  return (
    <div className="bg-gray-50 flex items-center justify-center h-screen px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Hesap Silme Talebi
        </h1>

        <p className="text-gray-600 mb-6">
          Netle uygulamasındaki hesabınızı ve verilerinizi silmek istiyorsanız,
          aşağıdaki butona tıklayarak bize kayıtlı e-posta adresinizden bir
          talep gönderebilirsiniz.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-left">
          <p className="text-sm text-yellow-700">
            <strong>Dikkat:</strong> Hesabınız silindiğinde, yüklediğiniz
            sorular ve favorileriniz kalıcı olarak silinecektir. Bu işlem geri
            alınamaz.
          </p>
        </div>

        <a
          href="mailto:netlesocial@gmail.com?subject=Netle Hesap Silme Talebi&body=Merhaba, Netle hesabı verilerimin silinmesini talep ediyorum. Hesabıma bağlı e-posta adresim: "
          className="block w-full bg-red-600 text-white font-bold py-3 px-4 rounded hover:bg-red-700 transition duration-200"
        >
          Hesabımı Silmek İstiyorum
        </a>

        <p className="mt-6 text-xs text-gray-400">
          Talebiniz incelendikten sonra 7 gün içinde verileriniz
          sistemlerimizden kaldırılacaktır.
        </p>
      </div>
    </div>
  );
}
