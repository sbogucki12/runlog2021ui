import GetRunsHook from './GetRunsHook';

function RunLogHome() {
    let loadingScreen = <p><b><i>Loading...</i></b></p>

    const data = GetRunsHook();  

    if(data.runs.length > 0){
        loadingScreen = null;
    }

    if(data.runs === undefined){
        loadingScreen = <p><b><i>No Runs Available...</i></b></p>
    }

    const view = data.runs.map((run) => 
        <li key={run.runId}>
            <p><b>Date: {run.date}</b></p>
            <p><b>Distance: {run.length} </b></p>
            <p><b>Time: {run.duration} </b></p>
            <p><b>Pace: {run.pace} </b></p>
            <p><b>Environment: {run.type} </b></p>
            <p><b>Surface: {run.surface} </b></p>
        </li>
    )

    return (
        <div>
            {loadingScreen}
            <ul>
                {view}
            </ul>
        </div>
    )
}; 

export default RunLogHome; 