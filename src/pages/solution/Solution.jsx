import Overlay from "../../components/Overlay"
import Sidebar from "../../components/Sidebar"
import styles from '../../css/profile.module.css'
import solution from './solution.module.css'
import status from '../../css/status.module.css'
import MaterialTypes from "./MaterialTypes"
import { NavLink, useSearchParams } from "react-router"
import { SOLUTION_ROUTE } from "../../utils/consts"

const tempTypes = [ 'document', 'spreadsheet', 'presentation', 'image', 'archive', 'source', 'design', 'link', 'video' ]

const Solution = () => {
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get('page')

    return(
        <>
            {/* <Chat /> */}
            <Overlay />
            <div className={styles.wrapper}>
                <div className={styles.wrapper__content}>
                    <Sidebar />
                    <div className={solution.solution}>
                        <div className={solution.solution__section}>
                            <div className={solution.solution__sectionHeader}>
                                <div className={solution.solution__sectionHeaderContent}>
                                    <h2 className={solution.solution__sectionTitle}>Разработка CRM системы</h2>
                                    <h4 className={solution.solution__sectionDifficulty}><span>Легкий</span></h4>
                                </div>
                                <div className={solution.solution__sectionStatus}>
                                    <div className={`${status.status}`}>
                                        <p>В процессе</p>
                                    </div>
                                </div>
                            </div>
                            <p className={solution.solution__sectionDescription}>Разработка CRM системы для учета клиентов.</p>
                        </div>
                        <div className={solution.solution__section}>
                            <div className={solution.solution__toolBar}>
                                <NavLink to={`?page=info`} className={page === 'info' && solution.solution__active}>Информация</NavLink>
                                <NavLink to={`?page=report`} className={page === 'report' && solution.solution__active}>Отчет</NavLink>
                                <h4>Чат</h4>
                            </div>
                        </div>
                        <div className={solution.solution__chapter}>
                            <div className={solution.solution__section} style={{ gridArea: '1 / 6 / 3 / 9' }}>
                                <div className={solution.chat__header}>
                                    <div className={solution.chat__headerImage}>

                                    </div>
                                    <div className={solution.chat__headerContent}>
                                        <h3>Компания</h3>
                                    </div>
                                </div>
                                <div className={solution.chat__content}>
                                    <div className={solution.chat__contentAnswer}>
                                        <div className={solution.chat__contentAnswerImage}></div>
                                        <div className={solution.chat__contentAnswerText}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate aperiam nobis cupiditate facilis accusamus atque, odio repellat quia vitae blanditiis adipisci praesentium quis sint autem quasi. Expedita, sit incidunt.</p>
                                        </div>
                                    </div>
                                    <div className={solution.chat__contentMy}>
                                        <div className={solution.chat__contentMyText}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate aperiam nobis cupiditate facilis accusamus atque, odio repellat quia vitae blanditiis adipisci praesentium quis sint autem quasi. Expedita, sit incidunt.</p>
                                        </div>
                                        <div className={solution.chat__contentMyImage}></div>
                                    </div>
                                </div>
                                <div className={solution.chat__input}>
                                    <input type="text" placeholder="Сообщение" />
                                    <button type="button"></button>
                                </div>
                            </div>
                            {page === 'info' ? <Info /> : <Report /> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Info = () => {
    return(
        <>
            <div className={solution.solution__section} style={{ gridArea: '1 / 1 / 2 / 6' }}>
                <h3>Требования</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio possimus sed. Quidem natus nihil consectetur, expedita harum quibusdam, ab similique assumenda impedit id explicabo. Saepe illo numquam deserunt autem! Omnis iusto eum nulla eaque numquam pariatur ratione ipsam vero aliquid accusamus unde error deserunt, optio autem excepturi reprehenderit vel inventore culpa fugiat? Id, perferendis? Necessitatibus voluptatem possimus quae deleniti. Dicta doloremque facilis id labore qui itaque ipsum soluta possimus nostrum officia fugit maxime sequi exercitationem voluptatum odit accusantium corrupti eveniet et cum temporibus, tempora amet laboriosam. Incidunt, iste sequi. Est architecto sed quasi eveniet consectetur aliquam amet similique consequuntur dolor dolorum itaque eos aut non ipsum sapiente repudiandae iure, reprehenderit perspiciatis voluptate dicta qui maiores. Tempora praesentium accusamus esse? Voluptas tempore ex hic, laboriosam animi debitis, ullam atque illo exercitationem nesciunt alias laudantium vel rem doloremque blanditiis at ipsa quas doloribus adipisci, vero soluta aliquam ipsum! Dolores, optio in.</p>
            </div>
            <div className={solution.solution__section} style={{ gridArea: '2 / 1 / 3 / 6' }}>
                <h3>Материалы</h3>
                <div className={solution.solution__materials}>
                    {tempTypes.map( type => <Material key={type} type={MaterialTypes[type]} /> )}
                </div>
            </div>
        </>
    )
}

const Report = () => {
    return(
        <>
            <div className={solution.solution__section} style={{ gridArea: '1 / 1 / 2 / 6' }}>
                <h3>Название</h3>
                <input type="text" placeholder="Название" />
                <h3>Описание</h3>
                <input type="text" placeholder="Описание" />
                <h3>Стек</h3>
                <input type="text" placeholder="Стек технологий" />
                <h3>GithubUrl?</h3>
                <h3>DemoUrl?</h3>
            </div>
            <div className={solution.solution__section} style={{ gridArea: '2 / 1 / 3 / 6' }}>
                <h3>Files</h3>
            </div>
            <button type="button">Отправить</button>
        </>
    )
}

const Material = ({ type }) => {
    const Icon = type.icon
    
    return(
        <div className={solution.solution__material} style={{ background: type.background }}>
            <h4 style={{ color: type.color }}>{type.title}</h4>
            <span style={{ color: type.color }}><Icon /></span>
        </div>
    )
}

const Chat = () => {
    return(
        <div className={solution.chat}>
            <div className={solution.chat__header}>
                <div className={solution.chat__headerImage}>

                </div>
                <div className={solution.chat__headerContent}>
                    <h3>Компания</h3>
                </div>
            </div>
            <div className={solution.chat__content}>
                <div className={solution.chat__contentAnswer}>
                    <div className={solution.chat__contentAnswerImage}></div>
                    <div className={solution.chat__contentAnswerText}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate aperiam nobis cupiditate facilis accusamus atque, odio repellat quia vitae blanditiis adipisci praesentium quis sint autem quasi. Expedita, sit incidunt.</p>
                    </div>
                </div>
                <div className={solution.chat__contentMy}>
                    <div className={solution.chat__contentMyText}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate aperiam nobis cupiditate facilis accusamus atque, odio repellat quia vitae blanditiis adipisci praesentium quis sint autem quasi. Expedita, sit incidunt.</p>
                    </div>
                    <div className={solution.chat__contentMyImage}></div>
                </div>
            </div>
            <div className={solution.chat__input}>
                <input type="text" placeholder="Сообщение" />
                <button type="button"></button>
            </div>
        </div>
    )
}

export default Solution