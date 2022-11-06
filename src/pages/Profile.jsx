/** @format */

import React from "react";
import { useState, useEffect } from "react";

import { LeftProfile, RightProfile } from "../components";

function Profile() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [repos, setRepos] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [reposPerPage] = useState(8);

	useEffect(() => {
		fetchUser();
		fetchRepo();
	}, []);

	const url = "https://api.github.com";
	const token = process.env.REACT_APP_GITHUB_TOKEN;

	// "/users/username"

	// fetching the user
	const fetchUser = async () => {
		const response = await fetch(`${url}/users/Ayopal`, {
			headers: {
				Authorization: `token ${token}`,
			},
		});
		const data = await response.json();
		console.log(data);
		setUser(data);
		setLoading(false);
	};

	// fetching the repos
	const fetchRepo = async () => {
		const params = new URLSearchParams({
			sort: "created",
			per_page: 20,
		});
		const response = await fetch(`${url}/users/Ayopal/repos?${params}`, {
			headers: {
				Authorization: `token ${token}`,
			},
		});
		const data = await response.json();
		console.log(data);
		setRepos(data);
		setLoading(false);
	};

	if (loading) return <h1>Loading...</h1>;

	//   pagination logic
	const indexOfLastRepos = currentPage * reposPerPage;
	const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
	const currentRepos = repos.slice(indexOfFirstRepos, indexOfLastRepos);
	const numberOfPages = Math.ceil(repos.length / reposPerPage);

	return (
		<div className='profile'>
			<div className='profile-wrapper'>
				<div className='left-profile'>
					<LeftProfile user={user} />
				</div>

				<div className='right-profile'>
					<RightProfile
						currentRepos={currentRepos}
						numberOfPages={numberOfPages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</div>
		</div>
	);
}

export default Profile;

