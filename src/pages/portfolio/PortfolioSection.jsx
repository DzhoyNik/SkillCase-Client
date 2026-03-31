import portfolio from './portfolio.module.css'

const statusClass = {
    accept: portfolio.portfolio__casesStatusAccepted,
    reject: portfolio.portfolio__casesStatusRejected
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

const CaseDifficulty = {
    easy: '15%',
    medium: '50%',
    hard: '100%'
}

const PortfolioSection = ({ difficulty, title, company, description, tags, status = CaseStatus.processed }) => {
    return(
        <div className={portfolio.portfolio__listSection}>
            <div className={portfolio.portfolio__listSectionDifficulty}>
                <p>Легко</p>
                <div className={portfolio.case__difficultyProgressBar}>
                    <div className={portfolio.case__difficultyProgress} style={{ width: CaseDifficulty[difficulty] }} />
                </div>
                <p>Сложно</p>
            </div>
            <div className={portfolio.portfolio__listSectionHeader}>
                <h3 className={portfolio.portfolio__listSectionTitle}>{title}</h3>
                <div className={`
                    ${portfolio.portfolio__casesSectionStatus}
                    ${statusClass[status.style]}
                `}>
                    <p>{status.title}</p>
                </div>
            </div>
            <p className={portfolio.portfolio__listSectionDescription}>{description}</p>
            <div className={portfolio.portfolio__tags}>
                {tags.map( tag => (
                    <div key={tag} className={portfolio.portfolio__tag}>
                        <h4>{tag}</h4>
                    </div>
                ) )}
            </div>
            <div className={portfolio.portfolio__listSectionCompany}>
                <div className={portfolio.portfolio__listSectionCompanyImage}>

                </div>
                <h4>{company}</h4>
            </div>
        </div>
    )
}

export default PortfolioSection