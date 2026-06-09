import type { Metadata } from "next";
import { Nunito_Sans, Oswald } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nail Salon | Joy's Nail & Spa | United States",
  description:
    "Experience the Best Beauty Services from the most luxurious salon in the area. Joy's Nail & Spa in Roseland, NJ.",
  openGraph: {
    title: "Joy's Nail & Spa",
    description:
      "Experience the Best Beauty Services from the most luxurious salon in the area.",
    url: "https://joysnailspa.com",
    siteName: "Joy's Nail & Spa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${oswald.variable} h-full`}>
      <body className="min-h-full antialiased">
        <Header />
        <div className="lg:pl-56">
          <main className="min-h-screen pt-16 lg:pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
