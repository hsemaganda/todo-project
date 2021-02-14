//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pendingtasks from './components/Pendingtasks';
import Completedtasks from './components/Completedtasks';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/pending">
            <Pendingtasks/>
          </Route>
          <Route path="/completed">
            <Completedtasks/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>

        </Switch>

      </div>
    </div>

    </Router>
    
  );
}

export default App;
