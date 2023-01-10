import styles from './producer-panel.module.scss';
import Header from '../../components/header/Header';
import Menu from '../../components/sidebar/Menu';
import Collections from '../../components/collections/Collections';
const producerPanel = () => {
    return (
        <>
            <div className={styles.wrapper}>
                    <Header/>
                    <div className={styles.panelBody}>
                        <Menu/>
                        <Collections/>
                    </div>
            </div>
        </>
    )
}

export default producerPanel