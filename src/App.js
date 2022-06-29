import { Fragment } from 'react';
import { Switch, Route, } from 'react-router-dom';
import './App.css';
import Detail from './Components/Detail';
import Header from './Components/Header';
import Login from './Login';
import Home from './Pages/Home';

function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path= "/detail">
          <Detail/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
