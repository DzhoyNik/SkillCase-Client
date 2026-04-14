import { NavLink } from "react-router"
import styles from "../css/footer.module.css"
import { FaTelegramPlane } from "react-icons/fa"
import { DOCS_ROUTE } from '../utils/consts'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__section}>
                    <h3>skillcase@gmail.com</h3>
                    <p>По вопросам и предложениям</p>
                    <NavLink>
                        <div className={styles.footer_telegramm}>
                            <FaTelegramPlane />
                        </div>
                    </NavLink>
                </div>
                <div className={styles.footer__section}>
                    <h3>Документы</h3>
                    <NavLink to={`${DOCS_ROUTE}?page=terms`}>Условия использования</NavLink>
                    <NavLink to={`${DOCS_ROUTE}?page=privacy`}>Политика конфиденциальности</NavLink>
                    <NavLink to={`${DOCS_ROUTE}?page=cookies`}>Политика cookie</NavLink>
                </div>
                <div className={styles.footer__section}>
                    <h3>Платформа</h3>
                    <NavLink>FAQ</NavLink>
                    <NavLink>О нас</NavLink>
                </div>
                <div className={styles.footer__section}>
                    <div className={styles.footer__logo}>
                        <div className={styles.footer__logoIcon}></div>
                        <h1>SkillCase</h1>
                    </div>
                </div>
            </div>
            <div className={styles.footer__copy}>
                <p>&copy; SkillCase, 2026. Все права защищены.</p>
            </div>
        </div>        
    )
}

export default Footer