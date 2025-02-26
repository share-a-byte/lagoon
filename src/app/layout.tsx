import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const raleway = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lagoon",
  description: "Launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
