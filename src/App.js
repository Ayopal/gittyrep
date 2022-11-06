/** @format */

import React from "react";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Navbar } from "./components";
import { Home, About, NotFound, Profile, Repo } from "./pages";

function App() {
	return (
		<div className='App'>
			<div className='main'>
				<Router>
					<Navbar /> {/* This is the navbar component */}
					<Routes>
						{/* <Route path='/' exact element={<Home />} /> */}
						<Route path='/' element={<Profile />}>
							<Route path='/repo/:name' element={<Repo />} />
						</Route>

						<Route path='/about' element={<Profile />} />
						<Route path='/not-found' element={<NotFound />} />
						<Route path='*' element={<Navigate to='/not-found' />}></Route>
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
