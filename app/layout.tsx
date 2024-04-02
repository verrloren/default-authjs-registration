import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import Header from "@/components/navbar/header"
// import { ThemeProvider } from "@/providers/theme-provider"

const DM = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Alkeymist",
	description:
		"Alkeymist is a custom keyboards e-commerce store. We offer a wide range of custom keyboards, keycaps, and accessories. Admin panel for managing products and orders is also included.",
}
export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={DM.className}>
				{/* <ThemeProvider> */}
					<div className="w-full">
						<Header />
						<main className="">
							{children}
						</main>
					</div>
				{/* </ThemeProvider> */}
			</body>
		</html>
	)
}
