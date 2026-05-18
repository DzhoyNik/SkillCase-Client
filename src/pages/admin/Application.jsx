import { useEffect, useState } from "react"
import { getApplication } from "../../api/companyAPI"
import styles from "./admin.module.css"

const Application = () => {
    const [ application, setApplication ] = useState({})

    useEffect( () => {
        getApplication().then(data => setApplication(data))
    }, [])

    return(
        <>
            <p>Компания: </p>
            <p>Описание: </p>
            <p>Сфера: </p>
            <p>ИНН: </p>
            <p>ОГРН: </p>
            <p>email: </p>
            <p>site: </p>
            <p>ФИО представителя: </p>
            <p>Должность: </p>
            <button>Одобрить</button>
            <button>Отменить</button>
        </>
    )
}

export default Application