import './landing.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
	const [loaded, setLoaded] = useState(false);
	const [count, setCount] = useState(640);
	useEffect(()  => {		
		setCount(props.data.runs.length);
		setLoaded(true);
	}, [props.data.runs.length])	

	let view = <div><h4>Loading...</h4></div>

	if(loaded){
		view = 
			<div>
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
	}
	return (
		<div id="landingContainer">
			<div id="landingBox">
				{view}
			</div>
		</div>
	);
}

export default Landing; 