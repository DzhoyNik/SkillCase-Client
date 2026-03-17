import React from "react";
import style from "./auth.module.css";
import { useNavigate } from "react-router";

const Choice = () => {
    const navigate = useNavigate()

    const handleChoice = (type) => {
        type === 'employer'
            ? navigate('/cases')
            : navigate('/auth?page=application&step=1')
    }

    return(
        <div className={style.auth__choice}>
            <h1>Какой хотите создать аккаунт?</h1>
            <div className={`${style.auth__bodySection} ${style.auth__choiceSection}`}>
                <div className={style.auth__choiceButton} onClick={handleChoice.bind(null, 'employer')}>
                    <h3>Я соискатель</h3>
                    <div className={style.auth__choiceArrow}>
                        <h2>{'>'}</h2>
                    </div>
                </div>
                <div className={style.auth__choiceButton} onClick={handleChoice.bind(null, 'company')}>
                    <h3>Я работoдатель</h3>
                    <div className={style.auth__choiceArrow}>
                        <h2>{'>'}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choice