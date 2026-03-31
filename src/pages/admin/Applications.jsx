import { useEffect, useState } from "react"
import { getAllApplications } from "../../api/companyAPI"
import styles from "./admin.module.css"
import { useNavigate } from "react-router"
import { ADMIN_ROUTE } from "../../utils/consts"

const Applications = () => {
    const navigate = useNavigate()
    const [ applications, setApplications ] = useState({})

    useEffect(() => {
        getAllApplications().then(data => setApplications(data))
    }, [])

    return(
        <>
            <div className={styles.admin__contentSection}>
                <h3>id</h3>
                <h3>Админ</h3>
                <h3>Заявка</h3>
                <h3>Статус</h3>
            </div>
            { Array.isArray(applications.applications) && applications.applications.map( data => (
                <div className={styles.admin__contentSection} onClick={() => navigate(`${ADMIN_ROUTE}?page=application&q=${data.id}`)}>
                    <p>{data.id}</p>
                    <p>{data.userId}</p>
                    <p>{data.applicationId}</p>
                    <p>{data.applicationStatusId}</p>
                </div>
            ))}
        </>
    )
}

export default Applications