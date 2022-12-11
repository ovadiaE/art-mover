import Login from "../login/login"
import styles from './login-wrapper.module.scss'

/**
 * This is a wrapper for the login/create account components
 * @returns a wrapper for which the css elements of 2 smaller components will be relative to
 */

export default function Wrapper() {
    return (
        <div className={styles.wrapper}>
            <Login renderState={true}/>
        </div>
    )
}

//The general idea is to do conditional rendering on a button 
//If Sign up is clicked, display sign-up
//else by default display login