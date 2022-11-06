/** @format */

import React from "react";
import { LeftProfile, RightProfile } from "../components";

function Profile() {
	return (
		<div className='profile'>
			<div className='profile-wrapper'>
				<div className='left-profile'>
					<LeftProfile />
				</div>

				<div className="right-profile">
					{/* <RightProfile /> */}
				</div>
			</div>
		</div>
	);
}

export default Profile;
