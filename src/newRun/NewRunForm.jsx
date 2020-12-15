import { useState } from 'react';
import fetchPostRun from '../utilities/fetchPostRun';
import fields from './formFields';
import constants from '../utilities/constants';
import '../runLog/runLog.css';

function NewRunForm() {
	const [value, setValue] = useState({
		runDate: undefined,
		runDuration: undefined,
		runDistance: undefined,
		runEnvironment: '',
		runSurface: '',
		runSleepHours: undefined,
		runSleepToBedTime: undefined,
		runSleepWakeTime: undefined,
		runListenedTo: '',
		runTemperature: undefined,
		runShoeAge: undefined,
		//runImage: ""
	});

	async function handleSubmit(e) {
		e.preventDefault();

		let url = constants.RUNSAPIPROD;
		if (window.location.hostname.includes('localhost')) {
			url = constants.RUNSAPIDEV;
		}

		const body = {
			Date: value.runDate.toString(),
			Duration: value.runDuration.toString(),
			Length: Number(value.runDistance),
			Type: value.runEnvironment.toString(),
			Surface: value.runSurface.toString(),
			SleepHours: Number(value.runSleepHours),
			SleepToBedTime: value.runDate.toString() + 'T' + value.runSleepToBedTime.toString(),
			SleepWakeTime: value.runDate.toString() + 'T' + value.runSleepWakeTime.toString(),
			RunListenedTo: value.runListenedTo.toString(),
			Temperature: Number(value.runTemperature),
			ShoeAge: Number(value.runShoeAge)
			//ImageUrl: null
		};
		const result = await fetchPostRun(url, body);
	}

	const list = fields.map((field) => (
		<div key={field.name}>
			<div>{field.title}</div>
			<input
				type={field.type}
				name={field.name}
				value={value[field.name]}
				step={0.01}
				style={{ width: field.width }}
				onChange={(e) => {
					setValue({
						...value,
						[field.name]: e.target.value,
					});
				}}
			/>
		</div>
	));

	return (
		<div id="newRunFormContainer">
			<h3>New Run Form</h3>
			<form
				onSubmit={(e) => handleSubmit(e)}
				style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
			>
				<div>
					<label className="newRunRowLabel">{list}</label>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<input type="submit" value="Submit" style={{ width: '60px' }} />
				</div>
			</form>
		</div>
	);
}

export default NewRunForm; 
