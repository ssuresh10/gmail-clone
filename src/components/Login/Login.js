import React from 'react'
import { Button } from "@material-ui/core";
import { useDispatch as UseDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from '@firebase/auth'
import "./Login.css";


function Login() {
    const dispatch = UseDispatch();

    const signIn = () =>{
        signInWithPopup(auth,provider).then(result =>{
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid
            }))
        }).catch((error)=>alert(error.message))
    }

  return (
    <div className='login'>
        <div className='login__container'>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
        </div>
    </div>
  )
}

export default Login