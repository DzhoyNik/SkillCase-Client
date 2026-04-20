import { useEffect, useState } from "react"
import { getAllApplications } from "../../api/companyAPI"
import styles from "./admin.module.css"
import { useNavigate } from "react-router"
import { ADMIN_ROUTE } from "../../utils/consts"
import { applicationsMock } from "../../temp/tempApplications"
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

const Applications = () => {
    const [ applications, setApplications ] = useState([])
    const [ selectedApplication, setSelectedApplication ] = useState(null)
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        setApplications(applicationsMock)
        // getAllApplications().then(data => setApplications(data))
    }, [])

    console.log(selectedApplication)

    const statuses = {
        1: {
            name: 'Отправлена',
            color: 'var(--color-process)',
            background: 'var(--background-process)'
        },
        2: {
            name: 'Одобрена',
            color: 'var(--color-accept)',
            background: 'var(--background-accept)'
        },
        3: {
            name: 'Отклонена',
            color: 'var(--color-reject)',
            background: 'var(--background-reject)'
        }
    }

    return(
        <>
            <div className={styles.applications}>
                <div className={styles.applications__header}>
                    <h2>Заявки на создании компании</h2>
                    <p>Просмотр и модерация заявок от пользователей на регистрацию компании в системе</p>
                </div>
                <div className={styles.applications__toolBar}>
                    <input type="text" />
                </div>
                <div className={styles.applications__content} style={{
                        gap: isOpen ? '1rem' : '',
                        gridTemplateColumns: isOpen ? '5fr 3fr' : '5fr 0fr'
                }}>
                    <div className={styles.applications__list}>
                        <div className={styles.applications__section} style={{
                            gridTemplateColumns: !isOpen ? '0.2fr 1fr 1fr 1fr 1fr 1fr 1fr' : '0.2fr 1fr 1fr 1fr 1fr'
                        }}>
                            <p>ID</p>
                            <p>Компания</p>
                            <p>Отправитель</p>
                            { !isOpen && <p>Почта</p> }
                            { !isOpen && <p>Дата подачи</p> }
                            <p>Статус</p>
                            <p>Действия</p>
                        </div>
                        {applications?.map(data => (
                            <ListItem
                                key={data.id}
                                data={data}
                                status={statuses[data.statusId]}
                                isOpen={isOpen}
                                onClick={() => setIsOpen(!isOpen)}
                                selectedApplication={selectedApplication}
                                setSelectedApplication={setSelectedApplication}
                                style={{
                                    grid: !isOpen ? '0.2fr 1fr 1fr 1fr 1fr 1fr 1fr' : '0.2fr 1fr 1fr 1fr 1fr'
                                }}
                            />
                        ))}
                    </div>
                { isOpen && <Application data={applications[selectedApplication - 1]} /> }
                </div>
            </div>
        </>
    )
}

const ListItem = ({ data, status, isOpen, onClick, selectedApplication, setSelectedApplication, style }) => {
    const active = data.id === selectedApplication

    const getDate = ( date ) => {
        return new Date(date).toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const handleView = () => {
        onClick()
        if (!selectedApplication) {
            setSelectedApplication(data.id)
        } else {
            setSelectedApplication(null)
        }
    }

    return(
        <div className={`${styles.applications__section} ${active && styles.active}`} onClick={handleView} style={{ gridTemplateColumns: style.grid }}>
            <p>{data.id}</p>
            <p>{data.company.name}</p>
            <p>{data.contact.fullName}</p>
            { !isOpen && <p className={styles.applications__sectionEmail}>{data.contact.email}</p> }
            { !isOpen && <p>{getDate(data.createdAt)}</p> }
            <p className={styles.applications__sectionStatus} style={{
                color: status.color,
                background: status.background
            }}>{status.name}</p>
            <div className={styles.applications__sectionActions}>
                <button type="button">{active ? <FaEye /> : <FaEyeSlash />}</button>
                <button type="button"><FaCheck /></button>
                <button type="button"><IoClose /></button>
            </div>
        </div>
    )
}

const Application = ({ data }) => {
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
        <div className={styles.application}>
            <h3>Заявление №{data.id}</h3>
            <div className={styles.application__status}></div>
            <p>Дата подачи: {getDate(data.createdAt)}</p>
            <div className={styles.application__info}>
                <div className={styles.application__infoSection}>
                    <h4>Информация о компании</h4>
                    <div className={styles.application__infoCompany}>
                        <div className={styles.application__infoCompanySection}>
                            <h4>Название</h4>
                            <p>{data.company.name}</p>
                        </div>
                        <div className={styles.application__infoCompanySection}>
                            <h4>ИНН</h4>
                            <p>{data.company.inn}</p>
                        </div>
                        <div className={styles.application__infoCompanySection}>
                            <h4>ОГРН</h4>
                            <p>{data.company.ogrn}</p>
                        </div>
                        <div className={styles.application__infoCompanySection}>
                            <h4>Сфера</h4>
                            <p>{data.company.field}</p>
                        </div>
                        <div className={styles.application__infoCompanySection}>
                            <h4>Сайт</h4>
                            <p>{data.company.site}</p>
                        </div>
                    </div>
                    <div className={styles.application__infoCompanySection}>
                        <h4>Описание</h4>
                        <p>{data.company.description}</p>
                    </div>
                </div>
                <div className={styles.application__infoSection}>
                    <h4>Контактное лицо</h4>
                    <div className={styles.application__infoUserSection}>
                        <h4>Ф.И.О</h4>
                        <p>{data.contact.fullName}</p>
                    </div>
                    <div className={styles.application__infoUserSection}>
                        <h4>Должность</h4>
                        <p>{data.contact.position}</p>
                    </div>
                    <div className={styles.application__infoUserSection}>
                        <h4>Почта</h4>
                        <p>{data.contact.email}</p>
                    </div>
                </div>
                <div className={styles.application__infoSection}>
                    <h4>Решение администрации</h4>
                    <input type="text" placeholder="Комментарий (обязательно при отклонении)" />
                </div>
                <div className={styles.application__action}>
                    <button type="button">Одобрить</button>
                    <button type="button">Отклонить</button>
                </div>
            </div>
        </div>
    )
}

export default Applications