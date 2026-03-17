import React, { useState } from "react";
import { IoChevronBack, IoNotifications, IoPerson } from "react-icons/io5"
import styles from "../css/overlay.module.css"
import { useNavigate } from "react-router";

const Overlay = () => {
    const navigate = useNavigate()
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__content}>
                <div className={styles.overlay__logo}>
                    <div className={styles.overlay__logoIcon}></div>
                    <h1>SkillCase</h1>
                </div>
                <div className={styles.overlay__profile}>
                    <div className={styles.overlay__notify}>
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
                        <div className={styles.overlay__profileMenuItem}><h4>Сменить тему</h4></div>
                        <hr />
                        <div className={styles.overlay__profileMenuItem} onClick={() => navigate('/')}>
                            <h4>Выйти</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay