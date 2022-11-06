/** @format */

import React from "react";
import logo from "../img/logo.png";
import { Link, Navigate } from "react-router-dom";

function Navbar() {
	return (
		<header className='header'>
			<div className='logo'>
				<img src={logo} alt='logo' />
				<h2 className='logoName' element = "<Navigate to='/home' />">
					Gear~Git...
				</h2>
			</div>

			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/profile'>About</Link>
				</li>
				<li>
					<Link to='/errrorboundary'>Error Boundary</Link>
				</li>
			</ul>
		</header>
	);
}

export default Navbar;
