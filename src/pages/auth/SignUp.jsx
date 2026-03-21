import React, { useState } from "react";
import style from "./auth.module.css"
import { NavLink, useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { signUp } from "../../api/userAPI";

const SignUp = observer(() => {
    const navigate = useNavigate()
    const [ lastName, setLastName ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ patronymic, setPatronymic ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSignUp = async () => {
        const response = await signUp( lastName, firstName, patronymic, email, password )
        console.log(response)
    }

    return(
        <div className={style.auth__signUp}>
            <h1>Регистрация</h1>
            <div className={style.auth__bodySection}>
                <input type="text" placeholder="Фамилию" value={ lastName } onChange={ e => setLastName(e.target.value) } />
                <input type="text" placeholder="Имя" value={ firstName } onChange={ e => setFirstName(e.target.value) } />
                <input type="text" placeholder="Отчество" value={ patronymic } onChange={ e => setPatronymic(e.target.value) } />
            </div>
            <div className={style.auth__bodySection}>
                <input type="email" placeholder="Почта" value={ email } onChange={ e => setEmail(e.target.value) } />
                <input type="password" placeholder="Пароль" value={ password } onChange={ e => setPassword(e.target.value) } />
            </div>
            <button type="button" onClick={handleSignUp}>Создать аккаунт</button>
            <h4 style={{ textAlign: "center" }}>Уже есть учетная запись? <NavLink to="/auth?page=signIn">Войти</NavLink></h4>
        </div>
    )
})

export default SignUp