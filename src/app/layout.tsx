import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Pinnacle SCBD | Elevated Living. Elevated Thinking.",
  description:
    "Jakarta's most exclusive 58-story residential tower in the heart of SCBD. Sky penthouses, smart home AI, LEED Platinum certified. Join the exclusive waitlist.",
  keywords: [
    "luxury apartment Jakarta",
    "SCBD residential",
    "penthouse Jakarta",
    "smart home",
    "premium living",
  ],
  openGraph: {
    title: "The Pinnacle SCBD | Elevated Living. Elevated Thinking.",
    description:
      "Jakarta's most exclusive 58-story residential tower in the heart of SCBD.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
