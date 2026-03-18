import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "netle",
  description: "netle - Yanlışlarını nete dönüştür!",
  icons: {
    icon: [
      { url: "/logo-square.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-square.svg",
  },
  openGraph: {
    title: "netle",
    description: "netle - Yanlışlarını nete dönüştür!",
    url: "https://www.netleapp.com",
    siteName: "netle",
    images: [
      {
        url: "/home_logo.png",
        width: 1200,
        height: 630,
        alt: "netle logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "netle",
    description: "netle - Yanlışlarını nete dönüştür!",
    images: ["/home_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
