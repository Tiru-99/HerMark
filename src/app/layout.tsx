import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hermarkpress.com/"),
  keywords: [
    "Making her mark in literature",
    "Women in literature",
    "Female authors",
    "Empowering women writers",
    "Women’s writing community",
    "Women in publishing",
    "Female literary voices",
    "Promoting women authors",
    "Women’s literary contributions",
    "Empower women authors",
    "Women’s literature platform",
    "Women writers' network",
    "Female storytelling",
    "Support women in literature",
    "Women in creative writing",
    "Celebrating women authors",
    "Female literary empowerment"
  ],
  
  title:{
    default : "HerMark",
    template: `%s | HerMark`
  },
  openGraph:{
    type: "website",
    description : "Making her mark in literature",
    images :['']
  },
  icons: {
    icon: 'favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </>
  );
}
