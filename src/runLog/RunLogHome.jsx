import './runLog.css';
import { useState } from 'react';
import RunLogHeader from './RunLogHeader';
import RunLogModal from './RunLogModal';
import RunLogModalContent from './RunLogModalContent';
import { Link } from 'react-router-dom';
import RunLogTableHeader from './RunLogTableHeader';

function RunLogHome(props) {
	const [showModal, setShowModal] = useState(false);

	let loadingScreen = (
		<div>
			<div />
			<div>
				<b>
					<i>Loading...</i>
				</b>
			</div>
			<div />
			<div />
			<div />
		</div>
	);

	const data = props.data; 

	if (data.runs.length > 0) {
		loadingScreen = null;
	}

	if (data === undefined) {
		loadingScreen = (
			<p>
				<b>
					<i>No Runs Available...</i>
				</b>
			</p>
		);
	}

	const view = data.runs.map((run) => (
		<div key={run.runId} id="runLogBody">
			<div />
			<div>{run.date.substr(0, 10)}</div>
			<div>{run.length}</div>
			<div>{run.duration.substr(0, 8)}</div>
			<div>{run.pace.substr(0, 8)}</div>
			<div>
				<Link to={`/${run.runId}`}>
					<button style={{ whiteSpace: 'nowrap', textAlign: 'center'}}>More Info</button>
				</Link>
			</div>
			<div />			
		</div>
	));

	return (
		<div>
			<RunLogHeader setShowModal={setShowModal} />
			{showModal && (
				<RunLogModal setShowModal={setShowModal}>
					<RunLogModalContent setShowModal={setShowModal} />
				</RunLogModal>
			)}

			<RunLogTableHeader />
			{/*<div>Environment</div>
					<div>Surface</div>
					<div>Hours of Sleep</div>
					<div>Sleep - Time to Bed</div>
					<div>Sleep - Time Awake</div>
					<div>Music/Podcast</div>
					<div>Outdoor Temperature</div>*/}
			<div />
			<div id="runLogBodyContainer">{view}</div>
			{loadingScreen}
		</div>
	);
}

export default RunLogHome;
