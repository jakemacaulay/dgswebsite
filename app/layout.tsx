import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "DGS Landscaping | Premium Outdoor Design & Maintenance",
    template: "%s | DGS Landscaping",
  },
  description: "DGS Landscaping provides premium lawn care, architectural garden design, and hardscape artistry. Locally owned and operated, transforming outdoor spaces into sanctuaries.",
  keywords: ["landscaping", "lawn care", "garden design", "hardscaping", "outdoor design", "DGS Landscaping"],
  authors: [{ name: "DGS Landscaping" }],
  creator: "DGS Landscaping",
  publisher: "DGS Landscaping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dgslandscaping.com",
    siteName: "DGS Landscaping",
    title: "DGS Landscaping | Premium Outdoor Design & Maintenance",
    description: "Transform your outdoor space into a masterpiece with DGS Landscaping. Expert design, maintenance, and construction.",
    images: [
      {
        url: "/main.jpg",
        width: 1200,
        height: 630,
        alt: "DGS Landscaping Premium Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DGS Landscaping | Premium Outdoor Design & Maintenance",
    description: "Expert landscaping services for your home and lifestyle.",
    images: ["/main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
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
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-dark-green font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
