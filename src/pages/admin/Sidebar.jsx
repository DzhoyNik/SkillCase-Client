import { NavLink, useSearchParams } from "react-router"
import styles from "./admin.module.css"
import { pages } from "./pages"
import { ADMIN_ROUTE } from '../../utils/consts'

const Sidebar = () => {
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get('page')

    return(
        <div className={styles.admin__sidebar}>
            {pages.map(data => (
                <NavLink key={data.url} to={`${ADMIN_ROUTE}?page=${data.url}`}>
                    <div className={`${styles.admin__sidebarSection} ${data.url === page && styles.admin__sidebarSectionActive}`}>
                        {data.icon}
                        <h4>{data.title}</h4>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar