import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { preload } from "react-dom";
import "./globals.css";
import NavBar from "../feature/navbar/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/providers/query-provider";
import Footer from "@/feature/footer/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Réseau de la Diaspora Malagasy",
  description:
    "La première plateforme dédiée à la diaspora malagasy à travers le monde",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  preload("/earth-night.webp", { as: "image" });

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <NavBar />
          <TooltipProvider>
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
