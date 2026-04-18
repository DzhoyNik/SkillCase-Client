import { useEffect, useState } from "react"
import { changeRole, getAll } from "../../api/userAPI"
import styles from "./admin.module.css"
import { IoAdd, IoSearch } from "react-icons/io5"
import { FaSort, FaSortDown } from "react-icons/fa"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { IoMdMore } from "react-icons/io"

const Users = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getAll().then(data => setUsers(data.message))
    }, [])

    const roles = {
        1: {
            name: 'Начинающий специалист',
            color: '#222',
            background: 'rgba(0, 0, 0, 0.1)'
        },
        2: {
            name: 'Эксперт',
            color: '#3ce721',
            background: 'rgba(0, 255, 0, 0.2)'
        },
        3: {
            name: 'Руководитель',
            color: '#1e35ff',
            background: 'rgba(0, 0, 255, 0.2)'
        },
        4: {
            name: 'Администратор',
            color: '#ff1e1e',
            background: 'rgba(255, 0, 0, 0.2)'
        }
    }

    const getDate = ( date ) => {
        return new Date(date).toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return(
        <div className={styles.users}>
            <div className={styles.admin__topBar}>
                <div className={styles.admin__search}>
                    <IoSearch />
                    <input type="text" placeholder="Поиск по ФИО, почте или ID" />
                </div>
                <div className={styles.admin__roles}>
                    <div className={styles.admin__head}>
                        <p>Роль</p>
                        <h4>Все роли</h4>
                        <div className={styles.admin__icon}>
                            <FaSortDown />
                        </div>
                    </div>
                    <div className={styles.admin__body}></div>
                </div>
                <div className={styles.admin__sort}>
                    <div className={styles.admin__head}>
                        <p>Сортировка</p>
                        <h4>Сначала новые</h4>
                        <div className={styles.admin__icon}>
                            <FaSort />
                        </div>
                    </div>
                    <div className={styles.admin__body}></div>
                </div>
                <div className={styles.admin__btn}>
                    <button type="button">Добавить пользователя</button>
                </div>
            </div>
            <div className={styles.admin__list}>
                <div className={styles.admin__title}>
                    <input type="checkbox" />
                    <h4>ID</h4>
                    <h4>Ф.И.О</h4>
                    <h4>Почта</h4>
                    <h4>Роль</h4>
                    <h4>Дата регистрации</h4>
                    <h4>Последний вход</h4>
                    <h4>Действия</h4>
                </div>
                {users.map(data => (
                    <div key={data.id} className={styles.admin__section}>
                        <input type="checkbox" />
                        <p>{data.id}</p>
                        <p>{data.lastName} {data.firstName} {data.patronymic}</p>
                        <p className={styles.admin__sectionEmail} title={data.email}>{data.email}</p>
                        <p className={styles.admin__sectionRole} style={{
                            color: roles[data.userRoleId].color,
                            background: roles[data.userRoleId].background
                        }} >{roles[data.userRoleId].name}</p>
                        <p>{getDate(data.createdAt)}</p>
                        <p>{getDate(data.createdAt)}</p>
                        <div className={styles.admin__sectionButton}>
                            <button type="button">
                                <IoMdMore />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users