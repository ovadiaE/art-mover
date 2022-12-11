import styles from "./login.module.scss"

import { Input, InputLabel, FormControl, Button } from '@mui/material';


export default function Login () {
    return (
        <> 
        <form className={styles.login}>
            
            <FormControl fullWidth={false}>
                <InputLabel htmlFor="my-input">Email or Username</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input type="password" id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
           
            <Button variant="text">Log-in</Button>        
            <Button variant="text">Sign-up</Button>        

        
        </form>
    </>
)
}