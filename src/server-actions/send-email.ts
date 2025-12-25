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
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NETLE'ye Hoş Geldin</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f4f7f9;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
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
      background-color: #3a6ff7; /* NETLE Elektrik Mavisi */
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      letter-spacing: 2px;
    }
    .content {
      padding: 40px 30px;
      color: #333333;
      line-height: 1.6;
    }
    .content h2 {
      color: #111111;
      font-size: 22px;
      margin-top: 0;
    }
    .feature-box {
      background-color: #f8fafc;
      border-left: 4px solid #3a6ff7;
      padding: 15px;
      margin: 20px 0;
      font-size: 15px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 30px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
    }
    .social-links a {
      margin: 0 10px;
      color: #3a6ff7;
      text-decoration: none;
      font-weight: bold;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #3a6ff7;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>NETLE</h1>
    </div>
    <div class="content">
      <h2>Selam Geleceğin Şampiyonu! 👋</h2>
      <p>YKS maratonunda netlerini şansa bırakmak yerine, onları <strong>"netleştirmek"</strong> için harika bir adım attın. Seni bekleme listemize (waitlist) başarıyla ekledik.</p>
      
      <p>Şu andan itibaren NETLE dünyasının ilk üyelerinden birisin. Uygulama yayına girdiğinde şunları yapabileceksin:</p>
      
      <div class="feature-box">
        🚀 <strong>Hata Defteri:</strong> Çözemediğin her soruyu saniyeler içinde fotoğraflayıp buluta yedekle.<br><br>
        🔥 <strong>Rewind:</strong> Yanlışlarını "sağa kaydırarak" kalıcı öğrenmeye dönüştür.<br><br>
        📊 <strong>Analiz:</strong> Hangi konuda kaç yanlışın var, stratejini verilerle belirle.
      </div>

      <p>Sıran geldiğinde ve uygulama marketlerde yerini aldığında ilk senin haberin olacak. O zamana kadar süreci yakından takip etmek için topluluğumuza katıl:</p>
      
      <center>
        <a href="https://instagram.com/netle_app" class="button">Bizi Instagram'da Takip Et</a>
      </center>
    </div>
    <div class="footer">
      <div class="social-links">
        <a href="https://tiktok.com/@netle_app">TikTok</a> • 
        <a href="https://netle.app">Web Sitesi</a>
      </div>
      <p style="margin-top: 20px;">Netlerin bol, zihnin açık olsun!<br><strong>NETLE Ekibi</strong></p>
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
