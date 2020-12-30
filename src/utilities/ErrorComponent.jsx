import { Link } from 'react-router-dom';

function ErrorComponent() {
	return (
		<div className="runLogMoreInfoContentContainer">
			<div className="runlogMoreInfoBox">
				<div style={{ maxWidth: '95%'}}>
					<h1>🤦‍♂️</h1>
					<p>There seems to have been an error here.</p>
					<Link to="/runlog">
						<button>{`<--`}</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ErrorComponent;
