import { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { loginOnReload } from "./store/authSlice";

function App() {

  const [isFirstTime, setIsFirstTime] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginOnReload());
    setIsFirstTime(false);
  }, []);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isFirstTime? "": !isLoggedIn ? (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  ) : (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
