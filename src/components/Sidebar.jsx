import { useContext, useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router"
import { CASES_ROUTE, COMPANY_ROUTE, NOTIFY_ROUTE, PORTFOLIO_ROUTE, PROFILE_ROUTE } from "../utils/consts"
import { IoBarChart, IoDocumentSharp, IoFileTrayStacked, IoLogOut, IoNotificationsSharp, IoPerson, IoSettings } from "react-icons/io5"
import styles from '../pages/profile/profile.module.css'
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
        <div className={styles.profile__sidebar}>
            <div className={styles.profile__sidebarSection}>
                <button type="button" onClick={() => navigate(CASES_ROUTE)}>Решать кейсы</button>
                {hasApplication ? (
                    <div className={styles.profile__sidebarSectionItem}>
                        <h4>Просмотреть заявку</h4>
                    </div>
                ) : (
                    <NavLink to={`${COMPANY_ROUTE}?page=application`}>
                        <div className={styles.profile__sidebarSectionItem}>
                            <IoDocumentSharp />
                            Подать заявку работодателя
                        </div>
                    </NavLink>
                )}
            </div>
            <div className={`${styles.profile__sidebarSection}`}>
                <NavLink to={PROFILE_ROUTE} className={location === PROFILE_ROUTE && styles.profile__sidebarSectionActive}>
                    <div className={styles.profile__sidebarSectionItem}>
                        <IoPerson />
                        Профиль
                    </div>
                </NavLink>
                <NavLink to={NOTIFY_ROUTE} className={location === NOTIFY_ROUTE && styles.profile__sidebarSectionActive}>
                    <div className={styles.profile__sidebarSectionItem}>
                        <IoNotificationsSharp />
                        Уведомления
                    </div>
                </NavLink>
                {/* <div className={styles.profile__sidebarSectionItem}>
                    <NavLink to="">Мои кейсы</NavLink>
                </div> */}
            </div>
            <div className={styles.profile__sidebarSection}>
                <NavLink to={PORTFOLIO_ROUTE} className={location === PORTFOLIO_ROUTE && styles.profile__sidebarSectionActive}>
                    <div className={styles.profile__sidebarSectionItem}>
                        <IoFileTrayStacked />
                        Портфолио
                    </div>
                </NavLink>
                <NavLink to="">
                    <div className={styles.profile__sidebarSectionItem}>
                        <IoBarChart />
                        Навыки
                    </div>
                </NavLink>
            </div>
            <div className={styles.profile__sidebarSection}>
                <NavLink to="">
                    <div className={styles.profile__sidebarSectionItem}>
                        <IoSettings />
                        Настройки
                    </div>
                </NavLink>
                <NavLink to="" style={{ color: "#ed3e3e" }}>
                    <div className={styles.profile__sidebarSectionItem}>
                        <IoLogOut style={{ color: "#ed3e3e" }} />
                        Выйти
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar