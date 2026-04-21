import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import wrapper from '../../css/profile.module.css'
import styles from './company.module.css'

const Info = () => {
    return(
        <>
            <Overlay />
            <div className={wrapper.wrapper}>
                <div className={wrapper.wrapper__content}>
                    <div className={styles.info}>
                        <div className={`${styles.info__section} ${styles.info__header}`}>
                            <div className={`${styles.info__headerSection} ${styles.info__headerLogo}`}>
                                <div className={styles.info__logoImage}>
                                    <p>[ Логотип ]</p>
                                </div>
                            </div>
                            <div className={`${styles.info__headerSection} ${styles.info__headerContent}`}>
                                <h2>[ Компания ]</h2>
                                <h4>[ Сфера ]</h4>
                                <p>[ Описание ]</p>
                            </div>
                        </div>
                        <div className={`${styles.info__section} ${styles.info__stats}`}>
                            <div className={styles.info__statsSection}>
                                <div className={styles.info__statsIcon}></div>
                                <div className={styles.info__statsText}>
                                    <h4>[ Метрика ]</h4>
                                    <p>[ Текст ]</p>
                                </div>
                            </div>
                            <div className={styles.info__statsSection}>
                                <div className={styles.info__statsIcon}></div>
                                <div className={styles.info__statsText}>
                                    <h4>[ Метрика ]</h4>
                                    <p>[ Текст ]</p>
                                </div>
                            </div>
                            <div className={styles.info__statsSection}>
                                <div className={styles.info__statsIcon}></div>
                                <div className={styles.info__statsText}>
                                    <h4>[ Метрика ]</h4>
                                    <p>[ Текст ]</p>
                                </div>
                            </div>
                            <div className={styles.info__statsSection}>
                                <div className={styles.info__statsIcon}></div>
                                <div className={styles.info__statsText}>
                                    <h4>[ Метрика ]</h4>
                                    <p>[ Текст ]</p>
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
                                <div className={styles.info__activity}>
                                    <h3>Активность компании</h3>
                                </div>
                                <div className={styles.info__contact}>
                                    <h3>Контакты</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Info