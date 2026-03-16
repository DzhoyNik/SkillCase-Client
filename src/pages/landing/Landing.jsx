import { React } from "react"
import style from './landing.module.css'
import Footer from "../../components/Footer"

const Landing = () => {
    return(
        <>
            <div className={style.landing}>
                <div className={style.topbar}>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                </div>
                <div className={style.header}>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                </div>
                <div className={style.dignities}>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                </div>
                <div className={style.works}>

                </div>
                <div className={style.cases}>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                </div>
                <div className={style.companies}>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                    <div className={style.section}></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing