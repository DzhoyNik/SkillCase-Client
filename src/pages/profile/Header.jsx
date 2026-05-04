import { useContext, useEffect, useState } from "react"
import { Context } from "../.."
import styles from './profile.module.css'
import { NavLink } from "react-router"
import { FaMapMarkerAlt, FaTelegramPlane, FaUniversity } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io5"
import Level from "./Level"
import Stats from "./Stats"
import { getGrade, getProgressPercent, getXP } from "./config"
import { observer } from "mobx-react-lite"

const Header = observer(() => {
    const { user } = useContext(Context)
    
    const level = user.user.level
    const currentXP = user.user.xp
    const cases = 10
    const [ grade, setGrade ] = useState({})

    useEffect(() => {
        setGrade(getGrade( level, currentXP, cases ))
    }, [])

    return(
        <div className={`${styles.profile__mainSection} ${styles.profile__header}`}>
            <div className={`${styles.profile__headerSection} ${styles.profile__userCard}`}>
                <div className={styles.profile__image}>
                    <img src="http://localhost:5000/static/users/test.jpg" alt="Фото профиля" />
                </div>
                <h2 className={styles.profile__name}>{user.user.firstName} {user.user.lastName}</h2>
                <p className={styles.profile__login}>@{user.user.login}</p>
            </div>
            <div className={`${styles.profile__headerSection} ${styles.profile__stats}`}>
                <Level data={grade.level} styles={styles} />
                <Stats data={grade.stats} styles={styles} />
            </div>
        </div>
    )
})

export default Header