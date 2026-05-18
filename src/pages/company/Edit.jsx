import { useContext, useEffect, useState } from 'react'
import styles from './company.module.css'
import { createCase, getAllTags, getCase, updateCase } from '../../api/companyAPI'
import { Context } from '../..'
import { useNavigate, useSearchParams } from 'react-router'
import { COMPANY_ROUTE } from '../../utils/consts'

const Edit = () => {
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()
    const caseId = searchParams.get('case')
    const { company } = useContext(Context)
    const [ tags, setTags ] = useState([])
    const [ selectedTags, setSelectedTags ] = useState([])

    const [ payload, setPayload ] = useState({
        title: '',
        description: '',
        companyId: company.company.id,
        caseStatusId: 1,
        caseDifficultyId: 1,
        points: 0
    })

    useEffect(() => {
        getAllTags().then( data => setTags(data) )
        getCase(company.company.id, caseId).then(data => {
            setPayload(data.item)
            data.tags.map(item => handleTagSelect(item.tag))
        })
    }, [])

    const handleTagSelect = ( tag ) => {
        setSelectedTags( prev => {
            if (prev.find( item => item.id === tag.id)) return prev
            return [ ...prev, tag ]
        })
    }

    const handleTagDeselect = ( tagId ) => {
        setSelectedTags( prev => prev.filter( item => item.id !== tagId ) )
    }

    const handleEdit = async () => {
        try {
            const tagIds = selectedTags.map( tag => tag.id )
            updateCase(caseId, {...payload, tags: tagIds}).then( () => navigate(-1) )
            // updateCase(caseId, {...payload, tags: tagIds}).then( e => console.log(e) )
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
                    <div className={styles.create__tagsSelected}>
                        {selectedTags?.map( tag => (
                            <div key={tag.id} className={styles.create__tag} onClick={() => handleTagDeselect(tag.id)}>
                                <h4>{tag.tag}</h4>
                            </div>
                        ))}
                    </div>
                    <h4>Добавить тег</h4>
                    <div className={styles.create__tagsList}>
                        {tags?.filter( tag => !selectedTags?.some( selected => selected.id === tag.id ) ).map( tag => (
                            <div key={tag.id} className={styles.create__tag} onClick={() => handleTagSelect(tag)}>
                                <h4>{tag.tag}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button type="button" onClick={handleEdit}>Сохранить изменения</button>
            <button type="button" onClick={() => navigate(-1)}>Отмена</button>
        </div>
    )
}

export default Edit