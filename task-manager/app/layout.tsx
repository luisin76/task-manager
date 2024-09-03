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
