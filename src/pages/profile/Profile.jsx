import { NavLink, useNavigate } from "react-router"
import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import styles from "./profile.module.css"
import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Context } from "../.."
import { CASES_ROUTE, COMPANY_ROUTE } from "../../utils/consts"
import { findApplication } from "../../api/companyAPI"

const Profile = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [ hasApplication, setHasApplication ] = useState(false)

    useEffect(() => {
        findApplication(user.user.id).then(data => setHasApplication(data))
    }, [])

    return(
        <>
            <Overlay />
            <div className={styles.profile}>
                <div className={styles.profile__content}>
                    <div className={styles.profile__sidebar}>
                        <div className={styles.profile__sidebarSection}>
                            <button type="button" onClick={() => navigate(CASES_ROUTE)}>Решать кейсы</button>
                            {hasApplication ? (
                                <div className={styles.profile__sidebarSectionItem}>
                                    <h4>Заявка уже подана</h4>
                                </div>
                            ) : (
                                <NavLink to={`${COMPANY_ROUTE}?page=application`}>
                                    <div className={styles.profile__sidebarSectionItem}>
                                        Подать заявку работодателя
                                    </div>
                                </NavLink>
                            )}
                        </div>
                        <div className={`${styles.profile__sidebarSection}`}>
                            <NavLink to="" className={styles.profile__sidebarSectionActive}>
                                <div className={styles.profile__sidebarSectionItem}>
                                    Профиль
                                </div>
                            </NavLink>
                            <NavLink to="">
                                <div className={styles.profile__sidebarSectionItem}>
                                    Уведомления
                                </div>
                            </NavLink>
                            {/* <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Мои кейсы</NavLink>
                            </div> */}
                        </div>
                        <div className={styles.profile__sidebarSection}>
                            <NavLink to="">
                                <div className={styles.profile__sidebarSectionItem}>
                                    Портфолио
                                </div>
                            </NavLink>
                            <NavLink to="">
                                <div className={styles.profile__sidebarSectionItem}>
                                    Навыки
                                </div>
                            </NavLink>
                        </div>
                        <div className={styles.profile__sidebarSection}>
                            <NavLink to="">
                                <div className={styles.profile__sidebarSectionItem}>
                                    Настройки
                                </div>
                            </NavLink>
                            <NavLink to="">
                                <div className={styles.profile__sidebarSectionItem}>
                                    Выйти
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.profile__main}>
                        <div className={styles.profile__mainSection}>
                            <h2>{user.user.lastName} {user.user.firstName}</h2>
                        </div>
                        <div className={styles.profile__mainSection}></div>
                        <div className={styles.profile__mainSection}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Profile