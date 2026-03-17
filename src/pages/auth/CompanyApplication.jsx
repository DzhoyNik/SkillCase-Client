import { useNavigate, NavLink, useSearchParams } from "react-router"
import style from "./auth.module.css"

const CompanyApplication = () => {
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()
    const step = searchParams.get('step')

    const handlePreviousStep = () => {
        navigate(`/auth?page=application&step=${Number(step) - 1}`)
    }

    if (step === '4') return navigate('/profile')

    const handleNextStep = () => {
        navigate(`/auth?page=application&step=${Number(step) + 1}`)
    }

    const steps = {
        '1': (
            <div className={style.auth__bodySection}>
                <input type="text" placeholder="Название компании" />
                <input type="text" placeholder="Описание" />
            </div>
        ),
        '2': (
            <div className={style.auth__bodySection}>
                <input type="text" placeholder="ИНН" />
                <input type="text" placeholder="ОГРН" />
                <input type="text" placeholder="Корпоративная почта" />
                <input type="text" placeholder="Сайт компании" />
            </div>
        ),
        '3': (
            <div className={style.auth__bodySection}>
                <input type="text" placeholder="ФИО представителя" />
                <input type="text" placeholder="Должность" />
            </div>
        )
    }

    const DEFAULT_STEP = '1'

    const Component = steps[step] || steps[DEFAULT_STEP]

    return(
        <div className={style.auth__application}>
            {/* <h1>Регистрация</h1> */}
            <div className={style.auth__steps}>
                <div className={`${style.auth__circle} ${step === '1' ? style.auth__circleCurrent : ''}`}>
                    <div className={style.auth__step}>
                        <h1>1</h1>
                    </div>
                </div>
                <div className={`${style.auth__circle} ${step === '2' ? style.auth__circleCurrent : ''}`}>
                    <div className={style.auth__step}>
                        <h1>2</h1>
                    </div>
                </div>
                <div className={`${style.auth__circle} ${step === '3' ? style.auth__circleCurrent : ''}`}>
                    <div className={style.auth__step}>
                        <h1>3</h1>
                    </div>
                </div>
            </div>
            {Component}
            <button type="button" onClick={handleNextStep}>Далее</button>
            {step !== '1' && <button type="button" onClick={handlePreviousStep}>Назад</button>}
        </div>
    )
}

export default CompanyApplication