import { MainNav } from "@/components/navbar/main-nav"
import UserButton from "../user-button"
import { LoginButton } from "@/components/login-button"
import { Button } from "@/components/ui/button"

export default function Header() {
	return (
		<header className="sticky flex justify-center border-b">
			<div className="flex items-center justify-between w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
				<MainNav />
				{/* <UserButton /> */}
				<LoginButton>
					<Button variant="default">
						Sign in
					</Button>
				</LoginButton>
			</div>
		</header>
	)
}
