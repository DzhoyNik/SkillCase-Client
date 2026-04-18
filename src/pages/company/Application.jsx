import { IoChevronBack, IoChevronDown } from 'react-icons/io5'
import Overlay from '../../components/Overlay'
import styles from './company.module.css'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Context } from '../..'
import { sendApplication } from '../../api/companyAPI'
import { useNavigate } from 'react-router'
import { PROFILE_ROUTE } from '../../utils/consts'

const Application = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const [ form, setForm ] = useState({
        title: '',
        description: '',
        sphere: '',
        inn: '',
        ogrn: '',
        email: '',
        site: '',
        employee: `${user.user.lastName} ${user.user.firstName} ${user.user.patronymic}`,
        post: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm(prev => ({
            ...prev,
            [ name ]: value
        }))
    }

    const handleSend = async () => {
        try {
            const payload = { userId: user.user.id, ...form }
            const data = await sendApplication(payload)
            navigate(PROFILE_ROUTE)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
    
    return(
        <div className={styles.company__application}>
            <Overlay sidebar={false} />
            <div className={styles.company__applicationContent}>
                <div className={styles.company__applicationContentTitle}>
                    <h2>Заявка на статус работодателя</h2>
                    <p>После одобрения Вы сможете публиковать кейсы, просматривать отклики специалистов, а также приглашать специалистов на стажировку. Проверка заявки занимает 1-2 дня</p>
                </div>
                <div className={styles.company__applicationSection}>
                    <div className={styles.company__applicationSectionTitle}>
                        <h3>Компания</h3>
                        <IoChevronDown />
                    </div>
                    <div className={`${styles.company__applicationSectionContent} ${styles.company__applicationSectionContentActive}`}>
                        <input
                            type="text"
                            name='title'
                            placeholder='Название'
                            value={form.title}
                            onChange={ e => handleChange(e) }
                        />
                        <input 
                            type="text"
                            name='description'
                            placeholder='Описание'
                            value={form.description}
                            onChange={ e => handleChange(e) }
                        />
                        <input 
                            type="text"
                            name='sphere'
                            placeholder='Сфера'
                            value={form.sphere}
                            onChange={ e => handleChange(e) }
                        />
                    </div>
                </div>
                <div className={styles.company__applicationSection}>
                    <div className={styles.company__applicationSectionTitle}>
                        <h3>Документы</h3>
                        <IoChevronDown />
                    </div>
                    <div className={`${styles.company__applicationSectionContent} ${styles.company__applicationSectionContentActive}`}>
                        <input
                            type="text"
                            name='inn'
                            placeholder='ИНН'
                            value={form.iNN}
                            onChange={ e => handleChange(e) }
                        />
                        <input
                            type="text"
                            name='ogrn'
                            placeholder='ОГРН'
                            value={form.oGRN}
                            onChange={ e => handleChange(e) }
                        />
                        <input
                            type="email"
                            name='email'
                            placeholder='Корпоративная почта'
                            value={form.email}
                            onChange={ e => handleChange(e) }
                        />
                        <input
                            type="text"
                            name='site'
                            placeholder='Сайт компании'
                            value={form.site}
                            onChange={ e => handleChange(e) }
                        />
                    </div>
                </div>
                <div className={styles.company__applicationSection}>
                    <div className={styles.company__applicationSectionTitle}>
                        <h3>Представитель</h3>
                        <IoChevronDown />
                    </div>
                    <div className={`${styles.company__applicationSectionContent} ${styles.company__applicationSectionContentActive}`}>
                        <input
                            type="text"
                            name='employee'
                            placeholder='ФИО представителя'
                            value={form.employee}
                            onChange={ e => handleChange(e) }
                        />
                        <input
                            type="text"
                            name='post'
                            placeholder='Должность'
                            value={form.post}
                            onChange={ e => handleChange(e) }
                        />
                    </div>
                </div>
                <button type='button' onClick={handleSend}>Отправить</button>
            </div>
        </div>
    )
})

export default Application