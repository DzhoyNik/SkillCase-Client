import { React } from "react"
import style from "./auth.module.css"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Choice from "./Choice"


const Auth = () => {
    return(
        <div className={style.auth}>
            <div className={style.logo}>
                <div className={style.logo__icon}></div>
                <h1>SkillCase</h1>
            </div>
            <div className={style.auth__body}>
                {/* <SignIn /> */}
                {/* <Choice /> */}
                <SignUp />
            </div>
        </div>
    )
}

export default Auth