import Login from '../../components/login/login';
import Register from '../../components/register/Register';
import styles from './sign-in.module.scss';
import { useState } from "react";

/**
 * This is a wrapper for the login/sign up
 * @returns a wrapper for 2 components in auth flow
 */

export default function Wrapper() {
    let [renderForm, setRenderForm] = useState(true);
   
    return (
        <div className={styles.wrapper}>
            { renderForm ? 
                <Login renderForm={renderForm} setRenderForm={setRenderForm}/> 
                : 
                <Register renderForm={renderForm} setRenderForm={setRenderForm}/>
            }
        </div>
    )
}
