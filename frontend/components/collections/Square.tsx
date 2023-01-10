import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from './Square.module.scss';

interface componentProps {
  name:string
}

const Square = ({name}:componentProps): JSX.Element => {
    return (
        <Box className={styles.boxWrapper}>
          <Paper elevation={3}>
            {name}
          </Paper>
        </Box>
      );
}
export default Square