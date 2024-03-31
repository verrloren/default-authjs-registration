
import { signOut } from "@/auth";
import { Button } from "../ui/button";


export function LogoutButton() {
	return (
		<form action={async () => {
			//that's how we use signOut in server components, server actions etc
			"use server";
			await signOut();
		}}>
			<Button variant="ghost" type="submit">
				Log out
			</Button>
		</form>
	)
}
