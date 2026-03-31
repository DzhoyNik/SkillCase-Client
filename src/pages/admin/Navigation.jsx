import { useNavigate } from 'react-router'
import styles from './admin.module.css'
import { ADMIN_ROUTE } from '../../utils/consts'
import { pages } from './pages'

const Navigation = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.admin__navigation}>
            {pages.map(data => (
                <div key={data.url} className={styles.admin__navigationSection} onClick={() => navigate(`${ADMIN_ROUTE}?page=${data.url}`)}>
                    {data.icon}
                    <h3>{data.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Navigation