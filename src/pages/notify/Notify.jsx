import Overlay from "../../components/Overlay"
import wrapper from "../../css/profile.module.css"
import styles from './notify.module.css'
import NotifySection from "./NotifySection"
import { tempNotifications } from '../../temp/tempNotifications'

const Notify = () => {
    return(
        <>
            <Overlay />
            <div className={wrapper.wrapper}>
                <div className={wrapper.wrapper__content}>
                    <div className={styles.notify}>
                        <div className={styles.notify__header}>
                            <h2>Уведомления</h2>
                            <div className={styles.notify__headerActions}>
                                <button type="button">Отметить все</button>
                                <button type="button">Непрочитанные</button>
                            </div>
                        </div>
                        <div className={styles.notify__list}>
                            {
                                tempNotifications.map(data =>
                                    <NotifySection
                                        key={ data.id }
                                        type={ data.type }
                                        title={ data.title }
                                        description={ data.description }
                                        date={ data.date }
                                    />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notify