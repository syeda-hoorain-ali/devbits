import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";
import 'prismjs/themes/prism-okaidia.css';
import Footer from "@/components/footer";

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
  title: "DevBits - Your Ultimate Guide to Web Development",
  description: "DevBits is a platform offering in-depth tutorials, articles, and guides on web development, covering HTML, CSS, JavaScript, TypeScript, React, Next.js, and more. Enhance your coding skills with practical insights.",
  keywords: "web development, HTML, CSS, JavaScript, TypeScript, React, Next.js, tutorials, coding, programming, frontend, backend",
  authors: {name: "Syeda Hoorain Ali", url: "https://syeda-hoorain-ali.vercel.app"}
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
