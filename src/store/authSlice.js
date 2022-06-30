import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState ={isLoggedIn:false, authKey:""}

const authSlice = createSlice({
 name:"authSlice",
 initialState:initialAuthState,
 reducers:{
  setLogin(state, action){
   state.authKey=action.payload.authKey;
   if(state.authKey) state.isLoggedIn= true;
   localStorage.setItem("authKey", action.payload.authKey)
  },
  setLogout(state){
   state.authKey="";
   state.isLoggedIn= false;
   localStorage.removeItem("authKey");
   }
 }
})
export const authActions = authSlice.actions;


export const loginOnReload=()=>{
 return dispatch=>{
 const authKey= localStorage.getItem("authKey");
  if(authKey){
   dispatch(authActions.setLogin({authKey}));
  }
 }
}

export const loginRequest=(email, password, userWantsSignin)=>{
return async dispatch=>{

     const KEY = "AIzaSyDR3Vv47ivpV4hJijVJvOEldoLqOe0-_bk";
     const url = userWantsSignin
       ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`
       : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`;
  try{
   const resp = await fetch(url, {
     method: "POST",
     body: JSON.stringify({
       email,
       password,
       returnSecureToken: true,
     }),
     headers: {
      "content-type":"application/json"}
   });
   const data = await resp.json();
   if (data.error) throw new Error(data.error.message);
   console.log(data.idToken);
   dispatch(authActions.setLogin({authKey:data.idToken}));
  } catch(e){
   alert(e.message);
  }
}
}



export default authSlice;