import styles from "./cases.module.css"
import footer from "../landing/landing.module.css"
import Overlay from "../../components/Overlay"
import CaseItem from "./CaseItem"
import { IoChevronBack, IoChevronForward, IoSearch } from "react-icons/io5"
import Footer from "../../components/Footer"
import { observer } from "mobx-react-lite"
import tempCases from "./tempCases"

const Cases = observer(() => {
    return(
        <>
            <div className={styles.cases}>
                <Overlay sidebar={false} />
                <h2 className={styles.cases__title}>Каталог кейсов</h2>
                <p className={styles.cases__description}>Выбирай практические задачи от компаний, решай в своём темпе и добавляй результат в портфолио.</p>
                <div className={styles.cases__content}>
                    <div className={styles.cases__sidebar}>
                        <div className={styles.cases__sidebarSection}>
                            <IoChevronForward />
                            <h3>Уровень сложности</h3> 
                        </div>
                        <div className={styles.cases__sidebarSection}>
                            <IoChevronForward />
                            <h3>Навыки</h3>
                        </div>
                        <div className={styles.cases__sidebarSection}>
                            <IoChevronForward />
                            <h3>Направления</h3>
                        </div>
                        <button type="button">Применить фильтры</button>
                        <button type="button">Сбросить</button>
                    </div>
                    <div className={styles.cases__main}>
                        <div className={styles.cases__toolbar}>
                            <div className={styles.cases__search}>
                                <input type="text" placeholder="Поиск по кейсам" />
                                <button type="button">
                                    <IoSearch />
                                </button>
                            </div>
                            <div className={styles.cases__sort}>
                                <h3>Сортировать</h3>
                                <IoChevronBack />
                            </div>
                        </div>
                        <div className={styles.cases__list}>
                            {tempCases.map( item => <CaseItem key={ item.id } data={ item } /> )}
                        </div>
                    </div>
                </div>
                <div className={styles.cases__pagination}>
                    <div className={styles.cases__paginationBody}>
                        <div className={styles.cases__paginationArrow}>
                            <IoChevronBack />
                        </div>
                        <div className={styles.cases__paginationList}>
                            <div className={styles.cases__paginationItem}><h4>1</h4></div>
                            <div className={styles.cases__paginationItem}><h4>2</h4></div>
                            <div className={styles.cases__paginationItem}><h4>3</h4></div>
                            <div className={styles.cases__paginationItem}><h4>4</h4></div>
                            <div className={styles.cases__paginationItem}><h4>5</h4></div>
                        </div>
                        <div className={styles.cases__paginationArrow}>
                            <IoChevronForward />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Cases