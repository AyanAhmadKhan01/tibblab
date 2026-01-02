import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});


export const metadata = {
  title: "Tibblab | Performance-Driven Influencer Marketing Agency",
  description:
    "Tibblab is a modern influencer marketing agency focused on performance, clarity, and measurable impact. We connect brands with high-impact creators across MENA, the US, and Europe.",
  keywords:
    "Tibb Labs, Influencer Marketing Agency, Performance Influencer Marketing, Creator Marketing Agency, Micro Influencers, Nano Influencers, Brand Collaborations, Influencer Campaign Management",
  verification: {
    google: "a3DAE5ipxRxunMtiIXlGR77QHINKOIUZUlX8V4Chb",
  },
  openGraph: {
    title: "Tibblab – Influencer Marketing Built on Real Results",
    description:
      "We help health, wellness, fitness, and lifestyle brands grow through data-driven influencer campaigns, authentic storytelling, and measurable outcomes.",
    url: "https://tibblab.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767320785/Screenshot_2026-01-02_072749_lmbt9h.png",
        alt: "Tibb Labs Preview",
      },
    ],
  },
  alternates: {
    canonical: "https://tibblab.vercel.app",
  },
  icons: {
    icon: "app/favicon.ico",
    shortcut: "app/favicon.ico",
    apple: "app/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      
        className={`${inter.variable} ${sora.variable} antialiased`}
      >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
           <Navbar/>
        {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
