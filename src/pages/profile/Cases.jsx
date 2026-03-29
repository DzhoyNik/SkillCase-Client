import styles from "./profile.module.css"

const statusClass = {
    accept: styles.profile__casesStatusAccepted,
    reject: styles.profile__casesStatusRejected
}

const CaseStatus = {
    accepted: {
        title: 'Принят',
        style: 'accept'
    },
    processed: {
        title: 'В процессе',
        style: 'process'
    },
    rejected: {
        title: 'Отказ',
        style: 'reject'
    }
}

const casesDataTemp = [
    {
        id: 1,
        title: 'Интернет-магазин техники',
        company: 'DNS',
        status: CaseStatus.accepted,
        date: '12.03.2026'
    },
    {
        id: 2,
        title: 'CRM система для фитнес клуба',
        company: 'Альфа',
        status: CaseStatus.processed,
        date: '05.03.2026'
    },
    {
        id: 3,
        title: 'Лендинг для стартапа',
        company: 'Startup Lab',
        status: CaseStatus.rejected,
        date: '28.02.2026'
    },
    {
        id: 4,
        title: 'Мобильное приложение доставки',
        company: 'DeliveryGo',
        status: CaseStatus.processed,
        date: '20.02.2026'
    },
    {
        id: 5,
        title: 'Редизайн сайта университета',
        company: 'КемГУ',
        status: CaseStatus.accepted,
        date: '10.02.2026'
    },
    {
        id: 6,
        title: 'Система учета сотрудников',
        company: 'Газпром',
        status: CaseStatus.processed,
        date: '02.02.2026'
    },
    {
        id: 7,
        title: 'Аналитическая панель продаж',
        company: 'Сбер',
        status: CaseStatus.accepted,
        date: '28.01.2026'
    },
    {
        id: 8,
        title: 'Чат для команды разработки',
        company: 'VK',
        status: CaseStatus.rejected,
        date: '15.01.2026'
    },
    {
        id: 9,
        title: 'Сайт-портфолио дизайнера',
        company: 'Freelance',
        status: CaseStatus.accepted,
        date: '10.01.2026'
    },
    {
        id: 10,
        title: 'Сервис бронирования отелей',
        company: 'Booking',
        status: CaseStatus.processed,
        date: '05.01.2026'
    },
    {
        id: 11,
        title: 'Платформа онлайн-курсов',
        company: 'SkillBox',
        status: CaseStatus.processed,
        date: '28.12.2025'
    },
    {
        id: 12,
        title: 'ToDo приложение с авторизацией',
        company: 'Pet Project',
        status: CaseStatus.accepted,
        date: '20.12.2025'
    },
    {
        id: 13,
        title: 'Интернет-магазин одежды',
        company: 'Wildberries',
        status: CaseStatus.rejected,
        date: '10.12.2025'
    }
];

const Cases = () => {
    return(
        <div className={`${styles.profile__mainSection} ${styles.profile__cases}`}>
            <div className={styles.profile__casesHeader}>
                <h3>Название</h3>
                <h3>Компания</h3>
                <h3>Статус</h3>
                <h3>Дата</h3>
            </div>
            {casesDataTemp.map( data => <CaseSection key={data.id} data={data} status={data.status} /> )}
        </div>
    )
}

const CaseSection = ({ data, status = CaseStatus.processed }) => {
    return(
        <div className={styles.profile__casesSection}>
            <p>{data.title}</p>
            <p>{data.company}</p>
            <div className={`
                ${styles.profile__casesSectionStatus}
                ${statusClass[status.style]}
            `}>
                <p>{status.title}</p>
            </div>
            <p>{data.date}</p>
            <button></button>
        </div>
    )
}

export default Cases