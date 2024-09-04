import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import React, { ReactNode } from "react";
import GlobalStyleProvider from "./Providers/GlobalStyleProvider";
import ContextProvider from "./Providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager App",
  description: "My Task Manager",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>
            <Sidebar />
            {children}
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
