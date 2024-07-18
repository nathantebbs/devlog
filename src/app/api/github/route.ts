import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";


export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const action = searchParams.get('action');


	if (!action) {
		return NextResponse.json({ message: "Github action required" }, { status: 500 });
	} else {
		if (action)
			switch (action) {
				case "repoList":
					return await getRepoList();
				default:
					return NextResponse.json({ message: "Invalid GitHub action" }, { status: 500 });
			}
	}
}

async function getAccessToken() {
	const { userId } = auth();

	if (!userId) {
		return NextResponse.json({ message: "Cannot Find User" }, { status: 500 });
	}

	const provider = "oauth_github";

	const clerkResponse = await clerkClient().users.getUserOauthAccessToken(
		userId,
		provider
	);

	const accessToken = clerkResponse.data[0]?.token;

	if (!accessToken) {
		return NextResponse.json({ message: "Access token not found" }, { status: 500 });
	}

	return accessToken;
}

async function getRepoList() {
	const accessToken = await getAccessToken();
	const githubURL = "https://api.github.com/user/repos";

	try {

		const headers = {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		};

		const response = await axios.get(githubURL, { headers });

		return NextResponse.json(response.data, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error fetching repositories: ', error.message);
			return NextResponse.json({ message: "Failed to fetch repositories" }, { status: 500 });
		}
	}


}
