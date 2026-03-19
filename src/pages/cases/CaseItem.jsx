import styles from "./cases.module.css"

const CaseItem = () => {
    return(
        <div className={styles.case__item}>
            <div className={styles.case__difficulty}>
                <h4>Легко</h4>
                <div className={styles.case__difficultyProgressBar}>
                    <div className={styles.case__difficultyProgress} />
                </div>
                <h4>Сложно</h4>
            </div>
            <h3 className={styles.case__title}>Кейс от компании «Яндекс»</h3>
            <p className={styles.case__description}>Реши кейс от компании «Яндекс» и получи возможность пройти стажировку в одной из лучших IT-компаний России.</p>
            <div className={styles.case__tags}>
                <h4 className={styles.case__tag}>Frontend</h4>
                <h4 className={styles.case__tag}>Backend</h4>
                <h4 className={styles.case__tag}>Frontend</h4>
                <h4 className={styles.case__tag}>Backend</h4>
            </div>
            <div className={styles.case__author}>
                <div className={styles.case__authorIcon}></div>
                <p className={styles.case__authorText}>Author || Company</p>
            </div>
        </div>
    )
}

export default CaseItem