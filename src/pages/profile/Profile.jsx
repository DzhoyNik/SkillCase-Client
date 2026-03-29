import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import styles from "./profile.module.css"
import { observer } from "mobx-react-lite"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Statistics from "./Statistics"
import Cases from "./Cases"

const Profile = observer(() => {
    return(
        <>
            <Overlay />
            <div className={styles.profile}>
                <div className={styles.profile__content}>
                    <Sidebar />
                    <div className={styles.profile__main}>
                        <Header />
                        <Statistics />
                        <Cases />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Profile