import { TheFooter } from "@/components/Footer/TheFooter";
import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { TheHeader } from "@/components/Header/TheHeader";

const inter = Comfortaa({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Landing page",
  description: "this is my tz"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="wrapper">
        <TheHeader/>
        {children}
        <TheFooter/>
        </div>
        </body>
    </html>
  );
}
