import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
  description: "Premuim Event Producers",
  keywords: ["wedding planning", "event planning", "corporate events", "wedding coordinator", "event management", "celebration planning", "destination weddings"],
  authors: [{ name: "Sara O Events" }],
  creator: "Sara O Events",
  publisher: "Sara O Events",
  icons: ["/svgs/s_logo.svg"],
  metadataBase: new URL("https://www.saraoevent.com/"), // Replace with your actual domain
  openGraph: {
    title: "Sara O Events - Premuim Event Producers",
    description: "Premuim Event Producers",
    url: "https://www.saraoevent.com/", // Replace with your actual domain
    siteName: "Sara O Events",
    images: [
      {
        url: "/svgs/s_logo.svg",
        alt: "Sara O Events - Premuim Event Producers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sara O Events - Premuim Event Producers",
    description: "Premuim Event Producers",
    images: ["/svgs/s_logo.svg"],
    creator: "@SARAOevents", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      </body>
    </html>
  );
}
