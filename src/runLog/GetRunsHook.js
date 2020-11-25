import {useEffect, useState } from 'react';
import fetchGetRuns from '../utilities/fetchGetRuns';
import constants from '../utilities/constants';

function GetRunsHook () {
    const [data, setData] = useState({runs: []});

    const url = constants.GETRUNSDEVURL;  

    useEffect(() => {
        fetchGetRuns(url).then(r => {            
            r.sort((a,b) => {
                return new Date(b.date) - new Date(a.date);
            })
            setData({runs: r});
        })
    })

    return data;
}

export default GetRunsHook;
