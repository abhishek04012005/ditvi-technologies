import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";



export const metadata: Metadata = {
  title: "Ditvi Technologies | Digital Solutions & Services",
  description: "Ditvi Technologies provides premium digital solutions including biodata creation, resume services, and digital celebrations. Transform your digital presence with our professional services.",
  keywords: [
    "Ditvi Technologies",
    "Digital Solutions",
    "Biodata Services",
    "Digital Resume",
    "Digital Celebrations",
    "Professional Services",
    "Digital Identity",
    "Online Portfolio",
    "Digital Transformation",
    "Custom Digital Solutions"
  ],
  authors: [{ name: "Ditvi Technologies" }],
  creator: "Ditvi Technologies",
  publisher: "Ditvi Technologies",
  metadataBase: new URL('https://technologies.ditvi.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ditvi Technologies | Digital Solutions & Services",
    description: "Transform your digital presence with Ditvi Technologies' premium digital solutions and professional services.",
    url: 'https://technologies.ditvi.org',
    siteName: 'Ditvi Technologies',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Ditvi Technologies Banner'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
   verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ditvi Technologies | Digital Solutions",
    description: "Professional digital solutions for your modern needs",
    images: ['/twitter-image.jpg'], // Add this image to your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
