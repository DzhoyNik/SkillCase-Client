import React from "react";
import style from "./auth.module.css"

const SignIn = () => {
    return(
        <div className={style.auth__signIn}>
            <h1>Авторизация</h1>
            <div className={style.auth__bodySection}>
                <input type="text" placeholder="Логин" />
                <input type="password" placeholder="Пароль" />
            </div>
            <button type="button">Войти</button>
            <p>Создать учетную запись</p>
            <p>Забыли пароль?</p>
        </div>
    )
}

export default SignIn