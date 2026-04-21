import { useState } from "react"

const Sort = ({ styles }) => {
    const [ active, setActive ] = useState('all')

    return(
        <div className={styles.portfolio__sort}>
            <div className={`${styles.portfolio__sortSection} ${ active === 'all' && styles.portfolio__sortSectionActive }`} onClick={() => setActive('all')}>
                <h4>Все</h4>
            </div>
            <div className={`${styles.portfolio__sortSection} ${ active === 'access' && styles.portfolio__sortSectionActive }`} onClick={() => setActive('access')}>
                <h4>Принятые</h4>
            </div>
            <div className={`${styles.portfolio__sortSection} ${ active === 'process' && styles.portfolio__sortSectionActive }`}  onClick={() => setActive('process')}>
                <h4>В процессе</h4>
            </div>
            <div className={`${styles.portfolio__sortSection} ${ active === 'reject' && styles.portfolio__sortSectionActive }`} onClick={() => setActive('reject')}>
                <h4>Отклоненные</h4>
            </div>
        </div>
    )
}

export default Sort