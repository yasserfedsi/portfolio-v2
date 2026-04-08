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
        <meta name="description" content="A Full-Stack Web Developer and Project Manager" />
        <meta name="keywords" content="full-stack, web development, project manager, ai, backend development" />
        <link rel="icon" href="/logo.png" />
        <body>{children}</body>
      </html>
      <Toaster />
    </>
  );
}
