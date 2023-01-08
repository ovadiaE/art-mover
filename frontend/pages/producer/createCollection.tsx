import styles from './createCollection.module.scss';
import Collections from '../../components/create-collections/CollectionForm';
import { useState } from "react";
import { Input, InputLabel, FormControl, Button } from '@mui/material';
import axios from 'axios';

const create = () => {
    return (
    <div className={styles.wrapper}>
        <Collections/>
    </div>

    )
}

export default create