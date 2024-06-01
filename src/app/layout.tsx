import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/redux/provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kanban Board App",
  description: "Full-stack Kanban task management app with TypeScript, Next.js, Redux-toolkit, and Firebase",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
