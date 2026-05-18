const Stats = ({ data, styles }) => {
    return(
        <div className={styles.profile__statsGrid}>
            <div className={styles.profile__statCard}>
                <h3>Всего баллов</h3>
                <h2>{data?.scores || 0}</h2>
            </div>
            <div className={styles.profile__statCard}>
                <h3>Успешных кейсов</h3>
                <h2>{data?.cases || 0}</h2>
            </div>
        </div>
    )
}

export default Stats