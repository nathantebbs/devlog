"use client";
import { useEffect, useState } from "react";
import { useSession } from "@clerk/nextjs";

interface Repository {
	id: number;
	name: string;
	private: boolean;
};

const RepositoryList = () => {
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [error, setError] = useState<string | null>(null);

	const { session } = useSession();


	useEffect(() => {
		const fetchRepositories = async () => {
			if (!session) {
				return;
			}
			try {
				const response = await fetch('/api/github?action=repoList');
				if (!response.ok) {
					throw new Error('Failed to fetch repositories');
				}

				const data = await response.json();
				console.log('Fetched data:', data); // Log fetched data

				setRepositories(data);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			}
		};
		fetchRepositories();
	}, [session]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h1>Repositories</h1>
			<ul>
				{repositories.map((repo: any) => (
					<li key={repo.id}>
						{repo.name} {repo.private ? '(Private)' : '(Public)'}
					</li>
				))}
			</ul>
		</div>
	);
}

export default RepositoryList;
