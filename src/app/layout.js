import { Inter } from "next/font/google";
import { Header } from "@/components/shared/Header";
import "./globals.css"
import { getToken } from "@/services/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Products fronted",
  description: "Products frontend test Meru",
};

export default function RootLayout({ children }) {
  const accessToken = getToken()

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 p-5">
          <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-5">
            <Header token={accessToken} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
