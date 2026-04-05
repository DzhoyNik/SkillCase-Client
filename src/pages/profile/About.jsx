import styles from './profile.module.css'

const About = () => {
    return(
        <div className={`${styles.profile__section} ${styles.profile__about}`}>
            <div className={styles.profile__chapter}>
                <p className={styles.profile__chapterTitle}>О себе</p>
                <p className={styles.profile__chapterText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, unde ex, necessitatibus dolorum sed repellendus tempore quod debitis praesentium asperiores inventore delectus ipsa rerum repudiandae magnam provident molestias consequuntur culpa.</p>
            </div>
            <div className={styles.profile__chapter}>
                <p className={styles.profile__chapterTitle}>Место учебы</p>
                <p className={styles.profile__chapterText}>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}

export default About