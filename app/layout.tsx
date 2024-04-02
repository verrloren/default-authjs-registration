import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import Header from "@/components/navbar/header"

const DM = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={DM.className}>
        <div className="w-full">
          <Header />
          <main className="">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
