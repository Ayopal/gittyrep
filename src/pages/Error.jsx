/** @format */
import {ErrorBoundary} from "../components"
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function Error() {
	return (
		<div>
			<Link to='/'>
				<button> Back</button>
			</Link>
			<ErrorBoundary>
				<Pagination />
			</ErrorBoundary>
		</div>
	);
}

export default Error;
