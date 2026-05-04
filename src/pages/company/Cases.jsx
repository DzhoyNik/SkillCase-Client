import { useNavigate } from "react-router"
import Footer from "../../components/Footer"
import Overlay from "../../components/Overlay"
import wrapper from '../../css/profile.module.css'
import styles from './company.module.css'
import { COMPANY_ROUTE } from "../../utils/consts"
import { useContext, useEffect, useState } from "react"
import { Context } from "../.."
import { getAllCases } from "../../api/companyAPI"
import { observer } from "mobx-react-lite"
import Case from "../../components/Case"

const Cases = observer(() => {
    const { company } = useContext(Context)
    const navigate = useNavigate()
    const [ cases, setCases ] = useState([])

    useEffect(() => {
        getAllCases(company.company.id)
            .then( data => setCases(data) )
            .catch ( e => console.log(e) )
    }, [])

    return(
        <div className={styles.cases}>
            <div className={styles.cases__toolbar}>
                <button type="button" onClick={() => navigate(`${COMPANY_ROUTE}?page=create`)}>Создать кейс</button>
            </div>
            <div className={styles.cases__content}>
                {cases.length > 0 ? cases.map( item => <Case key={item.id} data={item} company={company?.company.name} /> ) : <NoCases />}
            </div>
        </div>
    )
})

const NoCases = () => {
    return(
        <>
            <h4>У вас нет опубликованных кейсов</h4>
        </>
    )
}

export default Cases