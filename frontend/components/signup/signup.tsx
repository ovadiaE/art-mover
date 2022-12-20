import styles from "./signup.module.scss";
import { Input, InputLabel, FormControl, Button } from '@mui/material';

interface componentProps {
    renderForm: boolean;
    setRenderForm: (renderForm: boolean) => void;
}

const SignUp = ({renderForm, setRenderForm}:componentProps): JSX.Element => {
    
    const changeSignInForm = () => {
        setRenderForm(!renderForm); 
    }

    return (
        <> 
            <form className={styles.signup}>
                
                <FormControl fullWidth={false}>
                    <InputLabel htmlFor="my-input">Email or Username</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                    <Input type="password" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                
                <Button variant="contained">Sign up</Button>        
                <Button onClick={()=>{changeSignInForm()}} variant="contained">Already Have An Account?</Button>        
        
            </form>
        </>
    )
}

export default SignUp;