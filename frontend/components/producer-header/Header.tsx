import styles from "./Header.module.scss";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { useMedia } from 'react-use';
import { setMenuState, selectMenuState } from "../../store/popOutMenuSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
    
    const menuState = useSelector(selectMenuState);
    const dispatch = useDispatch();
    
    return (
        <header className={styles.wrapper}>
            <div className={styles.leftSide}>
                <MenuIcon onClick={()=> {
                    dispatch(setMenuState(!menuState))
                }}/>
            </div>
            <div className={styles.searchBar}>
                <TextField id="standard-basic" label="search" variant="standard" />
                <SearchIcon/>
            </div>  
        </header>
    )
}

export default Header;