import styles from '../css/status.module.css'

const Status = ({ status }) => {
    const statusClass = {
        access: styles.status__access,
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