import Overlay from "../../components/Overlay"
import Sidebar from "../../components/Sidebar"
import styles from "../../css/profile.module.css"
import notify from './notify.module.css'
import { notifyType } from "./notifyType"
import { tempNotifications } from "./tempData"

const Notify = () => {
    return(
        <>
            <Overlay />
            <div className={styles.wrapper}>
                <div className={styles.wrapper__content}>
                    <Sidebar />
                    <div className={notify.notify}>
                        <div className={notify.notify__header}>
                            <h2>Уведомления</h2>
                            <div className={notify.notify__headerActions}>
                                <button type="button">Отметить все</button>
                                <button type="button">Непрочитанные</button>
                            </div>
                        </div>
                        <div className={notify.notify__list}>
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

const NotifySection = ({ type, title, description, date }) => {
    const config = notifyType[type]
    const Icon = config.icon

    return(
        <div className={notify.notify__section}>
            <div className={notify.notify__sectionType}>
                <div className={notify.notify__sectionTypeBackgroud} style={{ color: config.color, background: config.background }}>
                    <Icon />
                </div>   
            </div>
            <div className={notify.notify__sectionContent}>
                <h3 className={notify.notify__sectionContentTitle}>{title}</h3>
                <p className={notify.notify__sectionContentDesc}>{description}</p>
                <p className={notify.notify__sectionContentDate}>{date}</p>
            </div>
        </div>
    )
}

export default Notify