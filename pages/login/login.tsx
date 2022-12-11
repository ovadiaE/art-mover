import styles from "./login.module.scss"

import { Input, InputLabel, FormControl, FormHelperText } from '@mui/material';


export default function Login () {
    return (
        <> 
        <form className={styles.login}>
            <FormControl fullWidth={false}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </form>
    </>
)
}