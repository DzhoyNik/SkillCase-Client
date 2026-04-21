import styles from '../css/status.module.css'

const Status = ({ status }) => {
    const statusClass = {
        accept: styles.status__accepted,
        reject: styles.status__rejected
    }

    return(
        <>
            <div className={`
                ${styles.status}
                ${statusClass[status.style]}
                `}>
                <p>{status.title}</p>
            </div>
        </>
    )
}

export default Status