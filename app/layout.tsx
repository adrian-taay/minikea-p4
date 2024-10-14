import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SnackbarWrapper from "@/providers/snackbar-provider";
import { ChakraUIProvider } from "@/providers/chakraui-provider";
import Footer from "@/components/footer/Footer";
import { Titillium_Web } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minikea Superstore",
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
        className={`${titillium.className} antialiased flex flex-col justify-between h-screen scroll-smooth`}
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
