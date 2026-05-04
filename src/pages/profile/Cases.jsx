import Status from "../../components/Status";
import styles from "./profile.module.css"
import { casesDataTemp } from "../../temp/casesDataTemp";

const CaseStatus = {
    accepted: {
        title: 'Принят',
        style: 'access'
    },
    processed: {
        title: 'В процессе',
        style: 'process'
    },
    rejected: {
        title: 'Отказ',
        style: 'reject'
    }
}

const Cases = () => {
    return(
        <div className={`${styles.profile__section} ${styles.profile__cases}`}>
            <div className={styles.profile__casesHeader}>
                <h3>Название</h3>
                <h3>Компания</h3>
                <h3>Дата</h3>
                <h3>Статус</h3>
                <h3>Сложность</h3>
                <h3>Баллы</h3>
            </div>
            {casesDataTemp.map( data => <CaseSection key={data.id} data={data} status={data.status} /> )}
        </div>
    )
}

const CaseSection = ({ data, status = CaseStatus.processed }) => {
    return(
        <div className={styles.profile__casesSection}>
            <p>{data.title}</p>
            <p>{data.company}</p>
            <p>{data.date}</p>
            <Status status={data.status} />
            <p>{data.difficulty}</p>
            <p>{data.score}</p>
        </div>
    )
}

export default Cases