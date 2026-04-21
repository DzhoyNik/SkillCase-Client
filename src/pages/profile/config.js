const BASE = 250
const GROWTHEXPONENT = 1.76

const getXP = ( level ) => {
    return Math.floor(BASE * Math.pow(level, GROWTHEXPONENT))
}

const getProgressPercent = ( currentXP, grade ) => {
    return Math.floor((( currentXP - grade.min ) / ( grade.max - grade.min )) * 100)
}

const getGrade = ( level, currentXP, cases ) => {
    const progress = getProgressPercent( currentXP, { min: getXP(level - 1), max: getXP(level) } )

    return {
        level: {
            level: level,
            progress: progress,
            min: getXP(level - 1),
            max: getXP(level)
        },
        stats: {
            scores: currentXP,
            cases: cases,
        }
    }
}

export {
    getXP,
    getGrade,
    getProgressPercent
}