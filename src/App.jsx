import './App.css';
import { Switch, Route } from 'react-router-dom';
import NewRun from './newRun/NewRun';
import Home from './home/Home';
import RunLogHome from './runLog/RunLogHome';
import RunMoreInfo from './runLog/RunMoreInfo';
import useGetRuns from './runLog/useGetRuns.js';


function App() {
  const data = useGetRuns(); 

  return (
    <div className="App">
      <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/admin">
            <NewRun />
          </Route>         
          <Route exact path="/">
            <RunLogHome data={data}/>
          </Route>
          <Route path="/:id" children={<RunMoreInfo data={data}/>} />
        </Switch>
    </div>
  );
}

export default App;
