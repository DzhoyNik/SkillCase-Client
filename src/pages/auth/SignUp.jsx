import React from "react";
import style from "./auth.module.css"

const SignUp = () => {
    return(
        <div className={style.auth__signUp}>
            <h1>Регистрация</h1>
            <div className={style.auth__bodySection}>
                <input type="text" placeholder="Фамилию" />
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Отчество" />
            </div>
            <div className={style.auth__bodySection}>
                <input type="email" placeholder="Почта" />
                <input type="password" placeholder="Пароль" />
            </div>
            <button type="button">Создать аккаунт</button>
            <h4 style={{ textAlign: "center" }}>Уже есть учетная запись? <a href="/auth/sign-in">Войти</a></h4>
        </div>
    )
}

export default SignUp