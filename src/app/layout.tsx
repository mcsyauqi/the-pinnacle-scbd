import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0F] text-[#F8FAFC]`}
      >
        {children}
      </body>
    </html>
  );
}
