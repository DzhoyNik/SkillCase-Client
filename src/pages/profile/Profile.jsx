import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import styles from "./profile.module.css"
import wrapper from '../../css/profile.module.css'
import { observer } from "mobx-react-lite"
import Header from "./Header"
import Cases from "./Cases"
import About from "./About"

const Profile = observer(() => {
    return(
        <>
            <Overlay />
            <div className={wrapper.wrapper}>
                <div className={wrapper.wrapper__content}>
                    <div className={styles.profile}>
                        <Header />
                        <About />
                        <Cases />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Profile