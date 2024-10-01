import type { Metadata } from "next";
import localFont from "next/font/local";
// Import CSS
import "./globals.css";

// Import Local Components
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/TopNavigation/Navbar";

// Import Local Variables
import { pages } from "./coreVariables";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <Navbar pages={pages} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
