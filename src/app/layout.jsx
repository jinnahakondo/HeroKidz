import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from 'next/font/local'
import NextAuthProvider from "@/provider/NextAuthProvider";

export const banglaFont = localFont({
  src: '../fonts/mayaboti-normal.ttf',
})

const popeins = Poppins(
  {
    weight: ['100', '200', '400', '500', '600', '800']
  }
);

export const metadata = {
  metadataBase: new URL("https://hero-kidz-lilac-kappa.vercel.app"),

  title: {
    default: "Hero Kidz | Kids Learning Toys & Educational Products",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz provides educational toys and learning boards that help children learn numbers, counting, and basic skills through fun and play.",

  applicationName: "Hero Kidz",

  keywords: [
    "kids learning toys",
    "educational toys for kids",
    "learning board",
    "kids math toys",
    "hero kidz",
    "children educational products",
  ],

  authors: [{ name: "Hero Kidz" }],
  creator: "Hero Kidz",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hero-kidz-lilac-kappa.vercel.app",
    siteName: "Hero Kidz",
    title: "Hero Kidz | Kids Learning Toys & Educational Products",
    description:
      "Discover fun and educational toys that help kids learn and grow. Learn with fun at Hero Kidz.",

    images: [
      {
        url: "https://res.cloudinary.com/dz23btt8f/image/upload/v1770097222/herokidz_home_mzhune.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Home Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Kids Learning Toys",
    description:
      "Educational toys and learning boards designed for kids. Learn through play with Hero Kidz.",
    images: [
      "https://res.cloudinary.com/dz23btt8f/image/upload/v1770097222/herokidz_home_mzhune.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://res.cloudinary.com/dz23btt8f/image/upload/v1770097192/f8e8d46e-5e6a-437f-82fb-71376d955365.png",
    apple:
      "https://res.cloudinary.com/dz23btt8f/image/upload/v1770097192/f8e8d46e-5e6a-437f-82fb-71376d955365.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body
          className={`${popeins.className} antialiased`}
        >
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar />
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-376px)] px-2.5 pt-20">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
