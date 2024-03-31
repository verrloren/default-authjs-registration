'use client'

import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

interface SocialProps {}

export function Social({}: SocialProps) {

	const onClick = (provider: "google" | "github") => {
		// in client component import signIn from next-auth/react
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT
		})
	}

	return (
		<div className="flex items-center w-full gap-x-4">
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => onClick("google")}>
				<FcGoogle className="h-5 w-5" />
			</Button>

			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={() => onClick("github")}>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
 )
}