import styles from "./login.module.scss";
import { useState } from "react";
import { Input, InputLabel, FormControl, Button } from '@mui/material';
import axios from 'axios'

interface componentProps {
    renderForm: boolean;
    setRenderForm: (renderForm: boolean) => void;
}

const Login = ({renderForm, setRenderForm}:componentProps): JSX.Element => {
    
    let [user, setUser] = useState('');
    let [password, setPassword] = useState('');

    const changeSignInForm = () => {
        setRenderForm(!renderForm); 
    }

    const handlepassword = ( e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    
    const handleUser= ( e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handleSignIn = () => {
       axios.post('/http://localhost:3000/sing-in', {
        user: user,
        password: password
       })
    }

    return (
        <> 
            <form className={styles.login}>
                
                <FormControl fullWidth={false}>
                    <InputLabel htmlFor="my-input">Email or Username</InputLabel>
                    <Input onChange={handleUser} required={true} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input onChange={handlepassword} required={true} type="password" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            
                <Button onClick={handleSignIn}variant="contained">Log-in</Button>        
                <Button onClick={changeSignInForm} variant="contained">Create Account</Button>        
        
            </form>
        </>
    )
}

export default Login;