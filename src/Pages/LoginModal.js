import { useState, useRef } from "react";
import styled from "styled-components";
import classes from "./LoginModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { loginRequest } from "../store/authSlice";

const LoginModal = (props) => {
  const [userWantsSignin, setUserWantsSignin] = useState(true);
  const [passIsValid, setPassIsValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const dispatch = useDispatch();
  



  const passRef = useRef();
  const confirmRef = useRef();
  const emailRef = useRef();

  const ChangeAuthHandler = (e) => {
    e.preventDefault();
    setEmailIsValid(true);
    setPassIsValid(true);
    setPasswordsMatch(true);
    setUserWantsSignin((prevState) => !prevState);
  };

  const formSubmitHandler = async (e) => {
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passRef.current.value;
    e.preventDefault();
    setEmailIsValid(true);
    setPassIsValid(true);
    setPasswordsMatch(true);
    if (!enteredEmail.includes("@")) {
      setEmailIsValid(false);
    }
    if (enteredPassword.length < 6) {
      setPassIsValid(false);
      return;
    }
    if (!userWantsSignin && enteredPassword !== confirmRef.current.value) {
      setPasswordsMatch(false);
      return;
    }
   dispatch(loginRequest(enteredEmail, enteredPassword, userWantsSignin));

  };

  const guestLoginHandler = ()=>{
    dispatch(authActions.setLogin({authKey:"guest"}))
  }

  return (
    <div className={classes.modal}>
      <Card>
        <form onSubmit={formSubmitHandler}>
          <h1>{userWantsSignin ? "Login" : "Sign Up"}</h1>
          {!emailIsValid && (
            <p style={{ color: "rgb(208, 52, 44)" }}>
              Please enter a valid Email!
            </p>
          )}
          {!passIsValid && (
            <p style={{ color: "rgb(208, 52, 44)" }}>
              Password must be at Least 6 digits!
            </p>
          )}
          {!passwordsMatch && (
            <p style={{ color: "rgb(208, 52, 44)" }}>
              Passwords did not match!
            </p>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />
          </div>
          <br />
          <div className={classes.control}>
            <label htmlFor="password"> password</label>
            <input id="password" type="password" ref={passRef} />
          </div>
          <br />
          {userWantsSignin ? (
            ""
          ) : (
            <div className={classes.control}>
              <label htmlFor="password"> Confirm Password</label>
              <input id="password" type="password" ref={confirmRef} />
            </div>
          )}
          <br />
          <button className={"btn " + classes.btn}>
            {userWantsSignin ? "Login" : "Sign Up"}
          </button>
          <br />
          <p>{userWantsSignin ? "New Here?" : "Have an Account?"}</p>
          <button onClick={ChangeAuthHandler} className="btn">
            {userWantsSignin ? `Sign Up` : "Login"}
          </button>
          <br/>
          <br/>
          <p>Too lazy to login? </p>
          <button style={{cursor:"pointer"}} onClick={guestLoginHandler}>Enter as Guest</button>
          <Button onClick={props.signupHandler} className="btn">
            X
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginModal;

const Card = styled.div`
background: rgba(0,0,0, 0.9);
height:100%;
padding:2rem;
overflow:hidden;
`
const Button = styled.button`
border-radius:100%;
position:absolute;
bottom:1%;
left:47%;
font-size:1rem;
opacity:0.5;
cursor:pointer;

`