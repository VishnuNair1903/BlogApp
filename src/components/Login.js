import React from 'react';
import {auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {

    let navigate=useNavigate();

    const signInGoogle=()=>{

        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        }).catch((error)=>{
            console.log("error during sign in with google");
        });

    }

  return (
    <div className='loginPage'>
        <p>Sign In with google</p>
        <button className='login-with-google-btn' onClick={signInGoogle}>Sign In</button>
    </div>
  )
}

export default Login
