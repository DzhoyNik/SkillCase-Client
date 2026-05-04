import { useNavigate } from "react-router"
import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import wrapper from '../../css/profile.module.css'
import styles from './company.module.css'
import { COMPANY_ROUTE } from "../../utils/consts"

const Cases = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.cases}>
            <div className={styles.cases__toolbar}>
                <button type="button" onClick={() => navigate(`${COMPANY_ROUTE}?page=create`)}>Создать кейс</button>
            </div>
            <div className={styles.cases__content}>
                <NoCases />
            </div>
        </div>
    )
}

const NoCases = () => {
    return(
        <>
            <h4>У вас нет опубликованных кейсов</h4>
        </>
    )
}

export default Cases