import { observer } from "mobx-react-lite"
import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import wrapper from '../../css/profile.module.css'
import styles from './company.module.css'
import { useContext, useEffect, useState } from "react"
import { getCompanyInfo } from "../../api/companyAPI"
import { Context } from "../.."
import logo from '../../assets/company.png'

const Info = observer(() => {
    const { company } = useContext(Context)

    console.log(company.company)

    return(
        <div className={styles.info}>
            <div className={`${styles.info__section} ${styles.info__header}`}>
                <div className={`${styles.info__headerSection} ${styles.info__headerLogo}`}>
                    <div className={styles.info__logoImage}>
                        <img src={logo} alt="Логотип" />
                    </div>
                </div>
                <div className={`${styles.info__headerSection} ${styles.info__headerContent}`}>
                    <h2>{company?.company.name}</h2>
                    <h4>{company?.company.sphere}</h4>
                    <p>{company?.company.description}</p>
                </div>
            </div>
            <div className={`${styles.info__section} ${styles.info__stats}`}>
                <div className={styles.info__statsSection}>
                    <div className={styles.info__statsMetric}>
                        <h1>0</h1>
                    </div>
                    <div className={styles.info__statsText}>
                        <p>Опубликованных кейсов</p>
                    </div>
                </div>
                <div className={styles.info__statsSection}>
                    <div className={styles.info__statsMetric}>
                        <h1>0</h1>
                    </div>
                    <div className={styles.info__statsText}>
                        <p>Участинов в сообществе</p>
                    </div>
                </div>
                <div className={styles.info__statsSection}>
                    <div className={styles.info__statsMetric}>
                        <h1>0</h1>
                    </div>
                    <div className={styles.info__statsText}>
                        <p>Процент успешных решений</p>
                    </div>
                </div>
                <div className={styles.info__statsSection}>
                    <div className={styles.info__statsMetric}>
                        <h1>0</h1>
                    </div>
                    <div className={styles.info__statsText}>
                        <p>Приглашений на работу</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.info__section} ${styles.info__content}`}>
                <div className={styles.info__contentSection}>
                    <div className={styles.info__toolbar}>
                        <h4>Кейсы</h4>
                        <h4>Участники</h4>
                        <h4>О компании</h4>
                        {/* <h4>Отзывы</h4>
                        <h4>Обсуждения</h4> */}
                    </div>
                    <div className={styles.info__contentBody}>
                        
                    </div>
                </div>
                <div className={styles.info__contentSection}>
                    {/* <div className={styles.info__activity}>
                        <h3>Активность компании</h3>
                    </div> */}
                    <div className={styles.info__contact}>
                        <h3>Контакты</h3>
                        <div className={styles.info__contactSection}>
                            <h4>ИНН</h4>
                            <p>{company?.company.inn}</p>
                        </div>
                        <div className={styles.info__contactSection}>
                            <h4>ОГРН</h4>
                            <p>{company?.company.ogrn}</p>
                        </div>
                        <div className={styles.info__contactSection}>
                            <h4>Почта</h4>
                            <p>{company?.company.email}</p>
                        </div>
                        <div className={styles.info__contactSection}>
                            <h4>Сайт</h4>
                            <p>{company?.company.site}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Info