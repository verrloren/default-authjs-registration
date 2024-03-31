import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const DashboardPage = async () => {

	const session = await auth();

	return (
	<div>
		{JSON.stringify(session)}
		<form action={async () => {
			//that's how we use signOut in server components, server actions etc
			"use server";
			await signOut();
		}}>
			<Button type="submit">
				Sign out
			</Button>
		</form>
	</div>
	)
};

export default DashboardPage;
