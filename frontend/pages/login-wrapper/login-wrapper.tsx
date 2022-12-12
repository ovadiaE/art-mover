import Login from "../login/login"
import styles from './login-wrapper.module.scss'
import { useState } from "react"
import SignUp from "../signup/signup"; 

/**
 * This is a wrapper for the login/sign up
 * @returns a wrapper for 2 omponents in auth flow
 */

export default function Wrapper() {
    let [renderForm, setRenderForm] = useState(true);
   
    return (
        <div className={styles.wrapper}>
            { renderForm ? 
                <Login renderForm={renderForm} setRenderForm={setRenderForm}/> 
                : 
                <SignUp renderForm={renderForm} setRenderForm={setRenderForm}/>
            }
        </div>
    )
}

//The general idea is to do conditional rendering on a button 
//If Sign up is clicked, display sign-up
//else by default display login