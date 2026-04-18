import { useEffect, useState } from "react"
import { changeRole, getAll } from "../../api/userAPI"
import styles from "./admin.module.css"

const Users = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getAll().then(data => setUsers(data.message))
    }, [])

    const roles = {
        1: 'Начинающий специалист',
        2: 'Эксперт',
        3: 'Руководитель',
        4: 'Администратор'
    }    

    const handleChangeRole = async ( userId ) => {
        try {
            const payload = {
                userId: userId,
                userRoleId: 4
            }

            await changeRole(payload).then(data => {
                console.log(data)
            })
        } catch (e) {
            console.log(e.message)
        }
    }

    return(
        <div>
            <div className={styles.admin__list}>
                <div className={styles.admin__title}>
                    <h3>id</h3>
                    <h3>Ф.И.О</h3>
                    <h3>Почта</h3>
                    <h3>Роль</h3>
                </div>
                {users.map(data => (
                    <div key={data.id} className={styles.admin__section}>
                        <p>{data.id}</p>
                        <p>{data.lastName} {data.firstName} {data.patronymic}</p>
                        <p>{data.email}</p>
                        <p>{roles[data.userRoleId]}</p>
                        <button type="button" onClick={() => handleChangeRole(data.id)}>Сделать администратором</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users