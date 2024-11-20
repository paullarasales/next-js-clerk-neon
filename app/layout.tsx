import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import './globals.css';

const poppins = Poppins({ weight: "500", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Expense Tracker Next App",
  description: "Expense Tracker by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} ${poppins.className}`}>
          <Header />
          <main className="container">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
