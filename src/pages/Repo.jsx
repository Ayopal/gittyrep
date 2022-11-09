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
			<h1>Repo Data</h1>
			<div>
				<h3>Name: {repo.name}</h3>
				<div className='singleInfo'>
					<p className='data'>Branch: {repo.default_branch}</p>
					<p className='data'>Fork: {repo.forks}</p>
					<p className='data'>Language: {repo.language}</p>
					<p className='data'>File Size: {repo.size}kb</p>
					<p className='data'>visibility : {repo.visibility}</p>
					<p className='data'>watchers : {repo.watchers}</p>
					<p className='data'>open issues : {repo.open_issues}</p>
					<p className='data'>created_at : {repo.created_at}</p>
				</div>
				<button className="viewgit">
					<a target='_blank' rel='noreferrer' href={repo.html_url}>
						view on github
					</a>
				</button>
			</div>
		</div>
	);
}

export default Repo;
