import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Resilium – systém připravenosti pro tlak, konflikt a riziko",
  description:
    "Praktický trénink pro firmy, týmy a organizace. Resilium rozvíjí schopnost lidí zachovat orientaci, komunikovat a jednat profesionálně v situacích tlaku, konfliktu a rizika.",
  openGraph: {
    title: "Resilium – systém připravenosti pro tlak, konflikt a riziko",
    description:
      "Praktický trénink pro firmy, týmy a organizace. Resilium rozvíjí schopnost lidí zachovat orientaci, komunikovat a jednat profesionálně v situacích tlaku, konfliktu a rizika.",
    type: "website",
    locale: "cs_CZ"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
