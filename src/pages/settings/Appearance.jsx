import { useState } from 'react'
import styles from './settings.module.css'

const Appearance = () => {
    const [ theme, setTheme ] = useState(localStorage.getItem('theme'))

    return (
        <>
            <div className={styles.settings__section}>
                <h3>Тема</h3>
                <p className={styles.settings__sectionP}>Выберите цветовую схему приложения</p>
                <div className={styles.settings__sectionItem}>
                    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option value="light">Светлая</option>
                        <option value="dark">Темная</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Appearance