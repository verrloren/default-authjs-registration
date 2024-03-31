import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github"; 
import Google from "next-auth/providers/google"; 

import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import bcrypt from 'bcryptjs';

export default {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials)

				if(validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);

					//check password as well because google accounts have no password
					if(!user || !user.password) return null;

					//check if password matches
					const passwordMatch = await bcrypt.compare(password, user.password);
				
					if (passwordMatch) return user;
				}

				return null;
			}
		})
	]
} satisfies NextAuthConfig