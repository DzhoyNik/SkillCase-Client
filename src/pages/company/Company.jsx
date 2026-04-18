import { observer } from "mobx-react-lite"
import { useSearchParams } from "react-router"
import Application from "./Application"
import styles from './company.module.css'
import Info from "./Info"
import Messages from "./Messages"
import Cases from "./Cases"

const Company = observer(() => {
    const [ searchParams ] = useSearchParams()
    const currentPage = searchParams.get('page')

    const pages = {
        info: Info,
        messages: Messages,
        cases: Cases,
        application: Application
    }

    const Component = pages[currentPage]

    return(
        <div className={styles.company}>
            <Component />
        </div>
    )
})

export default Company