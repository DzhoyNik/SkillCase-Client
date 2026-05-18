import { NavLink } from 'react-router'
import styles from './settings.module.css'

const Security = () => {
    return (
        <>
            <div className={styles.settings__section}>
                <h3>Пароль</h3>
                <p className={styles.settings__sectionP}>Изменить пароль от аккаунта</p>
                <div className={styles.settings__sectionItem}>
                    <button type="button">Сменить пароль</button>
                </div>
            </div>
        </>
    )
}

export default Security