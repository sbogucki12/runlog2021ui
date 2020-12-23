import { Link } from 'react-router-dom';
import PasswordForm from './PasswordForm';
import { useState } from 'react';
import NewRunForm from './NewRunForm';
import DeleteRun from './DeleteRun';

function NewRun() {
	const [showForm, setShowForm] = useState(false);
	let view = (
		<div>
			<PasswordForm setShowForm={setShowForm} />
		</div>
	);

	if (showForm) {
		view = (
			<div>
				<div>
					<NewRunForm />
				</div>
				<div>
					<DeleteRun />
				</div>
			</div>
		);
	}
	return (
		<div id="newRunContainer">
			<h1>Admin</h1>
			<div>{view}</div>
			<Link to="/runlog">Home</Link>
		</div>
	);
}

export default NewRun; 
