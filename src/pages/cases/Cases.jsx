import styles from "./cases.module.css"
import Overlay from "../../components/Overlay"
import CaseItem from "./CaseItem"
import { IoChevronBack, IoChevronForward, IoSearch } from "react-icons/io5"
import Footer from "../../components/Footer"
import { observer } from "mobx-react-lite"
import tempCases from "./tempCases"
import { useState } from "react"
import PopupSection from "./PopupSection"

const Cases = observer(() => {
    const [ isView, setIsView ] = useState({
        difficulty: false,
        skills: false,
        direction: false
    })

    const [ filter, setFilter ] = useState({
        difficulty: [],
        skills: [],
        direction: []
    })

    const handleToggleView = ( type ) => {
        setIsView(prev => ({
            ...prev,
            [type]: !prev[type]
        }))
    }

    const handleToggleFilter = ( type, value ) => {
        setFilter((prev) => ({
            ...prev,
            [ type ]: prev[type].includes(value)
                ? prev[type].filter( item => item !== value )
                : [ ...prev[type], value ]
        }))
    }

    const handleResetFilter = () => {
        setFilter({
            difficulty: [],
            skills: [],
            direction: []
        })
    }

    console.log(filter)

    return(
        <>
            <div className={styles.cases}>
                <Overlay sidebar={false} />
                <h2 className={styles.cases__title}>Каталог кейсов</h2>
                <p className={styles.cases__description}>Выбирай практические задачи от компаний, решай в своём темпе и добавляй результат в портфолио.</p>
                <div className={styles.cases__content}>
                    <div className={styles.cases__sidebar}>
                        <div className={styles.cases__sidebarList}>
                            <div className={styles.cases__sidebarSection}>
                                <div className={`${styles.cases__sidebarHeader} ${isView.difficulty && styles.cases__active}`} onClick={() => handleToggleView('difficulty')}>
                                    <IoChevronForward />
                                    <h3>Уровень сложности</h3>
                                </div>
                                {isView.difficulty && <PopupSection
                                    filter={filter}
                                    handleToggleFilter={handleToggleFilter}
                                    options={[
                                        { type: 'difficulty', value: 'easy', title: 'Легкий' },
                                        { type: 'difficulty', value: 'middle', title: 'Средний' },
                                        { type: 'difficulty', value: 'hard', title: 'Сложный' },
                                    ]}
                                />}
                            </div>
                            <div className={styles.cases__sidebarSection}>
                                <div className={`${styles.cases__sidebarHeader} ${isView.skills && styles.cases__active}`} onClick={() => handleToggleView('skills')}>
                                    <IoChevronForward />
                                    <h3>Навыки</h3>
                                </div>
                                {isView.skills && <PopupSection
                                    filter={filter}
                                    handleToggleFilter={handleToggleFilter}
                                    options={[
                                        { type: 'skills', value: 'figma', title: 'Figma' },
                                        { type: 'skills', value: 'cjm', title: 'CJM' },
                                        { type: 'skills', value: 'react', title: 'React' },
                                        { type: 'skills', value: 'rest', title: 'Rest' },
                                        { type: 'skills', value: 'sql', title: 'SQL' },
                                        { type: 'skills', value: 'sheets', title: 'Sheets' },
                                        { type: 'skills', value: 'python', title: 'Python' },
                                    ]}
                                />}
                            </div>
                            <div className={styles.cases__sidebarSection}>
                                <div className={`${styles.cases__sidebarHeader} ${isView.direction && styles.cases__active}`} onClick={() => handleToggleView('direction')}>
                                    <IoChevronForward />
                                    <h3>Направления</h3>
                                </div>
                                {isView.direction && <PopupSection
                                    filter={filter}
                                    handleToggleFilter={handleToggleFilter}
                                    options={[
                                        { type: 'direction', value: 'design', title: 'UI/UX дизайн' },
                                        { type: 'direction', value: 'frontend', title: 'Frontend' },
                                        { type: 'direction', value: 'backend', title: 'Backend' },
                                        { type: 'direction', value: 'analytics', title: 'Data/BI аналитика' },
                                        { type: 'direction', value: 'growth', title: 'Маркетинг / Growth' },
                                    ]}
                                />}
                            </div>
                        </div>
                        <div className={styles.cases__sidebarActions}>
                            <button type="button">Применить фильтры</button>
                            <button type="button" onClick={handleResetFilter}>Сбросить</button>
                        </div>
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