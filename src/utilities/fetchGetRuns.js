async function fetchGetRuns(url) {
	const result = await fetch(url);
	const json = result.json();
	if (result.status < 299) {
		return json;
	} else {
		alert('Server Error!');
		return result.status;
	}
}

export default fetchGetRuns;
