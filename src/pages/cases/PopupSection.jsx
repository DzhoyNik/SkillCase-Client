import { observer } from "mobx-react-lite"
import styles from './cases.module.css' 

const PopupSection = observer(({ filter, handleToggleFilter, options }) => {
    if (options.length === 0) return <p>Нет параметров</p>

    console.log(filter)
    return(
        <div className={styles.popup}>
            {options.map(data => 
                <div key={data.value} className={styles.popup__section} onClick={() => handleToggleFilter(data.type, data.value)}>
                    <div className={styles.popup__sectionMark}>
                        <div className={`${styles.popup__sectionMarkBody} ${filter[data.type]?.includes(data.value) && styles.popup__active}`} />
                    </div>
                    <p>{data.title}</p>
                </div>
            )}
        </div>
    )
})

export default PopupSection

// ${filter.includes(data.value) && styles.popup__active}