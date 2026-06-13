import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Resilium – praktické tréninky pro tlak, konflikt a riziko",
  description:
    "Praktické tréninky a programy pro jednotlivce, lídry a organizace. Resilium pomáhá lidem jednat jistěji v situacích tlaku, konfliktu a rizika.",
  icons: {
    icon: [{ url: "/resilium-logo.png", type: "image/png" }],
    shortcut: [{ url: "/resilium-logo.png", type: "image/png" }],
    apple: [{ url: "/resilium-logo.png", type: "image/png" }]
  },
  openGraph: {
    title: "Resilium – praktické tréninky pro tlak, konflikt a riziko",
    description:
      "Praktické tréninky a programy pro jednotlivce, lídry a organizace. Resilium pomáhá lidem jednat jistěji v situacích tlaku, konfliktu a rizika.",
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
      <body suppressHydrationWarning>
        {children}
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
      </body>
    </html>
  );
}
