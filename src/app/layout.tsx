import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Porfolio",
  description: "I am a fullstack developer",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          <Navbar />
          <main className="mx-auto max-w-screen-xl p-6 py-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
