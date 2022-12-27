import styles from "./register.module.scss";
import { useState } from "react";
import { Input, InputLabel, FormControl, Button } from '@mui/material';
import axios from 'axios';

interface componentProps {
    renderForm: boolean
    setRenderForm: (renderForm: boolean) => void
}

function validateEmail(email: string) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(email)
  }

function validatePassword(password:string) {
    const passwordRegex = /^.{8,}$/
    return passwordRegex.test(password)
}

function validateMatchingPasswords(password: string, confirmPassword: string): boolean {
    return password === confirmPassword
}

async function handlePost (email:string, password:string) {
    try {
        
        let formData = {
            email: email,
            password: password
        }
        
        return await axios.post('http://localhost:3001/api/register', formData)      
        
    } 
      catch (error) {
        console.error("Error in handlePost", error)
      }
}

const Register = ({renderForm, setRenderForm}:componentProps): JSX.Element => {
    
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    
    let [emailError, setEmailError] = useState(false)
    let [passwordError, setPasswordError] = useState(false)
    let [confirmPasswordError, setConfirmPasswordError] = useState(false)
    let [duplicateEmail, setDuplicateEmail] = useState(false)

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       
        e.preventDefault()
        
        //If all criteria true, request can be made with form data
        if(validateEmail(email) && validatePassword(password) && validateMatchingPasswords(password, confirmPassword)) {
            
            let response = await handlePost(email, password)
            if(response?.data.message === 'email already exists'){
                setDuplicateEmail(true)
            }

            //rest of register process
            setRenderForm(!renderForm)
        }
      
        if(!validateEmail(email)) { // Checks if email is invalid
            setEmailError(true)
        }

        if(!validatePassword(password)) { // Checks if password is invalid
            setPasswordError(true)
        }

        if(!validateMatchingPasswords(password, confirmPassword)) { //Checks if Passwords are mathing
            setConfirmPasswordError(true)
        }
    }

    return (
        <> 
            <form className={styles.signup} onSubmit={handleSubmit}>
                
                <FormControl fullWidth={false}>
                    <InputLabel htmlFor="my-input">Email or Username</InputLabel>
                    <Input error={emailError} onChange={trackEmail} id="my-input" aria-describedby="my-helper-text" />
                    {emailError ? <p>Please use valid email</p> : null }
                    {duplicateEmail ? <p>An account using this email already exists</p> : null }
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