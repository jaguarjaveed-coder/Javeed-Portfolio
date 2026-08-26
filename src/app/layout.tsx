import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import { meta } from "@/content";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Header } from "@/components/Header";
import { CONSENT_KEY, GTM_CONTAINER_ID } from "@/lib/consent";
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
        {/* Consent defaults must run before any other script, and before GTM
            initialises — a returning visitor's stored decision has to be read
            synchronously here so their first pageview isn't lost and consent
            state doesn't flicker. See _incoming/CONSENT_TRACKING.md, stage 2. */}
        <Script
          id="consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }
window.gtag = gtag;

var __consent = null;
try {
  var __raw = localStorage.getItem(${JSON.stringify(CONSENT_KEY)});
  if (__raw) {
    var __parsed = JSON.parse(__raw);
    if (__parsed && typeof __parsed.analytics === "boolean") __consent = __parsed;
  }
} catch (e) {}

gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  analytics_storage: (__consent && __consent.analytics === true) ? 'granted' : 'denied',
  wait_for_update: 500
});

gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
`,
          }}
        />
        {/* GTM container itself — deliberately no <noscript> iframe fallback,
            since that bypasses consent entirely. */}
        <Script
          id="gtm-container"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${JSON.stringify(GTM_CONTAINER_ID)});
`,
          }}
        />
        <Header />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
