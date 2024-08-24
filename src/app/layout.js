import { Inter } from "next/font/google";
import { AuthProvider } from "./context/AuthContext"
import { Header } from "./components/shared/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Products fronted",
  description: "Products frontend test Meru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 p-5">
          <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-5">
            <AuthProvider>
              <Header />
              {children}
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
