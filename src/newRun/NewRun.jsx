import { Link } from 'react-router-dom';
import PasswordForm from './PasswordForm';
import { useState } from 'react';
import NewRunForm from './NewRunForm';
import DeleteRun from './DeleteRun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

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
		<div className="runLogMoreInfoContentContainer" id="newRunContainer">
			<div className="runlogMoreInfoBox">
			<div id="newRunAuthExitIconContainer">
				<div><Link to="/runlog">
				<span role="img" aria-label="exit" id="newRunAuthExitIcon">
					❌
				</span>
					</Link></div>
			</div>
			<div style={{ marginTop: '2vh'}}> 
				<FontAwesomeIcon icon={faLock} size="3x"/>
			</div>
			<div style={{ marginTop: '2vh', marginBottom: '2vh' }}>{view}</div>			
			</div>
		</div>
	);
}

export default NewRun; 
