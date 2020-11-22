import './App.css';
import { Switch, Route } from 'react-router-dom';
import NewRun from './newRun/NewRun';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/newrun">
            <NewRun />
          </Route>         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
