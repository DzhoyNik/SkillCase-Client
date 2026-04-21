import Overlay from "../../components/Overlay"
import Sidebar from "../../components/Sidebar"
import styles from '../../css/profile.module.css'
import solution from './solution.module.css'
import status from '../../css/status.module.css'
import MaterialTypes from "./MaterialTypes"
import { NavLink, useNavigate, useSearchParams } from "react-router"
import tempSolutionData from "./tempData"
import { IoArrowBack } from "react-icons/io5"
import { PORTFOLIO_ROUTE } from "../../utils/consts"

const tempTypes = [ 'document', 'spreadsheet', 'presentation', 'image', 'archive', 'source', 'design', 'link', 'video' ]

const Solution = () => {
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()
    const page = searchParams.get('page')
    const _case = tempSolutionData.case

    console.log(tempSolutionData)

    return(
        <>
            <Overlay />
            <div className={styles.wrapper}>
                <div className={styles.wrapper__content}>
                    <div className={solution.solution}>
                        <div className={solution.solution__back}>
                            <button type="button" onClick={() => navigate(PORTFOLIO_ROUTE)}><IoArrowBack /> Назад</button>
                        </div>
                        <div className={solution.solution__section}>
                            <div className={solution.solution__sectionHeader}>
                                <div className={solution.solution__sectionHeaderContent}>
                                    <h2 className={solution.solution__sectionTitle}>{_case.title}</h2>
                                    <h4 className={solution.solution__sectionDifficulty}><span>{_case.difficulty}</span></h4>
                                </div>
                                <div className={solution.solution__sectionStatus}>
                                    <div className={`${status.status}`}>
                                        <p>{_case.status.title}</p>
                                    </div>
                                </div>
                            </div>
                            <p className={solution.solution__sectionDescription}>{_case.description}</p>
                        </div>
                        <div className={solution.solution__section}>
                            <div className={solution.solution__toolBar}>
                                <NavLink to={`?page=info`} className={page === 'info' && solution.solution__active}>Информация</NavLink>
                                <NavLink to={`?page=report`} className={page === 'report' && solution.solution__active}>Отчет</NavLink>
                                <h4>Чат</h4>
                            </div>
                        </div>
                        <div className={solution.solution__chapter}>
                            <Chat company={ tempSolutionData.company } messages={ tempSolutionData.chat.messages } />
                            {page === 'info' ? <Info data={tempSolutionData} /> : <Report /> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Info = ({ data }) => {
    return(
        <>
            <div className={solution.solution__section} style={{ gridArea: '1 / 1 / 2 / 6' }}>
                <h3>Требования</h3>
                <p>{data.info.requirements}</p>
            </div>
            <div className={solution.solution__section} style={{ gridArea: '2 / 1 / 3 / 6' }}>
                <h3>Материалы</h3>
                <div className={solution.solution__materials}>
                    {data.info.materials.map( data => <Material key={data.id} type={MaterialTypes[data.type]} /> )}
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

const Chat = ({ company, messages }) => {
    return(
        <div className={`${solution.solution__section} ${solution.chat}`}>
            <div className={solution.chat__header}>
                <div className={solution.chat__headerImage}>

                </div>
                <div className={solution.chat__headerContent}>
                    <h3>{company.employee.name}</h3>
                    <h4>{company.title}</h4>
                    <p>{company.employee.post}</p>
                </div>
            </div>
            <div className={solution.chat__content}>
                {Array.isArray(messages) && messages.map( message => {
                    if(message.sender === 'company') {
                        return(
                            <div key={message.id} className={solution.chat__contentAnswer}>
                                <div className={solution.chat__contentAnswerImage}></div>
                                <div className={solution.chat__contentAnswerText}>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        )
                    } else if (message.sender === 'system') {
                        return(
                            <div key={message.id} className={solution.chat__contentSystem}>
                                <h4>{message.text}</h4>
                            </div>
                        )
                    }
                    else {
                        return(
                            <div key={message.id} className={solution.chat__contentMy}>
                                <div className={solution.chat__contentMyText}>
                                    <p>{message.text}</p>
                                </div>
                                <div className={solution.chat__contentMyImage}></div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={solution.chat__input}>
                <input type="text" placeholder="Сообщение" />
                <button type="button"></button>
            </div>
        </div>
    )
}

export default Solution