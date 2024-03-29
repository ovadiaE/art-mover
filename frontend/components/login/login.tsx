import styles from "./login.module.scss";
import { useState } from "react";
import { Input, InputLabel, FormControl, Button } from '@mui/material';
import axios from 'axios';
import {useRouter} from 'next/router';


interface componentProps {
    renderForm: boolean;
    setRenderForm: (renderForm: boolean) => void;
}

const Login = ({renderForm, setRenderForm}:componentProps): JSX.Element => {
    
    const router = useRouter();
    
    let [user, setUser] = useState('')
    let [password, setPassword] = useState('')

    let [userError, setUserError] = useState(false)
    
    const changeSignInForm = () => {
        setRenderForm(!renderForm)
    }

    const handlepassword = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    const handleUser= ( e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        try {
            let response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                credentials: 'include',
                headers : { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: user,
                    password: password
                })
            }); 
            
            if(response.ok) {
                
                //Todo make this a protected route
                router.replace('http://localhost:3000/producer/producer-panel')
            }
            else {
                throw new Error('An error occurred');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <> 
            <form className={styles.login} onSubmit={handleSignIn}>
                <FormControl fullWidth={false}>
                    <InputLabel htmlFor="my-input">Email or Username</InputLabel>
                    <Input onChange={handleUser} required={true} id="my-input" aria-describedby="my-helper-text" />
                    { userError ? <p>User does not exist</p> : null }
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input onChange={handlepassword} required={true} type="password" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            
                <Button type='submit' variant="contained">Log-in</Button>        
                <Button onClick={changeSignInForm} variant="contained">Create Account</Button>        
        
            </form>
        </>
    )
}

export default Login;