import { useEffect, useState } from 'react';
import fetchGetRuns from '../utilities/fetchGetRuns';
import constants from '../utilities/constants';

function useGetRuns() {
	const [data, setData] = useState({ runs: [] });

	let url = constants.RUNSAPIPROD;
	if (window.location.hostname.includes('localhost')) {
		url = constants.RUNSAPIDEV;
	}

	useEffect(() => {
		fetchGetRuns(url).then((r) => {
			r.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
			setData({ runs: r });
		});
	}, []);

	return data;
}

export default useGetRuns;
