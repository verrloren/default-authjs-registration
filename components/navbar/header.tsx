import { MainNav } from "@/components/navbar/main-nav"
import UserButton from "../user-button"
import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { RegisterButton } from "../auth/register-button"
import { auth } from "@/auth"
import { signOut } from "next-auth/react"
import { LogoutButton } from "../auth/logout-button"
import Container from "@/components/container"
import { ThemeToggle } from "../theme-toggle"

export default async function Header() {

	const session = await auth();

	return (
		<header className="w-full sticky flex justify-center 
			border-b border-[#ebebeb] bg-white h-16">
			<Container>
				<div className="w-full h-full flex items-center justify-between">
				{/* <div className="flex items-center justify-between w-full 
			max-w-6xl px-4 mx-auto sm:px-6"> */}
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
			</Container>
			{/* <ThemeToggle /> */}
		</header>
	)
}
