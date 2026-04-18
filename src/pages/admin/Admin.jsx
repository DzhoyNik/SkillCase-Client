import { useNavigate, useSearchParams } from "react-router"
import { observer } from "mobx-react-lite"
import styles from "./admin.module.css"
import Overlay from "../../components/Overlay"
import Users from "./Users"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import Roles from "./Roles"
import Application from "./Application"
import Applications from "./Applications"

const Admin = observer(() => {
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get("page")
    const q = searchParams.get("q")
    const navigate = useNavigate()

    const pages = {
        "users": Users,
        "role": Roles,
        'applications': Applications,
        'application': Application
    }

    console.log(page)

    const DEFAULT_PAGE = ''
    const Component = pages[page] || pages[DEFAULT_PAGE]

    return(
        <div className={styles.admin}>
            <Overlay sidebar={false} />
            { page === null ? (
                <>
                    <Navigation />
                    {/* <div className={styles.admin__statistic}></div> */}
                </>
            ) : (
                <div className={styles.admin__content}>
                    <Sidebar />
                    <Component />
                </div>
            ) }
        </div>
    )
})

export default Admin