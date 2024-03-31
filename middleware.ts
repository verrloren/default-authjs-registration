import NextAuth from "next-auth";

import authConfig from "@/auth.config"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix,authRoutes,publicRoutes } from "@/routes";

const { auth } = NextAuth(authConfig)

export default auth((req): any => {

	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	//allow access to api auth routes
	if (isApiAuthRoute) {
		return null
	}

	//redirect to default login redirect if logged in and trying to access an auth route
	if(isAuthRoute) {
		if(isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
		}
		return null;
	};

	//redirect to login if not logged in and not a public route
	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/auth/login", nextUrl))
	};

	//allow access to every other route
	return null;
})

export const config = {
	//invoking middleware for all routes except those that match the regex
	//default
	// matcher: ['/((?!.+\\.[//w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
	//exclude images
	// matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
	//united
	// matcher: ['/((?!.+\\.[//w]+$|_next).*)', '/', '/(api|trpc)(.*)'] || ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
	matcher: [
		'/((?!.+\\.[a-zA-Z]+$|_next).*)', // Exclude paths with file extensions (images)
		'/', // Include root path
		'/(api|trpc)(.*)' // Include paths starting with /api or /trpc
]
}