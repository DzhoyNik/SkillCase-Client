import styles from "./profile.module.css"

const Statistics = () => {
    return(
        <div className={`${styles.profile__mainSection} ${styles.profile__statistics}`}>
            <div className={styles.profile__statisticsSection}>
                <h2>Кейсы</h2>
            </div>
            <div className={styles.profile__statisticsSection}>
                <h2>Принято</h2>
            </div>
            <div className={styles.profile__statisticsSection}>
                <h2>Рейтинг</h2>
            </div>
            <div className={styles.profile__statisticsSection}>

            </div>
        </div>
    )
}

export default Statistics