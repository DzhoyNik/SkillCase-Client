import { useNavigate } from "react-router"
import styles from "../pages/cases/cases.module.css"
import logo from '../assets/company.png'

const difficulty = {
    1: styles.easy,
    2: styles.middle,
    3: styles.hard
}

const Case = ({ data, tags, company, onClick = null }) => {
    return(
        <div className={styles.case__item} onClick={onClick}>
            <div className={styles.case__itemContent}>
                <div className={styles.case__difficulty}>
                    <h4>Легко</h4>
                    <div className={styles.case__difficultyProgressBar}>
                        <div className={`${styles.case__difficultyProgress} ${difficulty[data.caseDifficultyId]}`} />
                    </div>
                    <h4>Сложно</h4>
                </div>
                <h3 className={styles.case__title}>{data.title}</h3>
                <p className={styles.case__description}>{data.description}</p>
                <div className={styles.case__tags}>
                    {tags?.map( tag => (
                        <h4 key={tag.id} className={styles.case__tag}>{tag.tag}</h4>
                    ))}
                </div>
            </div>
            <div className={styles.case__author}>
                <div className={styles.case__authorIcon}>
                    <img src={logo} alt="Логотип" />
                </div>
                <p className={styles.case__authorText}>{company || 'Компания'}</p>
            </div>
        </div>
    )
}

export default Case