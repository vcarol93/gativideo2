import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// import Script from "next/script";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Rativideo",
  description: "Canales (algunos) en vivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${jetbrainsMono.variable}  antialiased bg-[oklch(0.141_0.005_285.823)]  text-zinc-50`}
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
