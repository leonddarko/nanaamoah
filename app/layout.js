import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Nana Amoah | Gospel Artist",
    template: "%s | Nana Amoah",
  },
  description:
    "Official website of Nana Amoah — Gospel artist, worshipper and minister of music. Explore music, events, ministry and more.",
  keywords: [
    "Nana Amoah",
    "Nana Amoah Gospel",
    "Nana Amoah music",
    "Gospel artist Ghana",
    "Ghana Gospel music",
    "Gospel worship",
  ],
  authors: [{ name: "Nana Amoah" }],
  creator: "Nana Amoah",
  metadataBase: new URL("https://nanaamoah.vercel.app"),
  openGraph: {
    title: "Nana Amoah | Gospel Artist",
    description:
      "Music, faith and purpose. Explore Nana Amoah's music, events and ministry.",
    url: "https://nanaamoah.com",
    siteName: "Nana Amoah",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
