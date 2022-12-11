import Login from "../login/login"

/**
 * This is a wrapper for the login/create account components
 * @returns a wrapper for which the css elements of smaller components will be relative to
 */
export default function Wrapper() {
    return (
        <Login/>
    )
}

//The general idea is to do conditional rendering on a button 
//If Sign up is clicked, display sign-up
//else by default display login