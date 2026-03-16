import React from "react";
import { IoChevronBack, IoNotifications, IoPerson } from "react-icons/io5"
import styles from "../css/overlay.module.css"

const Overlay = () => {
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
                    <div className={styles.overlay__profileIcon}>
                        <IoPerson />
                        <IoChevronBack />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay