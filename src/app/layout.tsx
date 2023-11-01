import React, { ReactNode } from "react";
import Aside from "./components/layout-aside/Aside";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Aside />
          <div className="flex flex-col w-full mr-2 relative">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
