import "./globals.css";
import { Inter } from "next/font/google";

//context provider
import { SearchContextProvider } from "./context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carland",
  description: "Encontre o carro ideal para qualquer aventura com nossa ampla variedade de aluguel de carros acessíveis e confiáveis.",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
