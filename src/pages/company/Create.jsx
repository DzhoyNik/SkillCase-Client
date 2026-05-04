import { useContext, useState } from 'react'
import styles from './company.module.css'
import { createCase } from '../../api/companyAPI'
import { Context } from '../..'

const Create = () => {
    const { company } = useContext(Context)

    const [ payload, setPayload ] = useState({
        title: '',
        description: '',
        companyId: company.company.id,
        caseStatusId: 1,
        caseDifficultyId: 1,
        points: 0
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
                <h3>Количество баллов</h3>
                <div style={{ position: 'relative' }}>
                    <input
                        type="range"
                        min={0}
                        max={300}
                        step={10}
                        value={payload.points}
                        onChange={(e) => setPayload({ ...payload, points: Number(e.target.value) })}
                        style={{ width: '100%' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '30px',
                        left: `${payload.points / 300 *100}%`,
                        transform: 'translateX(-50%)',
                        fontSize: '16px',
                        color: 'var(--font-color-1)',
                        fontFamily: 'montserrat, sans-serif'
                    }}>
                        {payload.points}
                    </div>
                </div>
            </div>
            <div className={styles.create__section}>
                <h3>Теги</h3>
                <div className={styles.create__tags}>
                    <h4>Добавить тег</h4>
                </div>
            </div>
            <button type="button" onClick={handleCreate}>Создать</button>
        </div>
    )
}

export default Create