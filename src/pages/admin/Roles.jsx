import { useEffect, useState } from "react"
import { getAllRoles } from "../../api/companyAPI"
import styles from "./admin.module.css"

const Roles = () => {
    const [ roles, setRoles ] = useState({})

    useEffect(() => {
        getAllRoles().then(data => setRoles(data.message.rows))
    }, [])

    return(
        <>
            <div className={styles.admin__contentSection}>
                <h3>id</h3>
                <h3>Роль</h3>
            </div>
            { Array.isArray(roles) && roles.map( data => (
                <div className={styles.admin__contentSection}>
                    <p>{data.id}</p>
                    <p>{data.role}</p>
                </div>
            ))}
        </>
    )
}

export default Roles