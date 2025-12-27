import type { Metadata } from "next";
import { Rubik, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mais Livros - Livros Mais baratos",
  description: "Aqui você encontra os livros mais baratos e com a entrega mais rápida. Compre livros online com descontos ",
};

interface IRootLayout extends Readonly<{  children: React.ReactNode;}>{ }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-Br">
      <body
        className={`${libreBaskerville.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
