import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const baseUrl = "https://www.hermarkpress.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "HerMark | Empowering Women in Literature",
  description: "HerMark is your premier destination for celebrating and empowering women authors. Join our community to discover exceptional female literary voices, access valuable resources, and connect with fellow writers.",
  keywords: [
    "Women authors",
    "Female writers",
    "Literary community",
    "Women in publishing",
    "Female storytellers",
    "Women's literature",
    "Author platform",
    "Literary empowerment",
    "Writing community",
    "Author networking",
    "Women writers network"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "HerMark",
    title: "HerMark | Empowering Women in Literature",
    description: "Your premier destination for celebrating and empowering women authors. Discover exceptional female literary voices.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "HerMark - Empowering Women in Literature"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HerMark | Empowering Women in Literature",
    description: "Your premier destination for celebrating and empowering women authors.",
    images: [`${baseUrl}/twitter-image.jpg`],
    creator: "@hermarkpress"
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  alternates: {
    canonical: baseUrl
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}