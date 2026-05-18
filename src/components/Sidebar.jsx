import { useContext, useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate, useSearchParams } from "react-router"
import { ADMIN_ROUTE, CASES_ROUTE, COMPANY_ROUTE, NOTIFY_ROUTE, PORTFOLIO_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE } from "../utils/consts"
import { IoBarChart, IoBriefcaseSharp, IoDocumentSharp, IoFileTrayStacked, IoLogOut, IoNotificationsSharp, IoPerson, IoSettings } from "react-icons/io5"
import styles from '../css/sidebar.module.css'
import { findApplication } from "../api/companyAPI"
import { Context } from "../"
import { TiDocumentText } from "react-icons/ti"
import { observer } from "mobx-react-lite"
import { FaMessage } from "react-icons/fa6"
import { HiOfficeBuilding } from "react-icons/hi"
import { MdSpaceDashboard } from "react-icons/md"

const Sidebar = observer(() => {
    const { user, company } = useContext(Context)
    const userRole = user.user.role
    const navigate = useNavigate()
    const location = useLocation().pathname
    const [ searchParams ] = useSearchParams()

    const [ hasApplication, setHasApplication ] = useState(false)

    useEffect(() => {
        findApplication(user.user.id).then(data => setHasApplication(data))
    }, [])

    const handleLogOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        company.setCompany({})
        localStorage.removeItem('token')
    }

    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar__section}>
                <button type="button" onClick={() => navigate(CASES_ROUTE)}>Решать кейсы</button>
                {userRole === 1 ? <Application hasApplication={hasApplication} /> : '' }
                {userRole === 4 && (
                    <NavLink to={ADMIN_ROUTE}>
                        <div className={styles.sidebar__sectionItem}>
                            <MdSpaceDashboard />
                            Панель администратора
                        </div>
                    </NavLink>
                )}
            </div>
            {userRole !== 1 && (
                <div className={`${styles.sidebar__section}`}>
                    <Company searchParams={searchParams} />
                </div>
            )}
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
                <Specialist location={location} />
            </div>
            <div className={styles.sidebar__section}>
                <NavLink to={SETTINGS_ROUTE} className={location === SETTINGS_ROUTE && styles.sidebar__sectionActive}>
                    <div className={styles.sidebar__sectionItem}>
                        <IoSettings />
                        Настройки
                    </div>
                </NavLink>
                <NavLink onClick={handleLogOut}>
                    <div className={styles.sidebar__sectionItem} style={{ color: "#ed3e3e" }}>
                        <IoLogOut style={{ color: "#ed3e3e" }} />
                        Выйти
                    </div>
                </NavLink>
            </div>
        </div>
    )
})

const Application = ( hasApplication ) => {
    return(
        <>
            {hasApplication ? (
                <NavLink to={`${COMPANY_ROUTE}?page=application`}>
                    <div className={styles.sidebar__sectionItem}>
                        <IoDocumentSharp />
                        Стать работодателем
                    </div>
                </NavLink>
            ) : (
                <NavLink to={`${COMPANY_ROUTE}?page=application`}>
                    <div className={styles.sidebar__sectionItem}>
                        <TiDocumentText />
                        Показать заявку
                    </div>
                </NavLink>
            )}
        </>
    )
}

const Company = ({ searchParams }) => {
    return(
        <>
            <NavLink to={`${COMPANY_ROUTE}?page=info`} className={searchParams.get('page') === `info` && styles.sidebar__sectionActive}>
                <div className={styles.sidebar__sectionItem}>
                    <HiOfficeBuilding />
                    Компания
                </div>
            </NavLink>
            {/* <NavLink to={`${COMPANY_ROUTE}?page=messages`} className={searchParams.get('page') === `messages` && styles.sidebar__sectionActive}>
                <div className={styles.sidebar__sectionItem}>
                    <FaMessage />
                    Сообщения
                </div>
            </NavLink> */}
            <NavLink to={`${COMPANY_ROUTE}?page=cases`} className={searchParams.get('page') === `cases` && styles.sidebar__sectionActive}>
                <div className={styles.sidebar__sectionItem}>
                    <IoBriefcaseSharp />
                    Кейсы
                </div>
            </NavLink>
        </>
    )
}

const Specialist = ({ location }) => {
    return(
        <>
            <NavLink to={PORTFOLIO_ROUTE} className={location === PORTFOLIO_ROUTE && styles.sidebar__sectionActive}>
                <div className={styles.sidebar__sectionItem}>
                    <IoFileTrayStacked />
                    Портфолио
                </div>
            </NavLink>
            {/* <NavLink to="">
                <div className={styles.sidebar__sectionItem}>
                    <IoBarChart />
                    Навыки
                </div>
            </NavLink> */}
        </>
    )
}

export default Sidebar