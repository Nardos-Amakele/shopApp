import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop",
  description: "Fetch and display posts using Next.js and JSONPlaceholder API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" text-black  bg-[#f8f7f8]">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
