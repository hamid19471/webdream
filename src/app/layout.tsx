import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Webdream Studio",
  description: "Best web design and development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable}`}>
      <body className="grid min-h-screen grid-rows-[90px_1fr_auto]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
