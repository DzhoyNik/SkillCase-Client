import { useState } from 'react'
import styles from './company.module.css'
import { createCase } from '../../api/companyAPI'

const Create = () => {
    const [ payload, setPayload ] = useState({
        title: '',
        description: '',
        companyId: null, // Test
        caseStatusId: 1,
        caseDifficultyId: 1
    })

    const handleCreate = async () => {
        if ( !payload.title || !payload.description ) return

        try {
            createCase(payload).then( data => console.log(data) )
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className={styles.create}>
            <div className={styles.create__section}>
                <h3>Название</h3>
                <input type="text" value={payload.title} onChange={(e) => setPayload({...payload, title: e.target.value})} />
                <h3>Описание</h3>
                <textarea value={payload.description} onChange={(e) => setPayload({...payload, description: e.target.value})} />
                <h3>Сложность</h3>
                <select value={payload.caseDifficultyId} onChange={(e) => setPayload({...payload, caseDifficultyId: parseInt(e.target.value)})}>
                    <option value="1">Легкий</option>
                    <option value="2">Средний</option>
                    <option value="3">Сложный</option>
                </select>
            </div>
            <div className={styles.create__section}>
                <h3>Теги</h3>
                <input type="checkbox" />
                <p>tag1</p>
                <input type="checkbox" />
                <p>tag2</p>
                <input type="checkbox" />
                <p>tag3</p>
            </div>
            <button type="button" onClick={handleCreate}>Создать</button>
        </div>
    )
}

export default Create