import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import NewRun from './newRun/NewRun';
import About from './about/About';
import RunLogHome from './runLog/RunLogHome';
import RunMoreInfo from './runLog/RunMoreInfo';
import Landing from './landing/Landing';
import useGetRuns from './runLog/useGetRuns.js';
import ErrorComponent from './components/ErrorComponent';
import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const runs = useGetRuns();
	useEffect(() => {
		setData(runs);
		setLoading(false);
	}, [runs]);

	let view = <h1>Loading...</h1>;

	if (!loading) {
		view = (
			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/admin">
					<NewRun />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/runlog">
					<RunLogHome data={runs} />
				</Route>
				<Route path="/:id" children={<RunMoreInfo data={data} />} />
				<Route path="/" children={<Landing data={data} />} />
				<Route component={ErrorComponent}/>
			</Switch>
		);
	}

	return <div className="App">{view}</div>;
}

export default App;
