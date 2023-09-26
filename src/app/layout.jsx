import "./globals.css";
import { Inter } from "next/font/google";

//context provider
import { SearchContextProvider } from "./context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carland",
  description: "Find your ideal ride for any adventure with our diverse range of affordable and dependable car rentals.",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
