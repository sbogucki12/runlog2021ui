import useGetRuns from './useGetRuns';
import './runLog.css';
import { useState} from 'react';
import RunLogHeader from './RunLogHeader';
import RunLogModal from './RunLogModal';
import RunLogModalContent from './RunLogModalContent';
import { Link } from 'react-router-dom';

function RunLogHome(props) {
	const [showModal, setShowModal] = useState(false);

	let loadingScreen = (
		<p>
			<b>
				<i>Loading...</i>
			</b>
		</p>
	);

	const data = useGetRuns(props.data);

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
		<tr key={run.runId}>
			<td>{run.date.substr(0, 10)}</td>
			<td>{run.length}</td>
			<td>{run.duration.substr(0, 8)}</td>
			<td>{run.pace.substr(0, 8)}</td>
			{/*<td>{run.type}</td>
			<td>{run.surface}</td>
			<td>{run.sleepHours}</td>
			<td>{run.sleepToBedTime}</td>
			<td>{run.sleepWakeTime}</td>
			<td>{run.runListenedTo}</td>
			<td>{run.temperature}</td>*/}
			<td>
				<Link to={`/${run.runId}`}>
					<button>More Info</button>
				</Link>
			</td>
		</tr>
	));

	return (
		<div>
			<RunLogHeader setShowModal={setShowModal} />
			{showModal && (
				<RunLogModal setShowModal={setShowModal}>
					<RunLogModalContent setShowModal={setShowModal} />
				</RunLogModal>
			)}			
			<table style={{ width: '100%' }}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Distance</th>
						<th>Time</th>
						<th>Pace</th>
						{/*<th>Environment</th>
						<th>Surface</th>
						<th>Hours of Sleep</th>
						<th>Sleep - Time to Bed</th>
						<th>Sleep - Time Awake</th>
						<th>Music/Podcast</th>
						<th>Outdoor Temperature</th>*/}
						<th />
					</tr>
				</thead>
				<tbody>{view}</tbody>
			</table>
			<div>{loadingScreen}</div>
		</div>
	);
}; 

export default RunLogHome; 
