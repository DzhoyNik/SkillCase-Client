import { useParams } from "react-router"
import { useEffect, useState } from "react"
import styles from "./cases.module.css"
import Overlay from "../../components/Overlay"
import { FaCheck, FaExclamation, FaPlus } from "react-icons/fa"
import { caseMock } from '../../temp/tempCase'
import { NavLink } from "react-router"
import { CASES_ROUTE } from "../../utils/consts"
import { IoIosArrowBack } from "react-icons/io"
import Footer from "../../components/Footer"

const Case = () => {
    const { caseId } = useParams()
    const [ data, setData ] = useState({})

    useEffect(() => {
        setData(caseMock)
    }, [])
    
    console.log(data)

    return (
        <div className={styles.cases}>
            <Overlay sidebar={false} />
            <div className={styles.case__content}>
                <div className={styles.case__fullInfo}>
                    <div className={styles.case__section}>
                        <NavLink to={CASES_ROUTE}><IoIosArrowBack />Назад</NavLink>
                        <h2>{data.title}</h2>
                        <div className={styles.case__linear}>
                            <div className={styles.case__linearSection}>
                                <p>Компания: </p>
                                <h4>{data.company?.name}</h4>
                            </div>
                            <div className={styles.case__linearSection}>
                                <p>Сложность: </p>
                                <h4>{data.difficulty}</h4>
                            </div>
                            <div className={styles.case__linearSection}>
                                <p>Откликнулось: </p>
                                <h4>{data.stats?.responses}</h4>
                            </div>
                        </div>
                        <p>{data.description}</p>
                        <div className={styles.case__tags}>
                            {data.tags?.map( tag => <h4 key={tag.id} className={styles.case__tag}>{tag.name}</h4> )}
                        </div>
                    </div>
                    <div className={styles.case__section}>
                        <h3>Требования</h3>
                        <div className={styles.case__requirements}>
                            <div className={styles.case__requirement}>
                                <h3>Что нужно сделать</h3>
                                <div className={styles.case__requirementList}>
                                    {data.requirements?.mustDo?.map( requirements => (
                                        <div className={styles.case__listSection}>
                                            <FaExclamation style={{ color: '#e62727' }} />
                                            <p>{requirements}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.case__requirement}>
                                <h3>Что нужно сдать</h3>
                                <div className={styles.case__requirementList}>
                                    {data.requirements?.mustSubmit?.map( requirements => (
                                        <div className={styles.case__listSection}>
                                            <FaCheck style={{ color: '#3adb38' }} />
                                            <p>{requirements}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.case__requirement}>
                                <h3>Будет плюсом</h3>
                                <div className={styles.case__requirementList}>
                                    {data.requirements?.plus?.map( requirements => (
                                        <div className={styles.case__listSection}>
                                            <FaPlus style={{ color: 'var(--background-3)' }} />
                                            <p>{requirements}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.case__shortInfo}>
                    <div className={styles.case__shortInfoContent}>
                        <h3>Информация о кейсе</h3>
                        <div className={styles.case__shortInfoSection}>
                            <p>Сложность</p>
                            <h4>Легкий</h4>
                        </div>
                        <div className={styles.case__shortInfoSection}>
                            <p>Время</p>
                            <h4>15 - 20 часов</h4>
                        </div>
                        <div className={styles.case__shortInfoSection}>
                            <p>Деадлайн</p>
                            <h4>20 дней</h4>
                        </div>
                        <div className={styles.case__shortInfoSection}>
                            <p>Статус</p>
                            <h4>Можно начать</h4>
                        </div>
                        <div className={styles.case__shortInfoSection}>
                            <p>Выполняют</p>
                            <h4>12 человек</h4>
                        </div>
                        <div className={styles.case__shortInfoSection}>
                            <p>Просмотрело</p>
                            <h4>25 человек</h4>
                        </div>
                        <button type="button">Приступить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Case