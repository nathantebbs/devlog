import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import RepositoryList from "./repo";

export default function RightNav() {

	return (
		<div className="flex p-5 min-h-screen overflow-scroll">
			<div className="grid grid-rows-3 gap-4 w-full">
				<div className="p-0 border-2 border-border overflow-scroll font-semibold text-left">
					<div className="grid">
						<div className="sticky grid grid-cols-2 items-center top-0 w-full bg-background border-b border-border ">
							<span className="text-xl text-left">Repositories</span>
							<div className="justify-self-end p-1">
								<SignedOut>
									<RedirectToSignIn />
								</SignedOut>
								<SignedIn>
									<UserButton />
								</SignedIn>
							</div>
						</div>
						<div className="text-left">
							<RepositoryList />
						</div>
					</div>
				</div>
				<div className="p-5 border-2 border-border h-full"></div>
				<div className="p-5 border-2 border-border h-full"></div>
			</div>
		</div>
	);
}
