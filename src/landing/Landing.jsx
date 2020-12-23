import './landing.css';
import { Link } from 'react-router-dom';

function Landing(props) {
	const count = props.data.runs.length;

	return (
		<div id="landingContainer">
			<div id="landingBox">
				<div>
					<span role="img" aria-label="runner" id="runnerIcon">
						🏃
					</span>
				</div>
				<p>Currently {count} consecutive daily runs</p>
				<p>And counting!</p>
				<Link to="/runlog">
					<button>Enter</button>{' '}
				</Link>
			</div>
		</div>
	);
}

export default Landing; 
