import { Social } from "@/components/auth/social";

const AuthLayout = ({ children }: { children: React.ReactNode}) => {
	return (
		<div className="h-[90%] w-full flex flex-col items-center justify-center">
			<div className="w-3/4 sm:w-2/3 flex flex-col gap-7 border-">
				{children}
				<Social />
			</div>
		</div>
		)
};

export default AuthLayout;