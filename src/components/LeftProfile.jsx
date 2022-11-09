/** @format */

import React from "react";
import ellipse from "../img/Ellipse.png";
import locate from "../img/Location.png";
import link from "../img/link.png";
import gmail from "../img/Message.png";
import following from "../img/User.png";
import users from "../img/Users.png";
import doc from "../img/Document.png";
import edit from "../img/Edit.png";

function LeftProfile({ user }) {
	return (
		<div className='Lprofile-wrapper'>
			<div className='profile-sec'>
				{/* <h1>repo</h1> */}
				<img src={user.avatar_url} className='profile-img' />
			</div>
			<p className='git-username'>{user.name} </p>
			<p className='git-des'> {user.bio}</p>

			<div className='info'>
				<img src={locate} alt='' />
				<p className='info-state'>{user.location}</p>
			</div>

			<div className='info'>
				<img src={link} alt='' />
				<a className='info-potfolio' href='/'>
					https://www.linkedin.com/in/paul-ayoola-7129a714b
				</a>
			</div>

			<div className='info'>
				<img src={gmail} alt='' />
				<p className='info-gmail'> Ayopaul19@gmail.com </p>
			</div>

			<div className='fwrapper'>
				<div className='follow'>
					<div className='infos'>
						<div>
							<p>Followers</p>
							<p>{user.followers}</p>
						</div>
						<img src={users} alt='' />
					</div>

					<div className='infos'>
						<div>
							<p>Following</p>
							<p>{user.following}</p>
						</div>
						<img src={following} alt='' />
					</div>
				</div>

				<div className='follow'>
					<div className='infos'>
						<div>
							<p>Public Repo</p>
							<p>{user.public_repos}</p>
						</div>
						<img src={doc} alt='' />
					</div>

					<div className='infos'>
						<div>
							<p>Public Gist</p>
							<p>{user.public_gists}</p>
						</div>
						<img src={edit} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftProfile;
