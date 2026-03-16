import { NavLink } from "react-router"
import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import styles from "./profile.module.css"

const Profile = () => {
    return(
        <>
            <Overlay />
            <div className={styles.profile}>
                <div className={styles.profile__content}>
                    <div className={styles.profile__sidebar}>
                        <div className={styles.profile__sidebarSection}>
                            <button type="button">Решать кейсы</button>
                        </div>
                        <div className={styles.profile__sidebarSection} style={{ padding: "1rem" }}>
                            <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Профиль</NavLink>
                            </div>
                            <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Уведомления</NavLink>
                            </div>
                            {/* <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Мои кейсы</NavLink>
                            </div> */}
                        </div>
                        <div className={styles.profile__sidebarSection} style={{ padding: "1rem" }}>
                            <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Портфолио</NavLink>
                            </div>
                            <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Навыки</NavLink>
                            </div>
                        </div>
                        <div className={styles.profile__sidebarSection} style={{ padding: "1rem" }}>
                            <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Настройки</NavLink>
                            </div>
                            <div className={styles.profile__sidebarSectionItem}>
                                <NavLink to="">Выйти</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.profile__main}>
                        <div className={styles.profile__mainSection}></div>
                        <div className={styles.profile__mainSection}></div>
                        <div className={styles.profile__mainSection}></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile