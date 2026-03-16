import { React } from "react"
import style from './landing.module.css'
import Footer from "../../components/Footer"
import { NavLink } from "react-router"
import { IoChevronForward } from "react-icons/io5"
import { comp_1, comp_2, comp_3, dignitie_1, dignitie_2, dignitie_3, dignitie_4 } from "../../assets"

const Landing = () => {
    return(
        <>
            <div className={style.landing}>
                <div className={style.topbar}>
                    <div className={style.topbar__logo}>
                        <div className={style.topbar__logoIcon}></div>
                        <h1>SkillCase</h1>
                    </div>
                    <div className={style.topbar__nav}>
                        <NavLink to='/'>Как это работает?</NavLink>
                        <NavLink to='/'>Кейсы</NavLink>
                        <NavLink to='/'>Партнеры</NavLink>
                    </div>
                    <div className={style.topbar__auth}>
                        <NavLink to='/auth'>Авторизоваться</NavLink>
                        <IoChevronForward />
                    </div>
                </div>
                <div className={style.header}>
                    <div className={style.header__content}>
                        <h1>Начни карьеру в IT<br />с реальных кейсов<br />в портфолио</h1>
                        <h3>Решай практические кейсы от компаний, собирай портфолио<br />и получай офферы еще во время учебы</h3>
                    </div>
                    <div className={style.header__image}></div>
                </div>
                <div className={style.dignities}>
                    <div className={style.dignities__section}>
                        <div className={style.dignities__sectionIcon}>
                            <img src={dignitie_1} alt="" />
                        </div>
                        <div className={style.dignities__sectionText}>
                            <h3>Реальные задачи<br />от компаний</h3>
                            <p>Работаешь с брифами,<br />ТЗ и данными от бизнеса</p>
                        </div>
                    </div>
                    <div className={style.dignities__section}>
                        <div className={style.dignities__sectionIcon}>
                            <img src={dignitie_2} alt="" />
                        </div>
                        <div className={style.dignities__sectionText}>
                            <h3>Портфолио<br />в твоем профиле</h3>
                            <p>Каждый решенный кейс<br />становится частью твоего<br />профиля</p>
                        </div>
                    </div>
                    <div className={style.dignities__section}>
                        <div className={style.dignities__sectionIcon}>
                            <img src={dignitie_3} alt="" />
                        </div>
                        <div className={style.dignities__sectionText}>
                            <h3>Обратная связь<br />от бизнеса</h3>
                            <p>Компания разбирает твое<br />решение и дает обратную связь</p>
                        </div>
                    </div>
                    <div className={style.dignities__section}>
                        <div className={style.dignities__sectionIcon}>
                            <img src={dignitie_4} alt="" />
                        </div>
                        <div className={style.dignities__sectionText}>
                            <h3>Рост в карьере<br />через практику</h3>
                            <p>Лучшие решения получают<br />отклик и приглашения на<br />собеседования</p>
                        </div>
                    </div>
                </div>
                <div className={style.works}>
                    <div className={style.works__content}>
                        <h1>Как это работает?</h1>
                        <div className={style.works__steps}>
                            <div className={style.works__step}>
                                <div className={style.works__stepNumber}><h1>1</h1></div>
                                <div className={style.works__stepText}>
                                    <h2>Выбираешь кейс</h2>
                                    <p>Заходишь в каталог и выбираешь задачу по направлению и тегам (React, SQL, API и т.д.). Сразу видно сложность и что нужно сдать</p>
                                </div>
                            </div>
                            <div className={`${style.works__step} ${style.works__stepInvert}`}>
                                <div className={style.works__stepText}>
                                    <h2>Делаешь решение</h2>
                                    <p>Открываешь кейс - там есть описание задачи и список требований. Выполняешь как обычную рабочую задачу: код/расчёты/макет.</p>
                                </div>
                                <div className={style.works__stepNumber}><h1>2</h1></div>
                            </div>
                            <div className={style.works__step}>
                                <div className={style.works__stepNumber}><h1>3</h1></div>
                                <div className={style.works__stepText}>
                                    <h2>Получаешь проект в портфолио</h2>
                                    <p>Сдаёшь решение в нужном формате.Кейс автоматически появляется в твоём профиле как готовый проект. Ссылку на профиль можно прикрепить к резюме.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.cases}>
                    <div className={style.cases__content}>
                        <h1>Решай кейсы<br />и получай опыт</h1>
                        <NavLink to="/cases"><button type="button">Перейти к кейсам</button></NavLink>
                    </div>
                    <div className={style.section}></div>
                </div>
                <div className={style.companies}>
                    <img src={comp_1} alt="Company 1" />
                    <img src={comp_2} alt="Company 2" />
                    <img src={comp_3} alt="Company 3" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing