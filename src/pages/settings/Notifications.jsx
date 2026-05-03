import styles from './settings.module.css'

const Notifications = () => {
    return (
        <>
            <div className={styles.settings__section}>
                <h3>Уведомления</h3>
                <p className={styles.settings__sectionP}>Включение или выключение всех уведомлений</p>
                <div className={styles.settings__sectionItem}>
                    <input type="checkbox" />
                </div>
            </div>
            <div className={styles.settings__section}>
                <h3>Уведомления со звуком</h3>
                <p className={styles.settings__sectionP}>Воспроизводить звуки уведомлений</p>
                <div className={styles.settings__sectionItem}>
                    <input type="checkbox" />
                </div>
            </div>
        </>
    )
}

export default Notifications