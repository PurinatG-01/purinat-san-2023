import Navbar from "@/components/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Purinat San. 2023",
  description: "Personal profile of Purinat Sanbundit created in 2023",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col justify-between p-4"}>

          <Navbar />
          <main className="flex-grow">
            {children}
          </main>

      </body>
    </html>
  )
}
