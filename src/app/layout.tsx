import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import "aos/dist/aos.css";
import "./globals.css";
import Header from "../components/ui/header/Header";
import { Nunito, Fraunces, Kristi } from "next/font/google";
const Footer = dynamic(() => import("../components/footer/Footer"));
import WithAOS from "@/components/ui/Withaos";
import Arrowtoup from "@/components/ui/arrowsrollup/Arrowtoup";
// import Head from "next/head";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-fraunces",
});
const kristi = Kristi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kristy",
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
/****sgfksdj *****/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} ${kristi.variable}`}
      style={{ overflowX: "hidden" }}
    >
      {/* <Head>
        <link
          rel="preload"
          as="video"
          href="/videos/events.mp4"
          type="video/mp4"
        />
      </Head> */}

      <body>
        <WithAOS>
          <Header />
          {children}
          <Arrowtoup />
          <Footer />
        </WithAOS>

        {/* Neexa Chat Widget */}
        <Script id="neexa-config" strategy="beforeInteractive">
          {`var neexa_xgmx_cc_wpq_ms = "9f4f5d2a-8d07-4d1d-baa2-50357aba0ce1";`}
        </Script>
        <Script 
          src="https://chat-widget.neexa.ai/main.js?nonce=1751637708639.5225"
          strategy="afterInteractive"
        />
        <Script id="neexa-init" strategy="afterInteractive">
          {`
            neexa.init({
                  agent_id: neexa_xgmx_cc_wpq_ms,
                  appearance_mode: 'light',
                  mobile_mini_style: 'greeting_only',
                  chat_position: 'bottom_right'
                });
          `}
        </Script>
      </body>
    </html>
  );
}
