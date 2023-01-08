import styles from './producer-panel.module.scss';
import Header from '../../components/producer-header/Header';
import Menu from '../../components/producer-menu/Menu';
import Collections from '../../components/create-collections/CollectionForm';

const producerPanel = () => {
    return (
        <>
            <div className={styles.wrapper}>
                    <Header/>
                    <div className={styles.panelBody}>
                        <Menu/>
                        <div>COLLECTIONS WILL BE HERE</div>
                    </div>
            </div>
        </>
    )
}

export default producerPanel