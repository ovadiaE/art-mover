import styles from './createCollection.module.scss';
import Collections from '../../components/collections/CollectionForm';

const create = () => {
    return (
    <div className={styles.wrapper}>
        <Collections/>
    </div>

    )
}

export default create