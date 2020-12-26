import { useParams, Link } from 'react-router-dom';
import RunLogHeader from './RunLogHeader';
import './runLog.css';

function RunMoreInfo(props) {
	let { id } = useParams();
	const data = props.data;
	const runs = data.runs;
	const run = runs.find((run) => run.runId == id);

	return (
		<div>
			<RunLogHeader />
			<div className="runLogMoreInfoContentContainer">
				<div className="runlogMoreInfoBox">
					<table id="runlogMoreInfoTable">
						<tbody>
							<tr>
								<td className="runlogMoreInfoLabel">
									<h4>Date: </h4>
								</td>
								<td>
									<h4>{run.date.substr(0, 10)}</h4>
								</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Distance: </td>
								<td>{run.length}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Time: </td>
								<td>{run.duration.substr(0, 8)}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Pace: </td>
								<td>{run.pace.substr(0, 8)}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Environment: </td>
								<td>{run.type}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Running Surface: </td>
								<td>{run.surface}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Sleep (Hours): </td>
								<td>{run.sleepHours}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Sleep (Bed Time): </td>
								<td>{run.sleepToBedTime.substr(11, 5)}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Sleep (Wake Up): </td>
								<td>{run.sleepWakeTime.substr(11, 5)}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Shoe Age (days): </td>
								<td>{run.shoeAge}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Listening To: </td>
								<td>{run.runListenedTo}</td>
							</tr>
							<tr>
								<td className="runlogMoreInfoLabel">Climate (Temp.): </td>
								<td>
									{run.temperature}
									<span>&#176;</span>F
								</td>
							</tr>
						</tbody>
					</table>
					<div className="runlogMoreInfoButtonContainer">
						<Link to="/runlog">
							<button>{`<--`}</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RunMoreInfo;
