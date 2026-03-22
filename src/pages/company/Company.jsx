import { observer } from "mobx-react-lite"
import { useSearchParams } from "react-router"
import Application from "./Application"
import styles from './company.module.css'

const Company = observer(() => {
    const [ searchParams ] = useSearchParams()
    const currentPage = searchParams.get('page')

    const pages = {
        'application': Application
    }

    const Component = pages[currentPage]

    return(
        <div className={styles.company}>
            <Component />
        </div>
    )
})

export default Company