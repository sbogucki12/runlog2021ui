import useGetRuns from './useGetRuns';
import './runLog.css';
import { Fragment } from 'react';

function RunLogHome() {
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

    return (
		<div>
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