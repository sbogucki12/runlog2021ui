import './runLog.css';

function MoreInfoModalContent(props) {
	return (
		<div id="myModal" className="modal">
			<div className="modal-content">
				<span className="close" onClick={() => props.setShowMoreInfo(false)}>
					&times;
				</span>
				<h1>More Info</h1>
                <div>
                        <p><span><b>Date: </b></span>{props.runs[props.runIndex].date.substr(0, 10)}</p>
                    <p><span><b>Distance: </b></span>{props.runs[props.runIndex].length}</p>
                    <p><span><b>Duration: </b></span>{props.runs[props.runIndex].duration.substr(0, 8)}</p>            
                    <p><span><b>Pace: </b></span>{props.runs[props.runIndex].pace.substr(0, 8)}</p>
                    <p><span><b>Environment: </b></span>{props.runs[props.runIndex].type}</p>
                    <p><span><b>Surface: </b></span>{props.runs[props.runIndex].surface}</p>
                    <p><span><b>Sleep - Total Hours: </b></span>{props.runs[props.runIndex].sleepHours}</p>
                    <p><span><b>Sleep - Time to Bed: </b></span>{props.runs[props.runIndex].sleepToBedTime}</p>
                    <p><span><b>Sleep - Time to Wake: </b></span>{props.runs[props.runIndex].sleepWakeTime}</p>
                    <p><span><b>Background Sounds: </b></span>{props.runs[props.runIndex].runListenedTo}</p>
                    <p><span><b>Climate (Temp): </b></span>{props.runs[props.runIndex].temperature}</p>				
                </div>
                
			</div>
		</div>
	);
}

export default MoreInfoModalContent;
