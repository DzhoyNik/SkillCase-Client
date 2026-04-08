import { useContext, useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router"
import { CASES_ROUTE, COMPANY_ROUTE, NOTIFY_ROUTE, PORTFOLIO_ROUTE, PROFILE_ROUTE } from "../utils/consts"
import { IoBarChart, IoDocumentSharp, IoFileTrayStacked, IoLogOut, IoNotificationsSharp, IoPerson, IoSettings } from "react-icons/io5"
import styles from '../css/sidebar.module.css'
import { findApplication } from "../api/companyAPI"
import { Context } from "../"

const Sidebar = () => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation().pathname

    const [ hasApplication, setHasApplication ] = useState(false)

    useEffect(() => {
        findApplication(user.user.id).then(data => setHasApplication(data))
    }, [])

    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar__section}>
                <button type="button" onClick={() => navigate(CASES_ROUTE)}>Решать кейсы</button>
                {hasApplication ? (
                    <div className={styles.sidebar__sectionItem}>
                        <h4>Показать заявку</h4>
                    </div>
                ) : (
                    <NavLink to={`${COMPANY_ROUTE}?page=application`}>
                        <div className={styles.sidebar__sectionItem}>
                            <IoDocumentSharp />
                            Подать заявку работодателя
                        </div>
                    </NavLink>
                )}
            </div>
            <div className={`${styles.sidebar__section}`}>
                <NavLink to={PROFILE_ROUTE} className={location === PROFILE_ROUTE && styles.sidebar__sectionActive}>
                    <div className={styles.sidebar__sectionItem}>
                        <IoPerson />
                        Профиль
                    </div>
                </NavLink>
                <NavLink to={NOTIFY_ROUTE} className={location === NOTIFY_ROUTE && styles.sidebar__sectionActive}>
                    <div className={styles.sidebar__sectionItem}>
                        <IoNotificationsSharp />
                        Уведомления
                    </div>
                </NavLink>
                <NavLink to={PORTFOLIO_ROUTE} className={location === PORTFOLIO_ROUTE && styles.sidebar__sectionActive}>
                    <div className={styles.sidebar__sectionItem}>
                        <IoFileTrayStacked />
                        Портфолио
                    </div>
                </NavLink>
                <NavLink to="">
                    <div className={styles.sidebar__sectionItem}>
                        <IoBarChart />
                        Навыки
                    </div>
                </NavLink>
            </div>
            <div className={styles.sidebar__section}>
                <NavLink to="">
                    <div className={styles.sidebar__sectionItem}>
                        <IoSettings />
                        Настройки
                    </div>
                </NavLink>
                <NavLink to="" style={{ color: "#ed3e3e" }}>
                    <div className={styles.sidebar__sectionItem}>
                        <IoLogOut style={{ color: "#ed3e3e" }} />
                        Выйти
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar