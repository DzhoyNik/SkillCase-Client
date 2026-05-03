import styles from "./auth.module.css"
import { SignIn, SignUp, Choice, CompanyApplication } from "./index"
import { NavLink, useSearchParams } from "react-router"


const Auth = () => {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page')

    const typeAuth = {
        'signIn': SignIn,
        'signUp': SignUp,
        'choice': Choice,
        'application': CompanyApplication
    }

    const DEFAULT_PAGE = 'signIn'

    const Component = typeAuth[page] || typeAuth[DEFAULT_PAGE]

    return(
        <div className={styles.auth}>
            <div className={styles.logo}>
                <div className={styles.logo__icon}></div>
                <h1>SkillCase</h1>
            </div>
            <div className={styles.auth__body}>
                <div className={styles.auth__nav}>
                    <NavLink to={'/auth?page=signUp'} className={`${styles.auth__navSection} ${page === 'signUp' && styles.active}`}>
                        <h4>Регистрация</h4>
                    </NavLink>
                    <NavLink to={'/auth?page=signIn'} className={`${styles.auth__navSection} ${page === 'signIn' && styles.active}`}>
                        <h4>Авторизация</h4>
                    </NavLink>
                </div>
                <Component />
            </div>
        </div>
    )
}

export default Auth