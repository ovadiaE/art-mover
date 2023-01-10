import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import styles from './Collections.module.scss';
import Square from './Square';
/**
 * 
 * @returns all collections associated with a user, presented as the main section of producer panel
 */

 const getCollections = async (): Promise<void> => {
  try {
    let response = await fetch('http://localhost:3001/api/user/collecions', {
        method: 'GET',
        credentials: 'include',
        headers : { 'Content-Type': 'application/json'}
    }); 
    let data = await response.json()
    
    return data
  
  }
  catch(error) {
    console.log(error);
  }
}

const Collections = () => {
  
  const [collections, setCollections] = useState([]);
  const [hasRendered, setHasRendered] = useState(false)

  const trigger = async () => {
    let data:any = await getCollections();
    setCollections(data);
  }

  useEffect(()=> {
    trigger();
    setHasRendered(true);
  },[])
  
  return (
        <Grid sx={{ flexGrow: 1 }} className={styles.gridWrapper}>
          {collections.map((item:any) => { 
            return <Square name={item.name}/>
          })}
      </Grid>
    )
}

export default Collections;