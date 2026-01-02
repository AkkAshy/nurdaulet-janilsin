import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

// Мягкий округлый шрифт для основного текста
const nunito = Nunito({
  weight: ['400', '600', '700'],
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

// Элегантный шрифт для имён
const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Нұрдаулет & Жаңылсын | Той",
  description: "Сіздерді біздің үйлену тойымызға шақырамыз! 9 Қаңтар 2026",
  openGraph: {
    title: "Нұрдаулет & Жаңылсын | Той",
    description: "Сіздерді біздің үйлену тойымызға шақырамыз!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body className={`${nunito.variable} ${playfair.variable} antialiased font-[family-name:var(--font-nunito)]`}>
        {children}
      </body>
    </html>
  );
}
