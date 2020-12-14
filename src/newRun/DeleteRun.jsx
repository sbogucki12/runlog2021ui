import useGetRuns from '../runLog/useGetRuns';
import constants from '../utilities/constants';

function DeleteRun() {
	let runs = useGetRuns().runs;
	let runToDelete;

	function onDelete(e) {
		e.preventDefault();

		let url = constants.RUNSAPIPROD;
		if (window.location.hostname.includes('localhost')) {
			url = constants.RUNSAPIDEV;
		}

		fetch(`${url}${runToDelete}`, {
			method: 'DELETE',
		}).then((res) => {
			if (res.status > 199 && res.status < 300) {
				alert('Run Deleted!');
			} else {
				alert('Delete Run Failed');
			}
		});
	}

	if (runs.length > 0) {
		runToDelete = runs.sort((a, b) => new Date(a.date) - new Date(b.date))[runs.length - 1].runId;
	}

	return (
		<div>
			{' '}
			<div>
				<h2>Delete Last Run</h2>
			</div>
			<div style={{ marginBottom: '2vh' }}>
				<button onClick={(e) => onDelete(e)}>Delete Last</button>
			</div>
		</div>
	);
}

export default DeleteRun; 
