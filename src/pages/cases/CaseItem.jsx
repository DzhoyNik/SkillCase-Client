import styles from "./cases.module.css"

const difficulty = {
    easy: styles.easy,
    middle: styles.middle,
    hard: styles.hard
}

const CaseItem = ({ data }) => {
    console.log(data);

    return(
        <div className={styles.case__item}>
            <div className={styles.case__itemContent}>
                <div className={styles.case__difficulty}>
                    <h4>Легко</h4>
                    <div className={styles.case__difficultyProgressBar}>
                        <div className={`${styles.case__difficultyProgress} ${difficulty[data.difficulty]}`} />
                    </div>
                    <h4>Сложно</h4>
                </div>
                <h3 className={styles.case__title}>{data.title}</h3>
                <p className={styles.case__description}>{data.description}</p>
                <div className={styles.case__tags}>
                    {data.tags.map( tag => (
                        <h4 key={tag} className={styles.case__tag}>{tag}</h4>
                    ))}
                </div>
            </div>
            <div className={styles.case__author}>
                <div className={styles.case__authorIcon}></div>
                <p className={styles.case__authorText}>{data.author}</p>
            </div>
        </div>
    )
}

export default CaseItem