import useGetRuns from './useGetRuns';
import './runLog.css';
import { Fragment, useState } from 'react';
import RunLogHeader from './RunLogHeader';
import RunLogModal from './RunLogModal';
import RunLogModalContent from './RunLogModalContent';

function RunLogHome() {
	const [showModal, setShowModal] = useState(false);


    let loadingScreen = (
		<p>
			<b>
				<i>Loading...</i>
			</b>
		</p>
	);

	const data = useGetRuns();
    
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
		<Fragment key={run.runId}>
            <div/>
			<div>{run.date.substr(0, 10)}</div>
			<div>{run.length}</div>
			<div className="timeCellSpacing">{run.duration.substr(0, 8)}</div>            
			<div>{run.pace.substr(0, 8)}</div>
			<div>{run.type}</div>
			<div>{run.surface}</div>
            <div/>
		</Fragment>
	));

	console.log(document.getElementById("myModal"));

    return (
		<div>
			<RunLogHeader setShowModal={setShowModal} />
			{showModal && <RunLogModal setShowModal={setShowModal}><RunLogModalContent setShowModal={setShowModal} /></RunLogModal>}
			<div id="runLogContainer">
                <div/>
				<div>Date</div>
				<div>Distance</div>
				<div className="timeCellSpacing">Time</div>                
				<div>Pace</div>
				<div>Environment</div>
				<div>Surface</div>
                <div/>
				{view}
			</div>
			<div>{loadingScreen}</div>
		</div>
	);
}; 

export default RunLogHome; 
