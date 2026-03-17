import React from "react";
import style from "./auth.module.css"
import { NavLink, useNavigate } from "react-router";
import { IoPerson, IoKey } from "react-icons/io5"

const SignIn = () => {
    const navigate = useNavigate()

    return(
        <div className={style.auth__signIn}>
            <h1>Авторизация</h1>
            <div className={style.auth__bodySection}>
                <div className={style.auth__bodyInput}>
                    <IoPerson />
                    <input type="text" placeholder="Логин" />
                </div>
                <div className={style.auth__bodyInput}>
                    <IoKey />
                    <input type="password" placeholder="Пароль" />
                </div>
            </div>
            <button type="button" onClick={() => navigate('/cases')}>Войти</button>
            <NavLink to="/auth?page=choice">Создать учетную запись</NavLink>
            <NavLink to="/auth?page=forgot">Забыли пароль?</NavLink>
        </div>
    )
}

export default SignIn