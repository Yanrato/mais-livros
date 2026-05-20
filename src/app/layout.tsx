import type { Metadata } from "next";
import { Nunito} from "next/font/google";


import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
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
        className={` ${nunito.variable} antialiased`}>
          <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
