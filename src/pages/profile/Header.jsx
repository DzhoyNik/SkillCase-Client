import { useContext } from "react"
import { Context } from "../.."
import styles from './profile.module.css'
import { NavLink } from "react-router"
import { FaMapMarkerAlt, FaTelegramPlane, FaUniversity } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io5"

const Header = () => {
    const { user } = useContext(Context)

    console.log(user)

    return(
        <div className={`${styles.profile__mainSection} ${styles.profile__header}`}>
            <div className={`${styles.profile__headerSection} ${styles.profile__userCard}`}>
                <div className={styles.profile__image}>
                    <img src="http://localhost:5000/static/users/test.jpg" alt="Фото профиля" />
                </div>
                <h2 className={styles.profile__name}>{user.user.firstName} {user.user.lastName}</h2>
                <p className={styles.profile__login}>@dzhoynik</p>
            </div>
            <div className={`${styles.profile__headerSection}  ${styles.profile__stats}`}>
                <div className={styles.profile__level}>
                    <h3>Уровень</h3>
                    <h1>4</h1>
                    <div className={styles.profile__levelContent}>
                        <div className={styles.profile__levelBar}>
                            <div className={styles.profile__levelProgress}></div>
                        </div>
                        <div className={styles.profile__levelInfo}>
                            <p>1200</p>
                            <p>1800</p>
                        </div>
                    </div>
                </div>
                <div className={styles.profile__statsGrid}>
                    <div className={styles.profile__statCard}>
                        <h3>Всего баллов</h3>
                        <h2>1650</h2>
                    </div>
                    <div className={styles.profile__statCard}>
                        <h3>Успешных кейсов</h3>
                        <h2>12</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header