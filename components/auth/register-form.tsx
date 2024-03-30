'use client';

import { useForm } from "react-hook-form"
import { RegisterSchema } from '@/schemas/index';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";

export const RegisterForm = () => {

	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, setTransition] = useTransition();

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			name: ''
		},
	});

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		setError("")
		setSuccess("")

		setTransition(() => {
			//data send to server
			register(values)
				//data received from server
				.then((data) => {
					setError(data.error)
					setSuccess(data.success)
				})
		})
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input disabled={isPending} placeholder="John Wick" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input disabled={isPending} type='email' placeholder="fine@email.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input disabled={isPending} type='password' placeholder="******" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormError message={error} />
					<FormSuccess message={success} />

					<Button disabled={isPending} className="w-full" type="submit">Login</Button>
				</form>
			</Form>
		</div>
	)
}