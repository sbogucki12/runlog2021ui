import { useParams, Link } from 'react-router-dom';

function RunMoreInfo (props) {
    let { id } = useParams();
    const data = props.data;
    const runs = data.runs;    
    const run = runs.find(run => run.runId == id)
    
    return (
        <div>
            <h1>Date: {run.date.substr(0, 10)}</h1>            
            <p>Pace: {run.pace.substr(0, 8)}</p>
			<p>Environment: {run.type}</p>
			<p>Running Surface: {run.surface}</p>
			<p>Sleep (Hours): {run.sleepHours}</p>
		    {/*<p>{run.sleepToBedTime}</p>
			<p>{run.sleepWakeTime}</p>*/}
			<p>Background Sounds: {run.runListenedTo}</p>
			<p>Climate (Temp. (F)): {run.temperature}</p>
            <div>
                <Link to="/"><button>{`<--`}</button></Link>
            </div>
        </div>
    )
}

export default RunMoreInfo;
