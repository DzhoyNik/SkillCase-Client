import wrapper from '../../css/profile.module.css'
import Overlay from '../../components/Overlay'
import styles from './docs.module.css'
import { NavLink, useSearchParams } from 'react-router'
import Footer from '../../components/Footer'
import Terms from './Terms'
import Privacy from './Privacy'
import Cookies from './Cookies'

const Docs = () => {
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get('page')
    
    const pages = {
        terms: Terms,
        privacy: Privacy,
        cookies: Cookies
    }

    const Component = pages[page]

    return (
        <>
            <div className={wrapper.wrapper}>
                <Overlay sidebar={false} />
                <div className={styles.docs}>
                    <NavLink>Вернуться</NavLink>
                    <Component styles={styles} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Docs