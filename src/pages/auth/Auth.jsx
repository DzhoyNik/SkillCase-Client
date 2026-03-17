import style from "./auth.module.css"
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
        <div className={style.auth}>
            <div className={style.logo}>
                <div className={style.logo__icon}></div>
                <h1>SkillCase</h1>
            </div>
            <div className={style.auth__body}>
                <div className={style.auth__back}>
                    <NavLink to='/'><button type="button">На главную</button></NavLink>
                </div>
                <Component /> 
            </div>
        </div>
    )
}

export default Auth