import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SnackbarWrapper from "@/providers/snackbar-provider";
import { ChakraUIProvider } from "@/providers/chakraui-provider";
import Footer from "@/components/footer/Footer";

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
  title: "Minikea",
  description: "Shop for furniture, decors, and more - Minikea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between h-screen`}
      >
        <SnackbarWrapper>
          <ChakraUIProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </ChakraUIProvider>
        </SnackbarWrapper>
      </body>
    </html>
  );
}
