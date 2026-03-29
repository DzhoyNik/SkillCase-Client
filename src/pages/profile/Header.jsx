import { useContext } from "react"
import { Context } from "../.."
import styles from './profile.module.css'
import { NavLink } from "react-router"
import { FaMapMarkerAlt, FaTelegramPlane, FaUniversity } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io5"

const Header = () => {
    const { user } = useContext(Context)

    return(
        <div className={`${styles.profile__mainSection} ${styles.profile__header}`}>
            <div className={styles.profile__headerActions}>
                <button>Редактировать</button>
                <button>Скачать резюме</button>
            </div>
            <div className={styles.profile__image}>
                <div className={styles.profile__imageContent}></div>
            </div>
            <div className={styles.profile__info}>
                <h2>{user.user.lastName} {user.user.firstName}</h2>
                <p>Frontend | FullStack developer</p>
                <div className={styles.profile__about}>
                    <div className={styles.profile__aboutSection}>
                        <FaMapMarkerAlt />
                        <h4>Кемерово</h4>
                    </div>
                    <div className={styles.profile__aboutSection}>
                        <FaUniversity />
                        <h4>КемГУ | ПИ-241</h4>
                    </div>
                    <div className={styles.profile__aboutSection}>
                        <IoLogoGithub />
                        <h4>github.com/dzhoynik</h4>
                    </div>
                    <div className={styles.profile__aboutSection}>
                        <FaTelegramPlane />
                        <NavLink to='https://t.me/dzhoynik'>t.me/dzhoynik</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header