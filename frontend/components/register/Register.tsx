import styles from "./register.module.scss";
import { useState } from "react";
import { Input, InputLabel, FormControl, Button } from '@mui/material';

interface componentProps {
    renderForm: boolean;
    setRenderForm: (renderForm: boolean) => void;
}

function validateEmail(email: string) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

function validatePassword(password:string) {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
}

function validateMatchingPasswords(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
}

const Register = ({renderForm, setRenderForm}:componentProps): JSX.Element => {
    
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    
    let [emailError, setEmailError] = useState(false)
    let [passwordError, setPasswordError] = useState(false)
    let [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const changeSignInForm = () => {
        setRenderForm(!renderForm)
    }

    const trackEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const trackPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const trackConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       
        e.preventDefault()

        if(validateEmail(email) && validatePassword(password) && validateMatchingPasswords(password, confirmPassword)) {
            console.log('form data is valid')
        }
        else {
            console.log('form data is invalid')
        }

        if(!validateEmail(email)) {
            setEmailError(true)
        }

        if(!validatePassword(password)) {
            setPasswordError(true)
        }

        if(!validateMatchingPasswords(password, confirmPassword)) {
            setConfirmPasswordError(true);
        }
    }

    return (
        <> 
            <form className={styles.signup} onSubmit={handleSubmit}>
                
                <FormControl fullWidth={false}>
                    <InputLabel htmlFor="my-input">Email or Username</InputLabel>
                    <Input error={emailError} onChange={trackEmail} id="my-input" aria-describedby="my-helper-text" />
                    {emailError ? <p>Please use valid email</p> : null }
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input error={passwordError} onChange={trackPassword} 
                        type="password" id="my-input" 
                        aria-describedby="my-helper-text"/>
                    {passwordError ? <p>Password must contain at least 8 characters</p> : null }
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                    <Input error={confirmPasswordError} onChange={trackConfirmPassword} 
                        type="password" id="my-input" 
                        aria-describedby="my-helper-text"/>
                    {confirmPasswordError ? <p>Passwords must match</p> : null }
                </FormControl>
                
                <Button type="submit" variant="contained">Sign up</Button>        
                <Button onClick={()=>{changeSignInForm()}} variant="contained">Already Have An Account?</Button>        
        
            </form>
        </>
    )
}

export default Register