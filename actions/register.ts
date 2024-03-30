'use server';

import * as z from "zod";
import { RegisterSchema } from "../schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	// Vaieldate fields
	const validateFields = RegisterSchema.safeParse(values);

	
	if(!validateFields.success) {
		return { error: "Invalid fields"}
	}

	const { email, password, name } = validateFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	// Check if email already exists
	const existingUser = await getUserByEmail(email);
	
	if(existingUser) {
		return { error: "Email already exists" }
	};

	// Create user

	await db.user.create({
		data: {
			email,
			name,
			password: hashedPassword
		}
	});

	// TODO: send verification token email


	return { success: "Email created!" }
}