'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ListaProvider } from "@/context/listaContext";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  const router = useRouter();
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
         <ListaProvider>
            <button onClick={() => router.push("/")}>Home</button>
            <button onClick={() => router.push("/favorite")}>Favoritos</button>
            {children}
        </ListaProvider>
        </body>
    </html>
  );
};