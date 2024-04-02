import { AuthFooter } from "@/components/auth/auth-footer";
import { LoginForm } from "@/components/auth/login-form";
import { Social } from "@/components/auth/social";
import Link from "next/link";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="sm:text-5xl text-4xl font-semibold text-center absolute top-[22%]">
				Welcome back!
			</h1>
			
			<LoginForm />

			<AuthFooter src="/auth/register" text="Don't have an account? Register" />
		</div>
 )
}