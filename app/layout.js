import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nana Amoah | Gospel Minister & Worshipper",
    template: "%s | Nana Amoah",
  },

  description:
    "Official website of Nana Amoah — Gospel minister, worshipper and pioneer of Praise Waiting. Explore his music, ministry engagements, events and more.",

  keywords: [
    "Nana Amoah",
    "Nana Amoah Gospel",
    "Nana Amoah music",
    "Nana Amoah ministry",
    "Nana Amoah worship",
    "Praise Waiting",
    "Gospel minister Ghana",
    "Gospel worship Ghana",
    "Ghana Gospel music",
  ],

  authors: [{ name: "Nana Amoah" }],
  creator: "Nana Amoah",

  metadataBase: new URL("https://nanaamoah.vercel.app"),

  openGraph: {
    title: "Nana Amoah | Gospel Minister & Worshipper",
    description:
      "Music, worship and ministry from Nana Amoah. Discover his music, events and ministry engagements.",
    url: "https://nanaamoah.vercel.app",
    siteName: "Nana Amoah",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: "/images/nana-og.png",
        width: 1200,
        height: 630,
        alt: "Nana Amoah — Gospel Minister & Worshipper",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nana Amoah | Gospel Minister & Worshipper",
    description:
      "Music, worship and ministry from Nana Amoah.",
    images: ["/images/nana-og.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Navbar />
      <ScrollToTop />
      {children}
      </body>
      <Footer />
    </html>
  );
}
