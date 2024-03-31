import { AuthFooter } from "@/components/auth/auth-footer";
import { RegisterForm } from "@/components/auth/register-form";
import Link from "next/link";

interface RegisterPageProps { }

export default function RegisterPage({ }: RegisterPageProps) {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="sm:text-5xl text-4xl font-semibold pb-12">
				Create an account
			</h1>

			<RegisterForm />

			<AuthFooter src="/auth/login" text="Already have an account? Login" />
		</div>
	)
}
