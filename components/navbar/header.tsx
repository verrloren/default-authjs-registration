import { MainNav } from "@/components/navbar/main-nav"
import UserButton from "../user-button"
import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { RegisterButton } from "../auth/register-button"
import { auth } from "@/auth"
import { signOut } from "next-auth/react"
import { LogoutButton } from "../auth/logout-button"

export default async function Header() {

	const session = await auth();

	return (
		<header className="sticky flex justify-center border-b border-[#EBEBEB] bg-white">
			<div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
				<MainNav />
				{/* <UserButton /> */}
				{session ? (
				
				<LogoutButton />

				) : (

					<div className="flex gap-4">
						<LoginButton>
							<Button variant="outline">
								Login
							</Button>
						</LoginButton>
						<RegisterButton>
							<Button variant="default">
								Sign up
							</Button>
						</RegisterButton>
					</div>
				)}
			</div>
		</header>
	)
}
