import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Gativideo en vivo",
  description: "Demo de Gativideo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased bg-zinc-950 text-zinc-50`}
        suppressHydrationWarning
      >
        {children}

        {/* Script de Google Cast */}
        {/* <Script
          src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
