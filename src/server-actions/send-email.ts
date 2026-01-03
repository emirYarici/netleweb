"use server";

import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function sendEmail(prev, formData: FormData) {
  const email = formData.get("email") as string;

  // 1. Supabase'e kaydet
  const { error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    return {
      error: "Bu email zaten kayıtlı veya bir hata oluştu.",
      status: 400,
    };
  }

  try {
    const response = await resend.emails.send({
      from: "NETLE <selam@netleapp.com>", // Kendi domaininle doğrulanmış olmalı
      to: email,
      subject: "NETLE Waitlist’ine Hoş Geldin! 🎉",
      html: `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NETLE bekleme listesine eklendin</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      background-color: #f4f7f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    .header {
      background-color: #3a6ff7;
      padding: 36px 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 26px;
      letter-spacing: 2px;
    }
    .content {
      padding: 36px 28px;
      color: #333333;
      line-height: 1.7;
      font-size: 15px;
    }
    .content h2 {
      margin-top: 0;
      font-size: 20px;
      color: #111111;
    }
    .feature-box {
      background-color: #f8fafc;
      border-left: 4px solid #3a6ff7;
      padding: 16px;
      margin: 24px 0;
      font-size: 14.5px;
    }
    .button {
      display: inline-block;
      margin-top: 24px;
      padding: 12px 24px;
      background-color: #3a6ff7;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
    }
    .footer {
      background-color: #f9fafb;
      padding: 28px;
      text-align: center;
      font-size: 13px;
      color: #6b7280;
    }
    .footer a {
      color: #3a6ff7;
      text-decoration: none;
      font-weight: 600;
      margin: 0 6px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>NETLE</h1>
    </div>

    <div class="content">
      <h2>Selam 👋</h2>

      <p>
        YKS aslında çok basit bir şey ister:<br />
        Yanlış yaptığın soruları fark etmeni ve o yanlışların peşini bırakmamanı.
      </p>

      <p>
        Doğru yaptıklarını tekrar tekrar çözmek rahatlatıcı olabilir ama netleri
        artıran şey genelde orası değildir. Asıl farkı yaratan, kaçtığın sorular
        ve sürekli yanlış yaptığın konulardır.
      </p>

      <p>
        Seni NETLE bekleme listesine ekledik. Uygulama yayına girdiğinde,
        yanlışlarına gerçekten odaklanabileceğin bir alanın olacak.
      </p>

      <div class="feature-box">
        🚀 <strong>Hata Defteri</strong><br />
        Takıldığın ya da yanlış yaptığın sorunun fotoğrafını çek.<br />
        Sorular kaybolmaz, “sonra bakarım” diye unutulmaz.
        <br /><br />

        🔁 <strong>Tekrarla</strong><br />
        Yanlış yaptığın sorular doğru zamanlarda tekrar karşına çıkar.<br />
        Hazır hissettiğinde <strong>sağa kaydır</strong>, sonra tekrar gör.<br />
        “Artık biliyorum” dediğinde <strong>sola kaydır</strong>.<br />
        Sistem, aralıklı tekrar mantığıyla seni gerçekten öğrenene kadar takip eder.
        <br /><br />

        📊 <strong>Analiz</strong><br />
        Hangi konudan kaç yanlışın var, hangisi sürekli tekrar ediyor net bir şekilde görürsün.<br />
        Çalışma kararlarını hisle değil, verilerle verirsin.
      </div>

      <p>
        Uygulama marketlerde yerini aldığında <strong>ilk sana haber vereceğiz</strong>.<br />
        O zamana kadar süreci takip etmek istersen:
      </p>

      <center>
        <a href="https://instagram.com/netle.app" class="button">
          Instagram’da takip et
        </a>
      </center>
    </div>

    <div class="footer">
      <p>
        <a href="https://instagram.com/netle.app">Instagram</a> •
        <a href="https://www.netleapp.com">Web</a>
      </p>

      <p style="margin-top: 16px;">
        Netlerin bol olsun,<br />
        yanlışlarından korkma — onlar zaten yolun kendisi.
        <br /><br />
        <strong>NETLE Ekibi</strong>
      </p>
    </div>
  </div>
</body>
</html>`,
    });

    console.log("ressssponse", response);

    return { success: true };
  } catch (err) {
    return {
      error: "Mail gönderilemedi ama kaydın alındı.",
      status: 500,
    };
  }
}
