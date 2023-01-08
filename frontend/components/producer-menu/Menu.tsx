import styles from "./Menu.module.scss";
import { selectMenuState } from "../../store/popOutMenuSlice";
import { useSelector } from "react-redux";
import {useRouter} from 'next/router';

const Menu = () => {
    
    const menuState = useSelector(selectMenuState);//redux state for menu rendering
    
    const navigateToCreate = () => {
        router.push('http://localhost:3000/producer/createCollection')
    }
    
    const router = useRouter();

    return (
          menuState ? <div className={styles.wrapper}>
           <ul className={styles.list}>
                <li onClick={navigateToCreate}>Create Collection</li>
                <li>Report</li>
                <li>settings</li>
                <li>Logout</li>
           </ul>
        </div> : null
    )
}

export default Menu