import styles from "./profile.module.css"

const Statistics = () => {
    return(
        <div className={`${styles.profile__mainSection} ${styles.profile__statistics}`}>
            <div className={styles.profile__statisticsSection}>
                <h2>Всего</h2>
                <h1>135</h1>
            </div>
            <div className={styles.profile__statisticsSection}>
                <h2>Принято</h2>
                <h1>8</h1>
            </div>
            <div className={styles.profile__statisticsSection}>
                <h2>Успешно</h2>
                <h1>5</h1>
            </div>
            <div className={styles.profile__statisticsSection}>
                <h2>Отказано</h2>
                <h1>15</h1>
            </div>
        </div>
    )
}

export default Statistics