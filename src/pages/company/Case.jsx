import { useContext, useEffect, useState } from "react"
import { deleteCase, getCase } from "../../api/companyAPI"
import { Context } from "../.."
import { useNavigate, useSearchParams } from "react-router"
import { observer } from "mobx-react-lite"
import styles from './company.module.css'
import { FaEdit } from "react-icons/fa"
import { FaTrash } from "react-icons/fa6"
import { HiOutlineStatusOnline } from "react-icons/hi"
import { COMPANY_ROUTE } from "../../utils/consts"

const Case = observer(() => {
    const { company } = useContext(Context)
    const [ searchParams ] = useSearchParams()
    const navigate = useNavigate()
    const caseId = searchParams.get('case')
    const [ data, setData ] = useState([])

    const difficulty = {
        1: {
            name: 'Легкий',
            progress: '15%'
        },
        2: {
            name: 'Средний',
            progress: '50%'
        },
        3: {
            name: 'Сложный',
            progress: '100%'
        }
    }

    useEffect(() => {
        if (!company?.company?.id) return

        getCase(company.company.id, caseId)
            .then( data => setData(data) )
            .catch( err => console.log(err) )
    }, [company?.company?.id])

    if (!data) {
        return <h1>Загрузка...</h1>
    }

    const handleBack = () => {
        navigate(`${COMPANY_ROUTE}?page=cases`)
    }

    const handleEdit = () => {
        navigate(`${COMPANY_ROUTE}?page=edit&case=${caseId}`)
    }

    const handleDelete = ( caseId ) => {
        deleteCase(caseId)
            .then(() => handleBack())
            .catch(err => console.log(err))
    }

    return(
        <div className={styles.case}>
            <div className={styles.case__actions}>
                <div className={styles.case__actionsBack}>
                    <button type="button" onClick={handleBack}>Назад</button>
                </div>
                <div className={styles.case__difficulty}>
                    <div className={styles.case__difficultyTitle}>
                        <h4>Уровень:</h4>
                        <h3>{difficulty[data.item?.caseDifficultyId]?.name}</h3>
                    </div>
                    <div className={styles.case__difficultyProgressBar}>
                        <div className={`${styles.case__difficultyProgress}`} style={{ width: difficulty[data.item?.caseDifficultyId]?.progress }} />
                    </div>
                </div>
                <div className={styles.case__actionsCase}>
                    {/* <button type="button"><HiOutlineStatusOnline /></button> */}
                    <button type="button" onClick={handleEdit}><FaEdit /></button>
                    <button type="button" className={styles.case__actionsDelete} onClick={() => handleDelete(caseId)}><FaTrash /></button>
                </div>
            </div>
            <div className={styles.case__section}>
                <h1>{data.item?.title}</h1>
                <p className={styles.case__description}>{data.item?.description}</p>
                <div className={styles.case__tags}>
                    { data.tags?.map( item => (
                        <h4 key={item.tag.id} className={styles.case__tag}>{item.tag.tag}</h4>
                    ))}
                </div>
            </div>
            <div className={styles.case__section}>
                <p>[ Информация ]</p>
            </div>
            <div className={styles.case__section}>
                <p>[ Информация ]</p>
            </div>
            <div className={styles.case__section}>
                <p>[ Информация ]</p>
            </div>
        </div>
    )
})

export default Case