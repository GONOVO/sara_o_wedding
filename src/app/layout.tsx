import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import "./globals.css";
import Header from "../components/ui/header/Header";
import { Fraunces } from "next/font/google";
import NeexaChat from "../components/NeexaChat";

// Declare global types for neexa
declare global {
  interface Window {
    neexa: {
      init: (config: {
        agent_id: string;
        appearance_mode: string;
        mobile_mini_style: string;
        chat_position: string;
      }) => void;
    };
    neexa_xgmx_cc_wpq_ms: string;
  }
}
const Footer = dynamic(() => import("../components/footer/Footer"));
import WithAOS from "@/components/ui/Withaos";
import Arrowtoup from "@/components/ui/arrowsrollup/Arrowtoup";
// import Head from "next/head";
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Sara O Events",
  description: "Premium Event Producers",
  icons: ["/svgs/s_logo.svg", "/s_logo.png"],
  openGraph: {
    title: "Sara O Events",
    description: "Premium Event Producers",
    images: ["/svgs/s_logo.svg", "/s_logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sara O Events",
    description: "Premium Event Producers",
    images: ["/svgs/s_logo.svg", "/s_logo.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={fraunces.variable}
      style={{ overflowX: "hidden" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <WithAOS>
          <Header />
          {children}
          <Arrowtoup />
          <Footer />
        </WithAOS>
        <NeexaChat />
      </body>
    </html>
  );
}
