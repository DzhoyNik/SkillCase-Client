import { observer } from 'mobx-react-lite'
import styles from './settings.module.css'
import { useContext, useState } from 'react'
import { Context } from '../..'

const Account = observer(() => {
    const { user } = useContext(Context)

    const [ lastName, setLastName ] = useState(user.user.lastName || '')
    const [ firstName, setFirstName ] = useState(user.user.firstName || '')
    const [ patronymic, setPatronymic ] = useState(user.user.patronymic || '')
    const [ email, setEmail ] = useState(user.user.email || '')

    return (
        <>
            <div className={styles.settings__section}>
                <div className={styles.account}>
                    <div className={styles.account__avatar}></div>
                    <div className={styles.account__info}>
                        <h3>Фотография профиля</h3>
                        <p>Выберите файл JPG или PNG до 5 мб</p>
                        <button type="button">Загрузить</button>
                    </div>
                </div>
            </div>
            <div className={styles.settings__section}>
                <h3>Контактная информация</h3>
                <input type="text" placeholder="Фамилия" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="text" placeholder="Имя" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Отчество" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
            </div>
            <div className={styles.settings__section}>
                <h3>Логин</h3>
                <input type="text" placeholder='example' />
                <h3>Почта</h3>
                <input type="email" placeholder='example@skillcase.ru' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.settings__section}>
                <h3>О себе</h3>
                <textarea placeholder='Расскажите немного о себе...' />
                <h3>Место учебы</h3>
                <input type="text" placeholder='Название вуза, колледжа или школы' />
            </div>
            <div className={styles.settings__section}>
                <h3>Ссылки</h3>
                <input type="text" placeholder='https://...' />
                <input type="text" placeholder='https://...' />
                <input type="text" placeholder='https://...' />
            </div>
        </>
    )
})

export default Account