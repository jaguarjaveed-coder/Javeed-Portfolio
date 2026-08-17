import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { meta } from "@/content";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-raw",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
});

const body = Public_Sans({
  variable: "--font-body-raw",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-raw",
  subsets: ["latin", "latin-ext"],
  weight: "500",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
