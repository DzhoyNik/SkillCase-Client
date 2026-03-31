import { useSearchParams } from "react-router"
import styles from "./admin.module.css"
import { pages } from "./pages"

const Sidebar = () => {
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get('page')

    return(
        <div className={styles.admin__sidebar}>
            {pages.map(data => (
                <div className={`${styles.admin__sidebarSection} ${data.url === page && styles.admin__sidebarSectionActive}`}>
                    {data.icon}
                    <h4>{data.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default Sidebar