import Login from '../../components/login/login';
import SignUp from '../../components/signup/signup';
import styles from './sign-in.module.scss';
import { useState } from "react";

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