import React, { useContext, useState } from "react";
import style from "./auth.module.css"
import { NavLink, useNavigate } from "react-router";
import { IoPerson, IoKey } from "react-icons/io5"
import { observer } from "mobx-react-lite";
import { signIn } from "../../api/userAPI";
import { CASES_ROUTE } from "../../utils/consts";
import { Context } from "../..";

const SignIn = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSignIn = async () => {
        try {
            const data = await signIn(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(CASES_ROUTE)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
    
    return(
        <div className={style.auth__signIn}>
            <h1>Авторизация</h1>
            <div className={style.auth__bodySection}>
                <div className={style.auth__bodyInput}>
                    <IoPerson />
                    <input type="text" placeholder="Логин" value={ email } onChange={ e => setEmail(e.target.value) } />
                </div>
                <div className={style.auth__bodyInput}>
                    <IoKey />
                    <input type="password" placeholder="Пароль" value={ password } onChange={ e => setPassword(e.target.value) } />
                </div>
            </div>
            <button type="button" onClick={handleSignIn}>Войти</button>
            <NavLink to="/auth?page=signUp">Создать учетную запись</NavLink>
            <NavLink to="/auth?page=forgot">Забыли пароль?</NavLink>
        </div>
    )
})

export default SignIn