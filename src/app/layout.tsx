import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <title>Yasser Fedsi - Portfolio</title>
        <meta name="description" content="A Full-Stack developer and a Junior Product Designer" />
        <body>{children}</body>
      </html>
      <Toaster />
    </>
  );
}
