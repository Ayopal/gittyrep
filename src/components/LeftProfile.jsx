/** @format */

import React from "react";
import ellipse from "../img/Ellipse.png";
import locate from "../img/Location.png";
import link from "../img/link.png";
import gmail from "../img/Message.png";
import user from "../img/User.png";
import users from "../img/Users.png";
import doc from "../img/Document.png";
import edit from "../img/Edit.png";

function LeftProfile() {
	return (
		<div className='Lprofile-wrapper'>
			<div className='profile-sec'>
				<h1>repo</h1>
				<img src={ellipse} className='profile-img' />
			</div>
			<p className='git-username'> Ayopal10 </p>
			<p className='git-des'> Just Existing.......... </p>

			<div className='info'>
				<img src={locate} alt='' />
				<p className='info-state'>Lagos, Nigeria </p>
			</div>

			<div className='info'>
				<img src={link} alt='' />
				<a className='info-potfolio' href='/'>
					Khalidola.netlify.app
				</a>
			</div>

			<div className='info'>
				<img src={gmail} alt='' />
				<p className='info-gmail'> Ayopaul@gmail.com </p>
			</div>

            <div className="fwrapper">

			<div className='follow'>

				<div className='infos'>
					<div>
						<p>Followers</p>
						<p>1200</p>
					</div>
					<img src={users} alt='' />
				</div>

				<div className='infos'>
					<div>
						<p>Following</p>
						<p>1200</p>
					</div>
					<img src={user} alt='' />
				</div>

			</div>

			<div className='follow'>
				<div className='infos'>
					<div>
						<p>Public Repo</p>
						<p>25</p>
					</div>
					<img src={doc} alt='' />
				</div>

				<div className='infos'>
					<div>
						<p>Public Gist</p>
						<p>25</p>
					</div>
					<img src={edit} alt='' />
				</div>
			</div>
		</div>
        </div>
	);
}

export default LeftProfile;
