import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export const metadata: Metadata = {
  title: {
    default: "Portal de Viagens | Seu próximo capítulo começa aqui",
    template: "%s | Portal de Viagens",
  },
  description:
    "Explore destinos, descubra experiências e encontre inspiração para sua próxima viagem.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
