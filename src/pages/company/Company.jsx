import { observer } from "mobx-react-lite"
import { useSearchParams } from "react-router"
import Application from "./Application"
import styles from './company.module.css'
import Info from "./Info"
import Messages from "./Messages"
import Cases from "./Cases"
import Create from "./Create"
import Overlay from "../../components/Overlay"
import Footer from "../../components/Footer"
import wrapper from '../../css/profile.module.css'

const Company = observer(() => {
    const [ searchParams ] = useSearchParams()
    const currentPage = searchParams.get('page')

    const pages = {
        info: Info,
        messages: Messages,
        cases: Cases,
        application: Application,
        create: Create
    }

    const Component = pages[currentPage]

    return(
        <div className={styles.company}>
            <Overlay />
            <div className={wrapper.wrapper}>
                <div className={wrapper.wrapper__content}>
                    <Component />
                </div>
            </div>
            <Footer />
        </div>
    )
})

export default Company