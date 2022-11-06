/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Repo() {
	const { name } = useParams();
	const [repo, setRepo] = useState({});
	const [loading, setLoading] = useState(true);

	const url = "https://api.github.com";
	const token = process.env.REACT_APP_GITHUB_TOKEN;

	useEffect(() => {
		fetchRepo();
	}, [name]);

	// fetch single repo
	const fetchRepo = async () => {
		const response = await fetch(`${url}/repos/Ayopal/${name}`, {
			headers: {
				Authorization: `token ${token}`,
			},
		});
		const data = await response.json();
		setRepo(data);
		setLoading(false);
	};

	if (loading) return <h1>Loading...</h1>;

	// console.log(name);
	return (
		<div className='singleRepo'>
			<h1>Single Repo</h1>
			<div>
				<h3>Name: {repo.name}</h3>
				<p>Fork: {repo.forks}</p>
				<p>Language: {repo.language}</p>
				<p>File Size: {repo.size}kb</p>
				<p>visibility : {repo.visibility}</p>
				<p>watchers : {repo.watchers}</p>
				<p>open issues : {repo.open_issues}</p>
				<p>created_at : {repo.created_at}</p>
				<button>
					<a target='_blank' rel='noreferrer' href={repo.html_url}>
						view on github
					</a>
				</button>
			</div>
		</div>
	);
}

export default Repo;
