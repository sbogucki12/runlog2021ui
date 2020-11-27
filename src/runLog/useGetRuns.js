import {useEffect, useState } from 'react';
import fetchGetRuns from '../utilities/fetchGetRuns';
import constants from '../utilities/constants';

function useGetRuns () {
    const [data, setData] = useState({runs: []});

    const url = constants.RUNSAPIDEV;  

    useEffect(() => {
        fetchGetRuns(url).then(r => {
            console.log(`r: ${JSON.stringify(r[0])}`)            
            r.sort((a,b) => {
                return new Date(b.date) - new Date(a.date);
            })
            setData({runs: r});
        })
    }, [])

    return data;
}

export default useGetRuns;
