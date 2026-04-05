import Overlay from "../../components/Overlay"
import wrapper from "../../css/profile.module.css"
import styles from './portfolio.module.css'
import PortfolioSection from "./PortfolioSection"
import { tempCases } from "./tempCases"

const CaseStatus = {
    accepted: {
        title: 'Принят',
        style: 'accept'
    },
    processed: {
        title: 'В процессе',
        style: 'process'
    },
    rejected: {
        title: 'Отказ',
        style: 'reject'
    }
}

const Portfolio = () => {
    return(
        <>
            <Overlay />
            <div className={wrapper.wrapper}>
                <div className={wrapper.wrapper__content}>
                    <div className={styles.portfolio}>
                        <div className={styles.portfolio__header}>
                            <h2>Портфолио</h2>
                            <p>Все кейсы</p>
                        </div>
                        <div className={styles.portfolio__statistics}>
                            <div className={styles.portfolio__statisticsSection}>
                                <h2>Всего</h2>
                                <h1>135</h1>
                            </div>
                            <div className={styles.portfolio__statisticsSection}>
                                <h2>Принято</h2>
                                <h1>8</h1>

                            </div>
                            <div className={styles.portfolio__statisticsSection}>
                                <h2>Успешно</h2>
                                <h1>5</h1>
                            </div>
                            <div className={styles.portfolio__statisticsSection}>
                                <h2>Отказано</h2>
                                <h1>15</h1>
                            </div>
                        </div>
                        <div className={styles.portfolio__sort}>
                            <div className={`${styles.portfolio__sortSection} ${styles.portfolio__sortSectionActive}`}>
                                <h3>Все</h3>
                            </div>
                            <div className={styles.portfolio__sortSection}>
                                <h3>Принятые</h3>
                            </div>
                            <div className={styles.portfolio__sortSection}>
                                <h3>В процессе</h3>
                            </div>
                            <div className={styles.portfolio__sortSection}>
                                <h3>Отклоненные</h3>
                            </div>
                        </div>
                        <div className={styles.portfolio__list}>
                            {tempCases.map( data => (
                                <PortfolioSection
                                    key={ data.id }
                                    id={ data.id }
                                    difficulty={ data.difficulty }
                                    title={ data.title }
                                    company={ data.company }
                                    description={ data.description }
                                    tags={ data.tags }
                                    status={ CaseStatus[data.status] }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio