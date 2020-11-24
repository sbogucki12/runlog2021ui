import fetchGetRuns from '../utilities/fetchGetRuns';
import constants from '../utilities/constants';
import { useState, useEffect } from 'react';

function RunLogHome() {
    const [data, setData] = useState({runs: []});

    const url = constants.GETRUNSDEVURL;    
    
    useEffect(() => {
        fetchGetRuns(url).then(runs => setData({runs: runs}))
    }, [])
    
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
            <ul>
                {view}
            </ul>
        </div>
    )
}; 

export default RunLogHome; 