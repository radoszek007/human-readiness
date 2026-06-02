import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Resilium – systém připravenosti pro tlak, konflikt a riziko",
  description:
    "Praktický trénink pro firmy, týmy a organizace. Resilium rozvíjí schopnost lidí zachovat orientaci, komunikovat a jednat profesionálně v situacích tlaku, konfliktu a rizika.",
  icons: {
    icon: [{ url: "/resilium-logo.png", type: "image/png" }],
    shortcut: [{ url: "/resilium-logo.png", type: "image/png" }],
    apple: [{ url: "/resilium-logo.png", type: "image/png" }]
  },
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
    <html lang="cs" className={`${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
