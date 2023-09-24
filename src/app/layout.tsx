import { GlobalContextProvider } from "@/context/store";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Nishant Argade",
  description: "This is a portfolio website created by nishant argade.",
  icons: {
    icon: ["/hero.jpg"],
    apple: ["/fav.png"],
    shortcut: ["/fav.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
