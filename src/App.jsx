import './App.css';
import { Switch, Route } from 'react-router-dom';
import NewRun from './newRun/NewRun';
import Home from './home/Home';
import RunLogHome from './runLog/RunLogHome';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/newrun">
            <NewRun />
          </Route>         
          <Route path="/">
            <RunLogHome />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
