import { useEffect, useState } from "react"
import { TbInfoCircle } from "react-icons/tb"

const Level = ({ data, styles }) => {
    const [ width, setWidth ] = useState(0)

    useEffect(() => {
        setWidth(data?.progress || 0)
    }, [])

    return(
        <div className={styles.profile__level}>
            <div className={styles.profile__info}>
                <TbInfoCircle />
            </div>
            <h3>Уровень</h3>
            <h1>{data?.level || 1}</h1>
            <div className={styles.profile__levelContent}>
                <div className={styles.profile__levelBar}>
                    <div className={styles.profile__levelProgress} style={{ width: `${width}%` }}></div>
                </div>
                <div className={styles.profile__levelInfo}>
                    <p>{data?.min || 0}</p>
                    <p>{data?.max || 0}</p>
                </div>
            </div>
        </div>
    )
}

export default Level