import React, { useContext, useEffect, useState } from "react";
import { IoChevronBack, IoNotifications, IoPerson } from "react-icons/io5"
import styles from "../css/overlay.module.css"
import { NavLink, useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { CASES_ROUTE } from "../utils/consts";

const Overlay = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const [ profileNotifyOpen, setProfileNotifyOpen ] = useState(false)
    const [ profileMenuOpen, setProfileMenuOpen ] = useState(false)
    const [ theme, setTheme ] = useState( localStorage.getItem('theme') || 'light' )

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    const handleToggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light' )
    }

    const toggleProfileMenu = () => {
        if (profileNotifyOpen) setProfileNotifyOpen(false)
        setProfileMenuOpen(!profileMenuOpen)
    }

    const toggleProfileNotify = () => {
        if (profileMenuOpen) setProfileMenuOpen(false)
        setProfileNotifyOpen(!profileNotifyOpen)
    }

    const handleLogOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__content}>
                <NavLink to={CASES_ROUTE}>
                    <div className={styles.overlay__logo}>
                        <div className={styles.overlay__logoIcon}></div>
                        <h1>SkillCase</h1>
                    </div>
                </NavLink>
                <div className={styles.overlay__profile}>
                    <div className={styles.overlay__notify} onClick={toggleProfileNotify}>
                        <IoNotifications />
                    </div>
                    <div className={styles.overlay__profileIcon} onClick={toggleProfileMenu}>
                        <IoPerson />
                        <IoChevronBack />
                    </div>
                    <div className={`${styles.overlay__profileMenu} ${profileMenuOpen ? styles.overlay__profileMenuOpen : ''}`}>
                        <div className={styles.overlay__profileMenuItem} onClick={() => navigate('/profile')}>
                            <h4>Профиль</h4>
                        </div>
                        <hr />
                        <div className={styles.overlay__profileMenuItem}><h4>Настройки</h4></div>
                        <div className={styles.overlay__profileMenuItem} onClick={handleToggleTheme}><h4>Сменить тему</h4></div>
                        <hr />
                        <div className={styles.overlay__profileMenuItem} onClick={handleLogOut}>
                            <h4>Выйти</h4>
                        </div>
                    </div>
                    <div className={`${styles.overlay__profileNotify} ${profileNotifyOpen ? styles.overlay__profileNotifyOpen : ''}`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Overlay