import React from "react";
import style from "./auth.module.css";

const Choice = () => {
    return(
        <div className={style.auth__choice}>
            <h1>Какой хотите создать аккаунт?</h1>
            <div className={`${style.auth__bodySection} ${style.auth__choiceSection}`}>
                <div className={style.auth__choiceButton}>
                    <h3>Я соискатель</h3>
                    <div className={style.auth__choiceArrow}>
                        <h2>{'>'}</h2>
                    </div>
                </div>
                <div className={style.auth__choiceButton}>
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