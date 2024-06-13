import type { Metadata } from "next";
import "../styles/globals.css";
import {satoshi} from '../config/fonts';
import Navbar from "@/ul/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
