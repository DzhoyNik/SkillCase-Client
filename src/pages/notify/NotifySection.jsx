import { notifyType } from "./notifyType"
import styles from './notify.module.css'

const NotifySection = ({ type, title, description, date }) => {
    const config = notifyType[type]
    const Icon = config.icon

    return(
        <div className={styles.notify__section}>
            <div className={styles.notify__sectionType}>
                <div className={styles.notify__sectionTypeBackgroud} style={{ color: config.color, background: config.background }}>
                    <Icon />
                </div>   
            </div>
            <div className={styles.notify__sectionContent}>
                <h3 className={styles.notify__sectionContentTitle}>{title}</h3>
                <p className={styles.notify__sectionContentDesc}>{description}</p>
                <p className={styles.notify__sectionContentDate}>{date}</p>
            </div>
        </div>
    )
}

export default NotifySection