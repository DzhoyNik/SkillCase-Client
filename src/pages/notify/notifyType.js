import { FaBell, FaBriefcase, FaBuilding, FaCheck, FaClock, FaComment, FaTimes, FaUser } from "react-icons/fa"

export const notifyType = {
    newCase: {
        label: 'Новый кейс',
        icon: FaBriefcase,
        color: '#3B82F6',
        background: 'rgba(59, 130, 246, 0.2)'
    },

    comment: {
        label: 'Новый комментарий',
        icon: FaComment,
        color: '#A855F7',
        background: 'rgba(168, 85, 247, 0.2)'
    },

    accept: {
        label: 'Решение принято',
        icon: FaCheck,
        color: '#22C55E',
        background: 'rgba(34, 197, 94, 0.2)'
    },

    reject: {
        label: 'Решение отклонено',
        icon: FaTimes,
        color: '#EF4444',
        background: 'rgba(239, 68, 68, 0.2)'
    },

    deadline: {
        label: 'Скоро дедлайн',
        icon: FaClock,
        color: '#F59E0B',
        background: 'rgba(245, 158, 1, 0.21)'
    },

    system: {
        label: 'Системное уведомление',
        icon: FaBell,
        color: '#06B6D4',
        background: 'rgba(6, 182, 212, 0.2)'
    },

    company: {
        label: 'Ответ от компании',
        icon: FaBuilding,
        color: '#EAB308',
        background: 'rgba(234, 179, 8, 0.2)'
    },

    profile: {
        label: 'Обновление профиля',
        icon: FaUser,
        color: '#9CA3AF',
        background: 'rgba(156, 163, 175, 0.2)'
    }
}