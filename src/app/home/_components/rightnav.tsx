import { RedirectToSignIn, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export default function RightNav() {

	return (
		<div className="flex p-5 min-h-screen">
			<div className="grid grid-rows-3 gap-4 w-full">
				<div className="p-5 border-2 border-border h-full font-semibold text-3xl text-right">
					<SignedOut>
						<RedirectToSignIn />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
				<div className="p-5 border-2 border-border h-full"></div>
				<div className="p-5 border-2 border-border h-full"></div>
			</div>
		</div>
	);
}
