import { LeftNav, RightNav } from "~/app/home/_components";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {

	return (
		<div className="md:grid md:grid-cols-3 bg-background text-primaryText divide-y md:divide-x divide-border flex flex-col md:overflow-hidden w-screen h-screen min-w-screen">
			<LeftNav />
			<div className="flex">
				{children}
			</div>
			<RightNav />
		</div>
	);
}
