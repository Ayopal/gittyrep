/** @format */

import React from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import fork from "../img/GitFork.png";
import star from "../img/Star.png";

function RightProfile({
	currentRepos,
	numberOfPages,
	currentPage,
	setCurrentPage,
}) {
	return (
		<div className='right-wrapper-container'>
			<div className='rightwrapper'>
				{currentRepos.map((repo) => (
					<Link to={`repo/${repo.name}`} key={repo.id}>
						<div className='card'>
							<div>
								<h2>{repo.name}</h2>
							</div>

							<p>{repo.description}</p>

							<div className='icons'>
								<img src={fork} alt='' />
								<img src={star} alt='' />
								<p>public</p>
							</div>
						</div>
					</Link>
				))}
			</div>
			<Pagination
				numberOfPages={numberOfPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default RightProfile;
