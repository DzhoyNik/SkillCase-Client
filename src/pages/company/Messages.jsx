import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import wrapper from '../../css/profile.module.css'
import styles from './company.module.css'

const Messages = () => {
    return(
        <div className={styles.messages}>
            <h2>Сообщения</h2>
            <div className={styles.messages__sort}>
                <div className={styles.messages__sortSection}>
                    <h4>Выбрать кейс</h4>
                </div>
                <div className={styles.messages__sortSection}>
                    <h4>Сортировать</h4>
                </div>
            </div>
            <div className={styles.messages__list}>
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    )
}

const Message = () => {
    return(
        <div className={styles.messages__section}>
            <div className={styles.messages__sectionUser}>
                <p>[ Фото ]</p>
                <p>[ ФИО ]</p>
            </div>
            <div className={styles.messages__sectionCase}>
                <p>[ Кейс ]</p>
            </div>
            <div className={styles.messages__sectionDate}>
                <p>[ Дата ]</p>
            </div>
        </div>
    )
}

export default Messages