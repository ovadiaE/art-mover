import React, { useState, useEffect} from "react";
import styles from './CollectionForm.module.scss';
import { Input, InputLabel, FormControl, Button } from '@mui/material';
import {useRouter} from 'next/router';


const Collections = () => {
    
    const [collection, setCollection] = useState('');
    const [collectionExists, setCollectionExists] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const router = useRouter();
    
    useEffect(()=>{
        if(success){
            setCollectionExists(false)
        }
    },[success])
   
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCollection(e.target.value);
    }
   
    const navigate = () => {
        router.push('http://localhost:3000/producer/producer-panel');
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
    
        try {
            let response = await fetch('http://localhost:3001/api/user/create', {
                method: 'POST',
                credentials: 'include',
                headers : { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: collection,
                    userId: ''
                })
            }); 

            let data = await response.json()
            switch(data.message) {
                case 'Token Timed out':
                    console.log('auth token timed out')
                    break;
                case 'collection name already exists':
                    setCollectionExists(true);
                    break;
                case 'created collection':
                    setSuccess(true);
            }
        }
        catch(error){
            console.log(error);
        }
    }
   
    return (
        <form onSubmit={handleSubmit} className={styles.collectionsForm} >
            <FormControl>
                <InputLabel htmlFor="my-input">Collection Name</InputLabel>
                <Input onChange={handleName} id="my-input" aria-describedby="my-helper-text" />
                { collectionExists ? <p>Collection Already Exists, please choose another name</p> : null}
                { success ? <p>Created collection</p> : null}
            </FormControl>
        
        <Button type="submit" variant="contained">Create Collection</Button> 
        <Button onClick={navigate} variant="contained">Back to Admin Panel</Button>       
    </form>
    )
}

export default Collections