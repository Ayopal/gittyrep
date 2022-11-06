/** @format */

import React from "react";

function Home() {
	return (
		<div className='Home'>
			<div className='wrapper'>
				<h1>Home</h1>

				<div className='left'>
					<h2 className="left-head">Fetch any git repos</h2>
                    <h5>Insert any github username below to get the repos and other info</h5>

					<input type='text' placeholder='insert a git hub username/url' />
					<button className="fetch-btn">FECTH...</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
