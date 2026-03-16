import { React } from "react"
import style from "./auth.module.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Choice from "./Choice"
import { NavLink } from "react-router"


const Auth = () => {
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
                <SignIn />
                {/* <Choice /> */}
                {/* <SignUp /> */}
            </div>
        </div>
    )
}

export default Auth