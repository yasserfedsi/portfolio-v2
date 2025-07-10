import type { Metadata } from "next";
import VerticalSidebar from "@/components/Home/Sidebar/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasser Fedsi",
  description: "Yasser Fedsi is a software developer based in Algeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <VerticalSidebar />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
