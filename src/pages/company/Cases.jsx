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
import { getTagsCase } from "../../api/casesAPI"

const Cases = observer(() => {
    const { company } = useContext(Context)
    const navigate = useNavigate()
    const [ cases, setCases ] = useState([])

    useEffect(() => {
        if (!company?.company?.id) return

        const fetchCases = async () => {
            try {
                const data = await getAllCases(company.company.id).catch( e => console.log(e) )

                const casesWithTags = await Promise.all(
                    data.map( async item => {
                        const tags = await getTagsCase(item.id)

                        return {
                            ...item,
                            tags
                        }
                    })
                )

                setCases(casesWithTags)
            } catch (e) {
                console.log(e)
            }
        }

        fetchCases()
    }, [company?.company?.id])

    return(
        <div className={styles.cases}>
            <div className={styles.cases__toolbar}>
                <button type="button" onClick={() => navigate(`${COMPANY_ROUTE}?page=create`)}>Создать кейс</button>
            </div>
            <div className={styles.cases__content}>
                { cases.length > 0
                    ? cases.map( item => <Case key={item.id} data={item} company={company?.company.name} tags={item.tags} onClick={() => navigate(`${COMPANY_ROUTE}?page=case&case=${item.id}`)} /> ) : <NoCases />
                }
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