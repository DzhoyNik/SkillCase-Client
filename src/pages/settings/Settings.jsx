import Overlay from '../../components/Overlay'
import Footer from '../../components/Footer'
import wrapper from '../../css/profile.module.css'
import styles from './settings.module.css'
import { NavLink, useSearchParams } from 'react-router'
import Account from './Account'
import { SETTINGS_ROUTE } from '../../utils/consts'
import { observer } from 'mobx-react-lite'
import Appearance from './Appearance'
import Security from './Security'
import Notifications from './Notifications'

const Settings = observer(() => {
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get('page') || 'account'

    const pages = {
        account: Account,
        appearance: Appearance,
        security: Security,
        notifications: Notifications
    }

    const Component = pages[page] || Account

    return(
        <>
            <Overlay />
            <div className={wrapper.wrapper}>
                <div className={wrapper.wrapper__content}>
                    <div className={styles.settings}>
                        <div className={styles.settings__nav}>
                            <NavLink to={`${SETTINGS_ROUTE}?page=account`} className={page === 'account' && styles.active}>Аккаунт</NavLink>
                            <NavLink to={`${SETTINGS_ROUTE}?page=appearance`} className={page === 'appearance' && styles.active}>Оформление</NavLink>
                            <NavLink to={`${SETTINGS_ROUTE}?page=security`} className={page === 'security' && styles.active}>Безопасность</NavLink>
                            <NavLink to={`${SETTINGS_ROUTE}?page=notifications`} className={page === 'notifications' && styles.active}>Уведомления</NavLink>
                        </div>
                        <div className={styles.settings__content}>
                            <Component />
                        </div>
                        {page === 'account' && <div className={styles.settings__action}>
                            <button type="button">Сохранить</button>
                        </div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Settings